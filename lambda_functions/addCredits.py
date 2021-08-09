import json
import pymysql
import os 
import boto3
import base64
from botocore.exceptions import ClientError
port = 3306


def lambda_handler(event, context):
    print(event)
    try:
        #Secret Manager
        secret_name = "group12Secret"
        region_name = "us-east-1"
        hostname = ''
        username = ''
        password = ''
        databasename=''
        # Create a Secrets Manager client
        session = boto3.session.Session()
        client = session.client(
            service_name='secretsmanager',
            region_name=region_name
        )
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
        #get database credentials from secret manager
        if 'SecretString' in get_secret_value_response:
            secret = get_secret_value_response['SecretString']
            split_data = secret.replace("\"", "").replace("{", "").replace("}", "").split(",")
            for spData in split_data:
                splitedValues = spData.split(":")
                if splitedValues[0] == "host":
                    hostname = splitedValues[1]
                if splitedValues[0] == "username":
                    username = splitedValues[1]
                if splitedValues[0] == "password":
                    password = splitedValues[1]
                if splitedValues[0] == "databaseName":
                    databasename = splitedValues[1]
            
            #Database Connection
            connection = pymysql.connect(host=hostname,user=username,
                              passwd=password,db=databasename,
                              connect_timeout=5,
                              cursorclass=pymysql.cursors.DictCursor)
            
            #Add new credits in the databse 
            if event['httpMethod'] == 'POST':
                data = event['multiValueQueryStringParameters']
                name = data['username'][0]
                credit = data['credit'][0]
               
                cursor = connection.cursor()
                sql = "SELECT credits FROM userinfo WHERE email=%s"
                cursor.execute(sql,(name,))
                row = cursor.fetchall()
                data = row[0]
                creditPre = data['credits']
              
                newCredit = creditPre + int(credit)
                
                if newCredit > 0:
                    sql = "UPDATE userinfo SET credits=%s  WHERE email=%s"
                    cursor.execute(sql, (newCredit, name))
                    cursor.close()
                    connection.commit()
              
                  
                    return {
                        'statusCode': 200,
                        'headers': {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                            'Access-Control-Allow-Credentials': 'true',
                            'Content-Type': 'application/json'
                        },
                        'body': json.dumps("true")
                    }
                else:
                    return {
                        'statusCode': 200,
                        'headers': {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                            'Access-Control-Allow-Credentials': 'true',
                            'Content-Type': 'application/json'
                        },
                        'body': json.dumps("false")
                    }
            elif event['httpMethod'] == 'GET':
                #Fetch users' credits from databse
                data = event['multiValueQueryStringParameters']
                name = data['username']
                print("name",name)
                cursor = connection.cursor()
                sql = "SELECT credits FROM userinfo WHERE email=%s"
                cursor.execute(sql,(name,))
                row = cursor.fetchall()
                data = row[0]
                cursor.close()
                connection.commit()
                print(data)  
                return {
                    'statusCode': 200,
                    'headers': {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                        'Access-Control-Allow-Credentials': 'true',
                        'Content-Type': 'application/json'
                    },
                    'body': json.dumps(data)
                }
    except:
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json'
            },
            'body': json.dumps("false")
        }
        sys.exit()
 
    

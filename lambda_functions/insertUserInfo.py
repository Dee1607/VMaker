import json
import pymysql
import os 
import boto3
import base64
from botocore.exceptions import ClientError

port = 3306


def lambda_handler(event, context):
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
            print(secret)
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
            #database connection            
            connection = pymysql.connect(host=hostname,user=username,
                              passwd=password,db=databasename,
                              connect_timeout=5,
                              cursorclass=pymysql.cursors.DictCursor)
            #insert newly registered user information in the database
            data = event['multiValueQueryStringParameters']
            name = data['username'][0]
            userpass = data['password'][0]
            email = data['email'][0]
            cursor = connection.cursor()
            sql = "INSERT INTO `userinfo` (`username`, `upassword`,`email`) VALUES (%s, %s,%s)"
            cursor.execute(sql , (name,userpass,email))
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
                'body': json.dumps("stored")
            }
    except:
        return {
            'statusCode': 400,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json'
            },
            'body': json.dumps("error")
        }
        sys.exit()
 
    

import boto3
import json

def lambda_handler(event, context):
    s3 = boto3.resource('s3')
    BUCKET_NAME= "input12"
    data = event['multiValueQueryStringParameters']
    FOLDER_NAME = data['username'][0]
    bucket = s3.Bucket(BUCKET_NAME)
    #Delete data from the S3 bucket
    result = bucket.objects.filter(Prefix = FOLDER_NAME+"/").delete()
    
    return {
        'statusCode': 200,
        'body': json.dumps('true')
    }

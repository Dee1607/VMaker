import json
import boto3

def lambda_handler(event, context):
    user = event['queryStringParameters']['user']
    s3_bucket_name = "myuploaded"
    s3 = boto3.resource('s3')
    obj = s3.Bucket(s3_bucket_name)
    vid_array = []
    prefix = user+str("/")
    for obj in obj.objects.filter(Prefix = prefix):
        if not obj.key == prefix :
            url = 'https://'+s3_bucket_name+'.s3.amazonaws.com/'+obj.key
            vid_array.append(url)
    return {
        'statusCode': 200,
        'headers': {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': '*'
        },
        'body': json.dumps(vid_array)
    }
import json
import boto3

#https://docs.aws.amazon.com/code-samples/latest/catalog/python-sns-sns_basics.py.html
#

def lambda_handler(event, context):
    
    data = event['multiValueQueryStringParameters'];
    email = data['email'][0];
    username = data['username'][0];
    print(username)
    sns = boto3.client("sns", region_name="us-east-1")
    # Create topic
    response = sns.create_topic(Name=username)
    topic_arn = response["TopicArn"]

    print(topic_arn)

    # # Create SMS subscription
    # response = sns.subscribe(TopicArn=topic_arn, Protocol="SMS", Endpoint="+19024126844")
    # subscription_arn = response["SubscriptionArn"]

    # Create email subscription
    response = sns.subscribe(TopicArn=topic_arn, Protocol="email", Endpoint=email)
    subscription_arn = response["SubscriptionArn"]

    sns.publish(TopicArn = topic_arn, Message = 'Your video is ready!!!!')
    
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }
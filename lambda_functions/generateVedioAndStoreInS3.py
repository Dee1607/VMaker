import io
import boto3
import cv2
import moviepy
from PIL import Image
from moviepy.editor import *

vidname = "video.mp4"
audname = "audio.mp3"
outname = ""

def writeContent(final):
    # push the content in the csv file
    s3 = boto3.resource('s3')
    bucketName = "myuploaded"
    s3.Object(bucketName, outname).put(Body=open(outname, 'rb'))
    print('Successfully generation of video.mp4 on bucket named - output')

def combine_audio(vidname, audname, outname, fps=25):
    my_clip = moviepy.editor.VideoFileClip(vidname)
    audio_background = moviepy.editor.AudioFileClip(audname)
    final_clip = my_clip.set_audio(audio_background)
    final_clip.writeContent(outname, fps=1)

def lambda_function(event, context):
    user = event['username']
    outname = event['username']+'.mp4'
    s3_bucket_name = "input12"
    s3 = boto3.resource('s3')
    obj = s3.Bucket(s3_bucket_name)
    filesContent = ""
    Images = ""
    video_name = 'output.mp4v'
    num_of_images = 0
    img_array = []
    count = 0
    s3.Object(s3_bucket_name, 'audio.mp3').download_file('audio.mp3')
    for obj in obj.objects.filter(Prefix = user):
        if not obj.key == "Userr/":
            imageName = obj.key.split("/")
            s3.Object(s3_bucket_name, obj.key).download_file(imageName[1])
            count = count+1
            image = Image.open(imageName[1])
            new_image = image.resize((400, 400))
            rgb_im = new_image.convert('RGB')
            rgb_im.save(r'image.jpg')
            final1 = cv2.imread('image.jpg')
            img_array.append(final1)
            num_of_images = num_of_images + 1

    clip = ImageSequenceClip(img_array, fps=1)
    clip = clip.write_videofile('temp_withoutAudio.mp4', fps=1.0)
    clip = im.save('tmp/temp_withoutAudio.mp4')
    clip = clip.combine_audio("temp_withoutAudio.mp4", "audio.mp3", "output.mp4",25)

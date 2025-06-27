from moviepy.editor import VideoFileClip, AudioFileClip, concatenate_videoclips

# List your input video files in order
video_files = [
    "Video #1 1711.mp4",
    "Video #2 1715.mp4",
    "Video #3 1717.mp4",
    "Video #4 1724.mp4",
    "Video #5 1727.mp4",
    "Video #6 1734.mp4",
    "Video #7 1741.mp4",
    "Video #8 1746.mp4",
    "Video #9 1749.mp4",
    "Video #10 1751.mp4",
]

# Load each video clip
clips = [VideoFileClip(filename) for filename in video_files]

# Concatenate all the video clips into a single clip
final_video = concatenate_videoclips(clips, method="compose")

# Load your narration file
audio = AudioFileClip("narration.mp3")

# Set the audio for the final video
final_video = final_video.set_audio(audio)

# Write the final output
final_video.write_videofile("final_verbs_demo.mp4", codec="libx264", audio_codec="aac")
import cv2
import numpy as np

def verify_image(image_path):
    img = cv2.imread(image_path)
    if img is None:
        return False
    return True  # Implement ML model here for deeper verification

def verify_video(video_path):
    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        return False
    return True

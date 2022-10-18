import React, { useRef, useEffect } from 'react'
import Webcam from 'react-webcam'
import WardRobe from '../components/WardRobe'
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import { drawRect } from '../utilities';
import HomeBar from '../components/HomeBar';

function WardrobePage() {
    const canvasRef = useRef(null);
    const webcamRef = useRef(null);

    // ml functions
    const runCoco = async () => {
        const net = await cocossd.load();
        console.log("Handpose model loaded.");
        //  Loop and detect hands
        setInterval(() => {
            detect(net);
        }, 5);
    };
    const detect = async (net) => {
        // Check data is available
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            // Get Video Properties
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;

            // Set video width
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            // Set canvas height and width
            canvasRef.current.width = videoWidth;
            canvasRef.current.height = videoHeight;

            // Make Detections
            const obj = await net.detect(video);

            // Draw mesh
            const ctx = canvasRef.current.getContext("2d");
            drawRect(obj, ctx);
        }
    };

    useEffect(() => { runCoco() }, []);
    return (
        <div>
            <HomeBar/>
            <WardRobe />
            <div>
                <Webcam ref={webcamRef} muted={true} style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zindex: 9,
                    width: 640,
                    height: 480,
                }} />
                <canvas ref={canvasRef} style={{
                    position: "absolute",
                    marginLeft: "auto",
                    marginRight: "auto",
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    zindex: 8,
                    width: 640,
                    height: 480,
                }}></canvas>
            </div>
        </div>
    )
}
export default WardrobePage
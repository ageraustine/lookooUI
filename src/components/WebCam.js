import React, { useEffect, useState } from 'react'
import Webcam from "react-webcam";
import { Helmet } from "react-helmet";


function WebCamComponent() {
  const [mode, setMode] = useState("user");
  const webcamRef = React.useRef(null);
  const [image, setImage] = useState('');

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    },
    [webcamRef]
  );
  const videoConstraints = {
    width: 200,
    height: 200,
    facingMode: mode
  };
  useEffect(()=>{
    const tfscript = document.createElement("script");
    const mobileNetScript = document.createElement("script");
    tfscript.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1";
    mobileNetScript.src = "https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0";
    tfscript.async = true;
    mobileNetScript.async = true;
    document.body.appendChild(tfscript);
    document.appendChild(mobileNetScript);

    return ()=>{
      
    }
  }, []);
  return (
    <div class="container mt-2 d-flex justify-content-center">
      {
        image.length == 0 &&
        <div class="d-flex flex-column">
          <Webcam style={{ borderColor: 'green' }} ref={webcamRef} height={200} width={200} screenshotFormat="image/jpeg" videoConstraints={videoConstraints} autoPlay={true} />
          <div class="btn btn-danger mt-2"
            onClick={(e) => {
              e.preventDefault(); capture()
            }}
          >
            Capture
          </div>
        </div>
      }
      {
        image.length > 0 &&
        <div class="d-flex flex-column">
          <img class="image" src={image} id='img'></img>
           
          <button class="btn btn-success mt-1" onClick={(e)=>{
            e.preventDefault();
            mobilenet.load().then(model => {
              // Classify the image.
              model.classify(img).then(predictions => {
                console.log('Predictions: ');
                console.log(predictions);
              });
            });
          }} >
            WARDROBE ADD
          </button>
          <button class="btn btn-danger rounded-5 mt-1" onClick={(e) => {
            e.preventDefault();
            setImage('');
          }}>RETAKE</button>
        </div>
      }

    </div>


  )
}

export default WebCamComponent
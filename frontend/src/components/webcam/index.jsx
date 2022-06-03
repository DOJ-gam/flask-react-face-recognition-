import "./index.scss";
import React, { useState } from "react";
import axios from "axios";
import Webcam from "react-webcam";

const WebCam = () => {
  const webcamRef = React.useRef(null);
  const videoContraints = {
    width: 200,
    height: 200,
    facingMode: "user",
  };

  const [name, setName] = useState("");

  const capture = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    console.log(`ImageSrc = ${imageSrc}`);

    try {
      const response = await axios.post("http://127.0.0.1:3000/api", {
        data: imageSrc,
      });
      console.log(`Response = ${response}`);
      setName(response.data);
    } catch (error) {
      console.log(`Error = ${error}`);
    }
  }, [webcamRef]);

  return (
    <div>
      <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={880}
        videoConstraints={videoContraints}
      />
      <button onClick={capture}>Scan</button>
      <h2>{name}</h2>
    </div>
  );
};

export default WebCam;

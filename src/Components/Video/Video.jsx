import React, { useRef, useEffect } from "react";
import "./Video.css";
import lao from '../../assets/Img/laos.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare, faTrashAlt , faCamera , faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 300, height: 300 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("Error accessing camera: ", err);
      });

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const capturedImage = canvas.toDataURL('image/jpeg');
    console.log('Captured Image:', capturedImage);
  };

  return (

    
    <div className="background">

     <Link to="/">
        <button className="back-arrow">
          <FontAwesomeIcon icon={faArrowLeft} className="icon-back" />
          <span className="T-back">ກັບໜ້າ</span>
        </button>
      </Link>

      <p className="titl">ປ່ຽນພາສາມືເປັນຂໍ້ຄວາມ</p>
      <h1 className="Show-results">ຜົນໄດ້ຮັບ:</h1>

      <div className="Control">
        <div className="content-container">
          
          <div className="Process">
            <div className="video-container">
              <video className="video" ref={videoRef}></video>
            </div>
          </div>

          <div className="Show">
            <img className="im" src={lao} alt="laos Logo" />
          </div>
        </div>

    <div className="button">
     <button className="Stop">
        <FontAwesomeIcon icon={faSquare} className="icon-square" />
        <h2 className="T-stop">ຢຸດ</h2>
      </button>
      <button className="delete">
        <FontAwesomeIcon icon={faTrashAlt} className="icon-trash" />
        <h3 className="T-delete">ລືບ</h3>
     </button>    
    </div>
    
    <button className="capture" onClick={handleCapture}>
              <FontAwesomeIcon icon={faCamera} className="icon-camera" />
           <h3 className="T-capture">ຖ່າຍຮູບ</h3>
            </button>

      </div>
    </div>
  );
};

export default Video;

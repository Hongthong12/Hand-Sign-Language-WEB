
import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import camera from '../../assets/Img/camera.png';

const Main = () => {
  return (
    <div className="backgroun">
      <div className="pape">
        <p className="titles"> ປ່ຽນພາສາມືເປັນຂໍ້ຄວາມ </p>

        <div className="text">
          <img className='img' src={camera} alt="camera Logo" />
          <h1 className="text1"> ເປີດກ້ອງ </h1>
        </div>

     
        <Link to="/video" className="camera-link">
          <div className="circle">
            <FontAwesomeIcon icon={faCamera} className="icon" />
          </div>
          <h2 className="open"> ຄິກເພື່ອເປີດກ້ອງ </h2>
        </Link>
      </div>
    </div>
  );
}

export default Main;

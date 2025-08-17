import React from "react";
import "./guidecard.css";

const GuideCard = ({ imageSrc, text, buttonText, onButtonClick }) => {
  return (
    <div className="guide-card">
      <img src={imageSrc} alt="Guía" className="guide-image" />
      <p className="guide-text">{text}</p>

      {buttonText && (
        <button className="guide-button" onClick={onButtonClick}>
          {buttonText}
        </button>
        )}
    </div>
  );
};

export default GuideCard;

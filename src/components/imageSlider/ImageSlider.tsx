import React from "react";

interface PropsInterface {
  imgURL: string;
}

const ImageSlider: React.FC<PropsInterface> = ({ imgURL }) => {
  return (
    <div className="imageSlider">
      <img src={imgURL} alt="Zdjęcie obecnie wybranej opcji w danym kroku" />
    </div>
  );
};

export default ImageSlider;

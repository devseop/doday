import React, { useState } from 'react';
import cameraIcon from '../image/ic_camera.svg';

const Thumbnail = () => {
  const [fileImage, setFileImage] = useState(null);

  const insertImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    //@ts-ignore
    if (e.target.files[0]) {
      //@ts-ignore
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;

      if (previewImgUrl) {
        //@ts-ignore
        setFileImage(previewImgUrl);
      }
    };
  };

  // console.log(fileImage);

  return (
    <div className="mb-6">
      <p className="mb-[6px] font-semibold text-[14px]">Thumbnail</p>
      <div className="flex">
        {fileImage && (
          <img
            className="w-[84px] h-[84px] rounded-lg object-cover mr-3"
            alt="sample"
            src={fileImage}
          />
        )}
        <div className="relative">
          <input
            className="w-[84px] h-[84px] absolute opacity-0 z-10"
            type="file"
            accept="image/jpeg, image/jpg, image/png, image/svg"
            onChange={e => insertImg(e)}
          />
          <div className=" w-[84px] h-[84px] rounded-lg bg-ultraWhiteGray flex items-center justify-center">
            <img src={cameraIcon} alt="add icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;

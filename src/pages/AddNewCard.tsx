import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import cameraIcon from '../image/ic_camera.svg';
import closeIcon from '../image/ic_close.svg';

const AddNewCard = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  const fileInput = useRef<HTMLInputElement>(null);
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    fileInput.current?.click();
  };

  return (
    <React.Fragment>
      <div className="flex justify-between items-start">
        <div className="mb-6">
          <p className="text-xxl font-bold leading-[34px]">Add</p>
          <p className="text-xxl font-bold leading-[34px]">New Event</p>
        </div>
        <button onClick={goToMain}>
          <img src={closeIcon} alt="닫기" />
        </button>
      </div>
      <form className="flex flex-col justify-between">
        <div>
          <div className="mb-6">
            <p className="mb-[6px] font-semibold text-[14px]">Thumbnail</p>
            <button
              onClick={handleButtonClick}
              className="w-[84px] h-[84px] mb-4 rounded-lg bg-ultraWhiteGray flex items-center justify-center"
            >
              <img src={cameraIcon} alt="사진" />
            </button>
            <input
              ref={fileInput}
              className="hidden"
              type="file"
              accept="image/jpeg, image/jpg, image/png"
            />
          </div>
          <div className="mb-6">
            <p className="mb-[6px] font-semibold text-[14px]">Title</p>
            <input
              className="w-full h-9 px-3 py-3 rounded-lg cursor-text border border-ultraWhiteGray"
              placeholder="Add New Event Title"
            />
          </div>
          <div className="mb-6">
            <p className="mb-[6px] font-semibold text-[14px]">D-Day</p>
            <div className="flex gap-3">
              <input
                className="w-1/3 h-9 px-3 py-3 rounded-lg cursor-text border border-ultraWhiteGray"
                placeholder="Year"
              />
              <input
                className="w-1/3 h-9 px-3 py-3 rounded-lg cursor-text border border-ultraWhiteGray"
                placeholder="Month"
              />
              <input
                className="w-1/3 h-9 px-3 py-3 rounded-lg cursor-text border border-ultraWhiteGray"
                placeholder="Day"
              />
            </div>
          </div>
        </div>
        <button
          className="w-full bg-black rounded-lg h-[48px] mt-4 cursor-pointer"
          type="submit"
        >
          <span className="text-4 text-white font-bold">Add Event</span>
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddNewCard;

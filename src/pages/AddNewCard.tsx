import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Thumbnail from 'components/Thumbnail';
import closeIcon from '../image/ic_close.svg';
import { useAppDispatch } from 'hooks';
import { addCard } from 'store/cardSlice';
import checkIcon from '../image/ic_check.svg';
import cameraIcon from '../image/ic_camera.svg';

const AddNewCard = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [fileImage, setFileImage] = useState<any>('');

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

  //date
  const krDate = new Date().toLocaleString().slice(0, 14);
  const krYear = krDate.slice(0, 4);
  const krMonth = krDate.slice(6, 8);
  const krDay = krDate.slice(10, 12);
  const krToday = `${krYear}/${krMonth}/${krDay}`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addCard({
        cardId: date,
        title,
        date,
        thumbnail: fileImage,
      })
    );

    setTitle('');
    setDate('');
    setFileImage('');
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
      <form
        className="flex flex-col justify-between"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          {/* <Thumbnail /> */}
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
          <div className="mb-6">
            <p className="mb-[6px] font-semibold text-[14px]">
              D-Day (Only input numbers)
            </p>
            <input
              type="number"
              className="w-full h-9 px-3 py-3 rounded-lg cursor-text border border-ultraWhiteGray"
              placeholder={krToday}
              value={date}
              onChange={e => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div className="mb-6">
            <p className="mb-[6px] font-semibold text-[14px]">Title</p>
            <input
              type="text"
              className="w-full h-9 px-3 py-3 rounded-lg cursor-text border border-ultraWhiteGray"
              placeholder="Add New Event Title"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="w-full bg-black rounded-lg h-[48px] mt-4 cursor-pointer flex items-center justify-center"
          type="submit"
        >
          <img className="-ml-4" src={checkIcon} alt="check" />
          <span className="ml-2 text-4 text-white font-bold">Add Event</span>
        </button>
      </form>
    </React.Fragment>
  );
};

export default AddNewCard;

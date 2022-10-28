import React, { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { addTodo } from 'store/todoSlice';
import checkIcon from '../image/ic_check.svg';
import cameraIcon from '../image/ic_camera.svg';
import TodosHeader from 'components/TodosHeader';
import { krToday } from '../lib/date';

const AddNewCard = () => {
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [fileImage, setFileImage] = useState<any>('');
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  // upload and preview image
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTodo({
        todoId: date,
        title,
        date,
      })
    );

    setTitle('');
    setDate('');
    setFileImage('');
    alert('success');
    goToMain();
  };

  return (
    <div className="h-screen">
      <TodosHeader />
      <form
        className="flex flex-col justify-between mx-5 mt-5"
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
    </div>
  );
};

export default AddNewCard;

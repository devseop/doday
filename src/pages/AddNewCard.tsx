import React from 'react';
import { useNavigate } from 'react-router-dom';
import Thumbnail from 'components/Thumbnail';
import closeIcon from '../image/ic_close.svg';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setDate, setTitle } from 'store/cardSlice';

const AddNewCard = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  const dispatch = useAppDispatch();
  const { title, date } = useAppSelector(state => state.card);

  //date
  const krDate = new Date().toLocaleString().slice(0, 14);
  const krYear = krDate.slice(0, 4);
  const krMonth = krDate.slice(6, 8);
  const krDay = krDate.slice(10, 12);
  const krToday = `${krYear}/${krMonth}/${krDay}`;

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
      >
        <div>
          <Thumbnail />
          <div className="mb-6">
            <p className="mb-[6px] font-semibold text-[14px]">
              D-Day (Only input numbers)
            </p>
            <input
              className="w-full h-9 px-3 py-3 rounded-lg cursor-text border border-ultraWhiteGray"
              placeholder={krToday}
              value={date}
              onChange={e => {
                dispatch(setDate(e.target.value));
              }}
            />
          </div>
          <div className="mb-6">
            <p className="mb-[6px] font-semibold text-[14px]">Title</p>
            <input
              className="w-full h-9 px-3 py-3 rounded-lg cursor-text border border-ultraWhiteGray"
              placeholder="Add New Event Title"
              value={title}
              onChange={e => {
                dispatch(setTitle(e.target.value));
              }}
            />
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

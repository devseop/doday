import React, { useState } from 'react';
import { useAppDispatch } from 'hooks';
import { useNavigate } from 'react-router-dom';
import { addTodo } from 'store/todoSlice';
import checkIcon from '../image/ic_check.svg';
import TodosHeader from 'components/TodosHeader';
import { krToday } from '../lib/date';

const AddNewCard = () => {
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
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
    alert('success');
    goToMain();
  };

  return (
    <div className="h-screen">
      <TodosHeader />
      <form
        className="flex flex-col justify-between mx-5 mt-5 h-[calc(100%-108px)]"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
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
          className="w-full bg-black rounded-lg h-[48px] mb-4 cursor-pointer flex items-center justify-center"
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

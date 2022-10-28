import React from 'react';

const EmptyEvent = () => {
  return (
    <div className="w-[320px] h-[422px] flex flex-col items-center justify-center mx-5">
      <p className="text-[18px] font-semibold text-black/30">
        There is no event.
      </p>
      <p className="text-[18px] font-semibold text-black/30">
        Add and manage your event!
      </p>
    </div>
  );
};

export default EmptyEvent;

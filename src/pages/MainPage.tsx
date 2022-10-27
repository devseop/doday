import React from 'react';
import Header from 'components/Header';
import Card from 'components/Card';
import BottomNav from 'components/BottomNav';
import { useAppSelector } from 'hooks';

const MainPage = () => {
  const cardList = useAppSelector(state => state.card);

  return (
    <div className="flex-column items-center">
      <Header />
      {/* <Card /> */}
      {cardList.length ? (
        <ul className="flex gap-4">
          {cardList &&
            cardList.map(card => {
              return <Card key={card.cardId} card={card} />;
            })}
        </ul>
      ) : (
        <div className="w-[320px] h-[446px] flex flex-col items-center justify-center">
          <p className="text-[18px] font-semibold text-black/30">
            There is no event.
          </p>
          <p className="text-[18px] font-semibold text-black/30">
            Add and manage your event!
          </p>
        </div>
      )}
      <BottomNav />
    </div>
  );
};

export default MainPage;

import React from 'react';
// import CardInfo from './CardInfo';
import { CardItemType } from 'store/cardSlice';
import Badge from './Badge';

const Card = ({ card }: { card: CardItemType }) => {
  // console.log(fileImage);
  // 이미지 확장자
  // console.log(fileImage?.slice(11, 14));
  //<data>코드
  // console.log(fileImage?.slice(22, fileImage?.length));
  return (
    <div className="w-full pb-4 rounded-lg bg-white">
      <img
        className="w-[320px] h-[320px] rounded-t-lg object-cover"
        // src={`data:image/${card.thumbnail?.slice(
        //   11,
        //   14
        // )};base64,<${card.thumbnail?.slice(22, card.thumbnail?.length)}>`}
        src={card?.thumbnail}
        alt="이미지"
      />
      {/* <CardInfo /> */}
      <div className="mt-[14px] mx-4">
        <Badge />
        <p className="text-xxl font-semibold leading-[34px] mb-[7px]">
          {card.cardId}
        </p>
        <p className="text-md font-semibold leading-4 mb-1">{card.title}</p>
        <p className="text-[11px] leading-[11px] text-lightGray">{card.date}</p>
      </div>
    </div>
  );
};

export default Card;

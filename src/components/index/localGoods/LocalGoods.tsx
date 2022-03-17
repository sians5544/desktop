import { useEffect, useState, useRef } from 'react';

import { getAllHotelList, getNearHotelList } from 'src/utils/requests';
import Button from './button/Button';
import HotelItem from './hotelItem/HotelItem';
import { StyledH3, StyledUl, StyledDiv } from './localGoods.style';

const LocalGoods = () => {
  const [slide, setSlide] = useState<number>(-1);
  const [agreeInfo, setAgreeInfo] = useState<boolean>(false);
  const [hotels, setHotels] = useState<[]>([]);
  // const refUl = useRef();

  const success = async ({ coords }) => {
    const res = await getNearHotelList(coords);
    setHotels([...res.slice(res.length - 5, res.length), ...res, ...res.slice(0, 5)]);
    setAgreeInfo(true);
  };

  const error = async () => {
    const res = await getAllHotelList();
    setHotels([...res.slice(res.length - 5, res.length), ...res, ...res.slice(0, 5)]);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  const handleTransitionEnd = () => {
    if (slide === 0) {
      refUl.current.style.transition = 'none';
      refUl.current.style.transform = 'translateX(300%)';
      refUl.current.style.transition = 'transform 0.5s';
    } else if (slide === 4) {
      refUl.current.style.transition = 'none';
      refUl.current.style.transform = 'translateX(-100%)';
      refUl.current.style.transition = 'transform 0.5s';
    } else {
      refUl.current.style.transform = `translateX(${slide * 100}%)`;
    }
  };

  const movePrev = () => {
    setSlide(slide + 1 === -2 ? 3 : slide + 1);
  };

  const moveNext = () => {
    setSlide(slide - 1 === 5 ? 0 : slide + 1);
  };

  return (
    <div>
      <StyledH3>{agreeInfo ? '현재 지역에서의 추천 상품' : '전체 지역의 추천 상품'}</StyledH3>
      <StyledDiv>
        <Button role="prev" onClick={movePrev} />
        <StyledUl slide={slide}>
          {/* {hotels.length !== 0 && hotels.map((hotel, idx) => <HotelItem key={hotel.id + idx} hotel={hotel} />)} */}
        </StyledUl>
        <Button role="next" onClick={moveNext} />
      </StyledDiv>
    </div>
  );
};

export default LocalGoods;

import ReservationList from './Reservation.style';

const Reservations = () => {
  // userId를 통해 검색
  // const reservation = [];
  return (
    <ReservationList>
      <h2>예약내역</h2>

      <ul>
        <li>
          <img src="/src/assets/hotels/photo1.webp" alt="칵슬라우타넨 악틱 리조트" />
          <div>
            <span>칵슬라우타넨 악틱 리조트</span>
            <span>기준 2명/최대 2명</span>
            <span>이용 날짜</span>
            <span>2022-02-26~ 2022-03-01</span>
            <button>후기 남기기</button>
          </div>
        </li>
        <li>
          <img src="/src/assets/hotels/photo2.webp" alt="그랜드 미라마르 올 럭셔리 스위트 & 레지던스" />
          <div>
            <span>그랜드 미라마르 올 럭셔리 스위트 & 레지던스</span>
            <span>기준 2명/최대 2명</span>
            <span>이용 날짜</span>
            <span>2022-02-26~ 2022-03-01</span>
            <button>후기 남기기</button>
          </div>
        </li>
        <li>
          <img src="/src/assets/hotels/photo3.webp" alt="엑스플로라 파타고니아 - 올 인클루시브" />
          <div>
            <span>엑스플로라 파타고니아 - 올 인클루시브</span>
            <span>기준 2명/최대 2명</span>
            <span>이용 날짜</span>
            <span>2022-02-26~ 2022-03-01</span>
            <button>후기 남기기</button>
          </div>
        </li>
        <li>
          <img src="/src/assets/hotels/photo4.webp" alt="콘래드 서울" />
          <div>
            <span>콘래드 서울</span>
            <span>기준 2명/최대 2명</span>
            <span>이용 날짜</span>
            <span>2022-02-26~ 2022-03-01</span>
            <button>후기 남기기</button>
          </div>
        </li>
      </ul>
    </ReservationList>
  );
};

export default Reservations;
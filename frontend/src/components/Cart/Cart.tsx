import SelectHotel from '../Cart/SelectedHotel';
import { WrapperInput } from '../Cart/Cart.style';

const Cart = () => {
  return (
    <div>
      <h2 className="srOnly">장바구니 페이지</h2>
      <WrapperInput>
        <input type="checkbox" id="total" />
        <label htmlFor="total">전체 선택</label>
        <button>선택 삭제</button>
      </WrapperInput>
      <SelectHotel></SelectHotel>
    </div>
  );
};

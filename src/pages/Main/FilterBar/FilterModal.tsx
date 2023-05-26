import React, { useState } from 'react';
import styled from 'styled-components';
import FilterBrand from './FilterBrand';
import FilterCarOption from './FilterCarOption';
import FilterCarType from './FilterCarType';
import FilterKeyInfo from './FilterKeyinfo';
import PriceGraph from './PriceGraph';
import PriceSlider from './PriceSlider';

interface FilterModalProps {
  filterModal: boolean;
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CAR_TYPE = [
  { id: 1, carType: '경차' },
  { id: 2, carType: '승용차' },
  { id: 3, carType: 'SUV' },
  { id: 4, carType: '승합차' },
];

const FilterModal: React.FC<FilterModalProps> = ({
  filterModal,
  setFilterModal,
}) => {
  const [carTypeId, setCarTypeId] = useState(1);

  return (
    <FilterModalContainer filtermodal={filterModal.toString()}>
      <FilterModalHeader>
        <ModalCloseBtn
          onClick={() => {
            setFilterModal(false);
            window.document.body.style.overflowY = 'scroll';
          }}
        >
          ✕
        </ModalCloseBtn>
        <FilterTitle>필터</FilterTitle>
      </FilterModalHeader>
      <FilterCarType carTypeId={carTypeId} setCarTypeId={setCarTypeId} />
      <PriceGraph />
      <PriceSlider />
      <FilterBrand />
      <FilterKeyInfo />
      <FilterCarOption />
      <FilterModalFooter>
        <FullReset>전체 해제</FullReset>
        <FilterButton>차량 32개 보기</FilterButton>
      </FilterModalFooter>
    </FilterModalContainer>
  );
};

const FilterModalContainer = styled.div<{ filtermodal: string }>`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: ${({ filtermodal }) =>
    filtermodal === 'true' ? 'translate(-50%, 0%)' : 'translate(-50%, -110%)'};
  transition: transform 0.5s;
  width: 780px;
  height: 900px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const FilterModalHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;
  z-index: 1;
`;
const ModalCloseBtn = styled.div`
  position: absolute;
  left: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const FilterTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const FilterModalFooter = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 25px 40px;
  border-top: 1px solid #eeeeee;
  background-color: #ffffff;
`;

const FullReset = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: #29b8ff;
  font-size: 15px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const FilterButton = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: #29b8ff;
  font-size: 15px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;
export default FilterModal;

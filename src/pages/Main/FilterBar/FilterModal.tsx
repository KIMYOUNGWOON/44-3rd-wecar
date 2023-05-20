import React, { useState } from 'react';
import styled from 'styled-components';
import FilterCarType from './FilterCarType';

interface FilterModalProps {
  filterModal: boolean;
}

export const CAR_TYPE = [
  { id: 1, carType: '경차' },
  { id: 2, carType: '승용차' },
  { id: 3, carType: 'SUV' },
  { id: 4, carType: '승합차' },
];

const FilterModal: React.FC<FilterModalProps> = ({ filterModal }) => {
  const [carTypeId, setCarTypeId] = useState(1);

  return (
    <FilterModalContainer filtermodal={filterModal.toString()}>
      <FilterModalHeader>
        <ModalCloseBtn>✕</ModalCloseBtn>
        <FilterTitle>필터</FilterTitle>
      </FilterModalHeader>
      <FilterCarType carTypeId={carTypeId} setCarTypeId={setCarTypeId} />
    </FilterModalContainer>
  );
};

const FilterModalContainer = styled.div<{ filtermodal: string }>`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: ${({ filtermodal }) =>
    filtermodal === 'true' ? 'translate(-50%, 0%)' : 'translate(-50%, -105%)'};
  transition: transform 0.5s;
  width: 780px;
  height: 900px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
`;

const FilterModalHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eeeeee;
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
export default FilterModal;

import React from 'react';
import styled from 'styled-components';
import compactCarImg from '../../../assets/carTypeImg/경차.jpg';
import sedanImg from '../../../assets/carTypeImg/승용차.jpg';
import suvImg from '../../../assets/carTypeImg/SUV.jpg';
import vanImg from '../../../assets/carTypeImg/승합차.jpg';
import { CAR_TYPE } from './FilterModal';

interface FilterCarTypeProps {
  carType: string;
  setCarType: React.Dispatch<React.SetStateAction<string>>;
}

const CAR_TYPE_IMAGE: any = {
  경차: compactCarImg,
  승용차: sedanImg,
  SUV: suvImg,
  승합차: vanImg,
};

const FilterCarType: React.FC<FilterCarTypeProps> = ({
  carType,
  setCarType,
}) => {
  function handleCarType(type: string) {
    if (carType === type) {
      setCarType('');
    } else {
      setCarType(type);
    }
  }

  return (
    <FilterCarTypeContainer>
      <SelectContainer>
        <CarTypeTitle>외형</CarTypeTitle>
        <CarTypeDescription>
          이용을 원하시는 차량의 외형을 선택해주세요
        </CarTypeDescription>
        <SelectBtnContainer>
          {CAR_TYPE.map(data => {
            return (
              <SelectBtn
                key={data.id}
                clicked={(carType === data.carType).toString()}
                onClick={() => {
                  handleCarType(data.carType);
                }}
              >
                {data.carType}
              </SelectBtn>
            );
          })}
        </SelectBtnContainer>
        <CarTypeDescription />
      </SelectContainer>
      <CarTypeImageContainer>
        {carType === '' ? (
          <NotSelectText>선택 안 함</NotSelectText>
        ) : (
          <CarTypeImage carimage={CAR_TYPE_IMAGE[carType]} />
        )}
      </CarTypeImageContainer>
    </FilterCarTypeContainer>
  );
};

const FilterCarTypeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eeeeee;
`;

const SelectContainer = styled.div`
  flex: 1;
  padding-left: 40px;
`;

const CarTypeTitle = styled.div`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;

const CarTypeDescription = styled.div`
  margin-bottom: 25px;
  font-size: 14px;
  color: #29b8ff;
`;

const NotSelectText = styled.div`
  font-size: 25px;
  text-align: center;
  padding-right: 20px;
  color: rgba(0, 0, 0, 0.5);
`;

const SelectBtnContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 280px;
  height: 150px;
`;

const SelectBtn = styled.div<{ clicked: string }>`
  padding-top: 27px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background-color: ${({ clicked }) =>
    clicked === 'true' ? '#29b8ff' : '#ffffff'};
  font-size: 15px;
  text-align: center;
  color: ${({ clicked }) => (clicked === 'true' ? '#ffffff' : '#29b8ff')};

  &:hover {
    cursor: pointer;
  }
`;

const CarTypeImageContainer = styled.div`
  flex: 1;
  padding-top: 25px;
  padding-right: 50px;
`;
const CarTypeImage = styled.div<{ carimage: string }>`
  width: 350px;
  height: 200px;
  background-image: ${({ carimage }) => `url(${carimage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default FilterCarType;

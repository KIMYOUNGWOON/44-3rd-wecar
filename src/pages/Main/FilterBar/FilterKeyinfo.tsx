import React from 'react';
import styled from 'styled-components';

interface FilterKeyInfoProps {
  engineSize: string;
  setEngineSize: React.Dispatch<React.SetStateAction<string>>;
  capacity: string;
  setCapacity: React.Dispatch<React.SetStateAction<string>>;
  fuelType: string;
  setFuelType: React.Dispatch<React.SetStateAction<string>>;
}

const FilterKeyInfo: React.FC<FilterKeyInfoProps> = ({
  engineSize,
  setEngineSize,
  capacity,
  setCapacity,
  fuelType,
  setFuelType,
}) => {
  function handleEngineSize(size: string) {
    if (engineSize === size) {
      setEngineSize('');
    } else {
      setEngineSize(size);
    }
  }

  function handleCapacity(People: string) {
    if (capacity === People) {
      setCapacity('');
    } else {
      setCapacity(People);
    }
  }

  function handleFuelType(type: string) {
    if (fuelType === type) {
      setFuelType('');
    } else {
      setFuelType(type);
    }
  }

  return (
    <FilterKeyInfoContainer>
      <KeyInfoTitle>차량 주요 정보</KeyInfoTitle>
      <CarSizeTitle>차종</CarSizeTitle>
      <CarSizeContainer>
        {CAR_SIZE.map(data => {
          return (
            <CarSizeList
              key={data.id}
              onClick={() => {
                handleEngineSize(data.size);
              }}
              checked={engineSize === data.size}
            >
              {data.size}
            </CarSizeList>
          );
        })}
      </CarSizeContainer>
      <PassengersTitle>승차 정원</PassengersTitle>
      <PassengersContainer>
        {PASSENGERS.map(data => {
          return (
            <PassengersList
              key={data.id}
              onClick={() => {
                handleCapacity(data.capacity);
              }}
              checked={capacity === data.capacity}
            >
              {data.capacity}인승
            </PassengersList>
          );
        })}
      </PassengersContainer>
      <FuelTypeTitle>연료 유형</FuelTypeTitle>
      <FuelTypeContainer>
        {FUEL_TYPE.map(data => {
          return (
            <FuelTypeList
              key={data.id}
              onClick={() => {
                handleFuelType(data.type);
              }}
              checked={fuelType === data.type}
            >
              {data.type}
            </FuelTypeList>
          );
        })}
      </FuelTypeContainer>
    </FilterKeyInfoContainer>
  );
};

const FilterKeyInfoContainer = styled.div`
  padding: 40px;
  border-bottom: 1px solid #eeeeee;
`;

const KeyInfoTitle = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 600;
`;

const CarSizeTitle = styled.div`
  margin-bottom: 20px;
`;

const PassengersTitle = styled(CarSizeTitle)``;

const FuelTypeTitle = styled(CarSizeTitle)``;

const CarSizeContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 45px;
`;

const CarSizeList = styled.div<{ checked: boolean }>`
  width: 100px;
  height: 48px;
  padding-top: 16px;
  ${({ checked }) =>
    checked ? 'border: 3px solid #29b8ff' : 'border: 1px solid #eeeeee'};
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const PassengersContainer = styled(CarSizeContainer)``;

const PassengersList = styled(CarSizeList)<{ checked: boolean }>``;

const FuelTypeContainer = styled(CarSizeContainer)`
  margin-bottom: 5px;
`;

const FuelTypeList = styled(CarSizeList)<{ checked: boolean }>``;

export default FilterKeyInfo;

const CAR_SIZE = [
  { id: 1, size: '소형' },
  { id: 2, size: '중형' },
  { id: 3, size: '대형' },
];

const PASSENGERS = [
  { id: 1, capacity: '4' },
  { id: 2, capacity: '6' },
  { id: 3, capacity: '8' },
  { id: 4, capacity: '10' },
];

const FUEL_TYPE = [
  { id: 1, type: '가솔린' },
  { id: 2, type: '디젤' },
  { id: 3, type: '하이브리드' },
  { id: 4, type: 'EV' },
];

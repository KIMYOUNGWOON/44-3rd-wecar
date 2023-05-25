import React, { useState } from 'react';
import styled from 'styled-components';

function FilterKeyInfo() {
  const [carSizeId, setCarSizeId] = useState(0);
  const [passengersId, setPassengersId] = useState(0);
  const [fuelTypeId, setFuelTypeId] = useState(0);

  function CheckingCarSize(targetId: number) {
    if (carSizeId === targetId) {
      setCarSizeId(0);
    } else {
      setCarSizeId(targetId);
    }
  }

  function CheckingPassengers(targetId: number) {
    if (passengersId === targetId) {
      setPassengersId(0);
    } else {
      setPassengersId(targetId);
    }
  }

  function CheckingFuelType(targetId: number) {
    if (fuelTypeId === targetId) {
      setFuelTypeId(0);
    } else {
      setFuelTypeId(targetId);
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
                CheckingCarSize(data.id);
              }}
              checked={carSizeId === data.id}
            >
              {data.listName}
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
                CheckingPassengers(data.id);
              }}
              checked={passengersId === data.id}
            >
              {data.listName}
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
                CheckingFuelType(data.id);
              }}
              checked={fuelTypeId === data.id}
            >
              {data.listName}
            </FuelTypeList>
          );
        })}
      </FuelTypeContainer>
    </FilterKeyInfoContainer>
  );
}

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
  { id: 1, listName: '소형' },
  { id: 2, listName: '중형' },
  { id: 3, listName: '대형' },
];

const PASSENGERS = [
  { id: 1, listName: '4인승' },
  { id: 2, listName: '5인승' },
  { id: 3, listName: '7인승' },
  { id: 4, listName: '9인승' },
];

const FUEL_TYPE = [
  { id: 1, listName: '가솔린' },
  { id: 2, listName: '디젤' },
  { id: 3, listName: '하이브리드' },
  { id: 4, listName: 'EV' },
];

import React, { useState } from 'react';
import styled from 'styled-components';

interface PassengerSearchProps {
  passengerValueChange: (passenger: string) => void;
}

const PassengerSearch: React.FC<PassengerSearchProps> = ({
  passengerValueChange,
}) => {
  const [currentId, setCurrentId] = useState(0);

  function handleClick(targetId: number): void {
    setCurrentId(targetId);
  }

  return (
    <PassengerSearchContainer>
      <PassengerSearchTitle>승차정원 검색</PassengerSearchTitle>
      <PassengerSearchSubTitle>
        승차 인원에 맞는 인승을 선택해주세요
      </PassengerSearchSubTitle>
      <PassengerChoiceContainer>
        {PASSENGER_DATA.map(data => {
          return (
            <PassengerBox
              key={data.id}
              ischecked={(currentId === data.id).toString()}
              onClick={() => {
                handleClick(data.id);
                passengerValueChange(data.passenger);
              }}
            >
              {data.passenger}
            </PassengerBox>
          );
        })}
      </PassengerChoiceContainer>
    </PassengerSearchContainer>
  );
};

const PassengerSearchContainer = styled.div`
  width: 300px;
  height: 300px;
  padding: 30px 30px;
`;

const PassengerSearchTitle = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
`;

const PassengerSearchSubTitle = styled.div`
  font-size: 14px;
  margin-bottom: 40px;
  color: #29b9ff;
`;

const PassengerChoiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px 30px;
`;

const PassengerBox = styled.div<{ ischecked: string }>`
  padding: 20px 20px;
  ${({ ischecked }) =>
    ischecked === 'true'
      ? 'border: 2px solid #29b9ff'
      : 'border: 1px solid #eeeeee'};
  border-radius: 10px;
  font-size: 15px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
const PASSENGER_DATA = [
  { id: 1, passenger: '4인승' },
  { id: 2, passenger: '5인승' },
  { id: 3, passenger: '7인승' },
  { id: 4, passenger: '9인승' },
];

export default PassengerSearch;

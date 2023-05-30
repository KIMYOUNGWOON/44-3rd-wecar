import React from 'react';
import styled from 'styled-components';
import { BsPeopleFill } from 'react-icons/bs';

interface PassengerSearchProps {
  passengerValue: number;
  setPassengerValue: React.Dispatch<React.SetStateAction<number>>;
}

const PassengerSearch: React.FC<PassengerSearchProps> = ({
  passengerValue,
  setPassengerValue,
}) => {
  function handleCount(type: string) {
    if (type === 'minus' && passengerValue > 0) {
      setPassengerValue(prev => prev - 1);
    } else if (type === 'plus') {
      setPassengerValue(prev => prev + 1);
    }
  }

  return (
    <PassengerSearchContainer>
      <PassengerSearchTitle>탑승인원 설정</PassengerSearchTitle>
      <PassengerSearchSubTitle>
        탑승인원에 맞는 차량을 찾아보세요
      </PassengerSearchSubTitle>
      <BoardPeopleSettingBox>
        <BoardPeopleIBox>
          <FlexStart>
            <BoardPeopleIcon />
            <TotalPeople>총 인원</TotalPeople>
          </FlexStart>
          <BoardPeopleNumber>
            <AmountNumber>{passengerValue}</AmountNumber>
            <AmountText>명</AmountText>
          </BoardPeopleNumber>
        </BoardPeopleIBox>
        <ButtonContainer>
          <MinusButton
            onClick={() => {
              handleCount('minus');
            }}
          >
            -
          </MinusButton>
          <PlusButton
            onClick={() => {
              handleCount('plus');
            }}
          >
            +
          </PlusButton>
        </ButtonContainer>
      </BoardPeopleSettingBox>
    </PassengerSearchContainer>
  );
};

const PassengerSearchContainer = styled.div`
  width: 300px;
  height: 230px;
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

const BoardPeopleSettingBox = styled.div``;

const BoardPeopleIBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const FlexStart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BoardPeopleIcon = styled(BsPeopleFill)`
  font-size: 22px;
`;

const TotalPeople = styled.div`
  padding-top: 5px;
  font-size: 18px;
`;

const BoardPeopleNumber = styled.div`
  display: flex;
  font-size: 18px;
  gap: 5px;
`;

const AmountNumber = styled.div`
  padding-top: 6px;
  font-size: 25px;
  font-weight: 600;
`;

const AmountText = styled.div`
  padding-top: 10px;
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

const MinusButton = styled.div`
  width: 30px;
  height: 30px;
  padding-top: 9px;
  border-radius: 5px;
  background-color: #29b9ff;
  color: #ffffff;
  font-size: 17px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const PlusButton = styled(MinusButton)``;

export default PassengerSearch;

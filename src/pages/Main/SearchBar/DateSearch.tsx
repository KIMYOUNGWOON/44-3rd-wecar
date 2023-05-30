import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface DateSearchProps {
  handleStartDateChange: (date: any) => void;
  handleEndDateChange: (date: any) => void;
  startDateValue: Date | string;
  setStartDateValue: React.Dispatch<React.SetStateAction<string | Date>>;
  endDateValue: Date | string;
  setEndDateValue: React.Dispatch<React.SetStateAction<string | Date>>;
}

const DateSearch: React.FC<DateSearchProps> = ({
  handleStartDateChange,
  handleEndDateChange,
  startDateValue,
  setStartDateValue,
  endDateValue,
  setEndDateValue,
}) => {
  return (
    <DateSearchContainer>
      <DateSearchTitle>날짜 지정</DateSearchTitle>
      <DateSearchSubTitle>탑승 기간을 설정해주세요</DateSearchSubTitle>
      <CalendarContainer>
        <Calendar
          onChange={handleStartDateChange}
          value={startDateValue === '날짜 추가' ? null : startDateValue}
        />
        <Calendar
          onChange={handleEndDateChange}
          value={endDateValue === '날짜 추가' ? null : endDateValue}
        />
      </CalendarContainer>
      <ButtonContainer>
        <ResetButton
          onClick={() => {
            setStartDateValue('날짜 추가');
            setEndDateValue('날짜 추가');
          }}
        >
          날짜 초기화
        </ResetButton>
      </ButtonContainer>
    </DateSearchContainer>
  );
};

const DateSearchContainer = styled.div`
  width: 800px;
  height: 500px;
  padding: 30px;
`;

const DateSearchTitle = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
`;

const DateSearchSubTitle = styled.div`
  margin-bottom: 35px;
  font-size: 14px;
  color: #29b9ff;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-right: 15px;
`;

const ResetButton = styled.div`
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #29b9ff;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const CloseButton = styled.div`
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #29b9ff;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const CalendarContainer = styled.div`
  display: flex;
  gap: 30px;
  .react-calendar {
    width: 380px;
    height: 306px;
    max-width: 100%;
    background-color: #fff;
    color: #222;
    border: none;
    border-radius: 8px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar__navigation button {
    color: #29b9ff;
    min-width: 44px;
    background: none;
    font-size: 16px;
    margin-top: 8px;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }

  .react-calendar__tile {
    font-size: 13px;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;
    color: #29b9ff;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: rgba(41, 185, 255, 0.2);
    border-radius: 6px;
    font-weight: bold;
    color: #29b9ff;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: rgba(41, 185, 255, 0.2);
    border-radius: 6px;
    font-weight: bold;
    color: #29b9ff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #f8f8fa;
  }
  .react-calendar__tile--active {
    background: #29b9ff;
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #29b9ff;
    color: white;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }
  .react-calendar__tile--range {
    background: #f8f8fa;
    color: #29b9ff;
    border-radius: 0;
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #29b9ff;
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #29b9ff;
    color: white;
  }
`;
export default DateSearch;

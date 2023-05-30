import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

interface DatePickerProps {
  carData: any;
  startDate: Date | string;
  setStartDate: React.Dispatch<React.SetStateAction<string | Date>>;
  endDate: Date | string;
  setEndDate: React.Dispatch<React.SetStateAction<string | Date>>;
  handleStartDateChange: (date: any) => void;
  handleEndDateChange: (date: any) => void;
  setDatePickerModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DatePicker: React.FC<DatePickerProps> = ({
  carData,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  handleStartDateChange,
  handleEndDateChange,
  setDatePickerModal,
}) => {
  const minStartDate = new Date(carData.startDate);
  const maxEndDate = new Date(carData.endDate);
  const convertedStartDate = moment(minStartDate).utcOffset('-12:00');
  const convertedEndDate = moment(maxEndDate).utcOffset('-12:00');
  const koreanStartDate = convertedStartDate.format('YYYY-MM-DD');
  const koreanEndDate = convertedEndDate.format('YYYY-MM-DD');

  return (
    <DatePickerContainer>
      <DatePickerTitle>날짜 선택</DatePickerTitle>
      <DatePickerSubTitle>
        탑승 기간을 설정하여 정확한 요금을 확인하세요.
      </DatePickerSubTitle>
      <CalendarContainer>
        <Calendar
          onChange={handleStartDateChange}
          value={startDate === '날짜 추가' ? null : startDate}
          minDate={new Date(koreanStartDate)}
          maxDate={new Date(koreanEndDate)}
        />
        <Calendar
          onChange={handleEndDateChange}
          value={endDate === '날짜 추가' ? null : endDate}
          minDate={new Date(koreanStartDate)}
          maxDate={new Date(koreanEndDate)}
        />
      </CalendarContainer>
      <ButtonContainer>
        <ResetButton
          onClick={() => {
            setStartDate('날짜 추가');
            setEndDate('날짜 추가');
          }}
        >
          날짜 초기화
        </ResetButton>
        <CloseButton
          onClick={() => {
            setDatePickerModal(false);
          }}
        >
          닫기
        </CloseButton>
      </ButtonContainer>
    </DatePickerContainer>
  );
};

const DatePickerContainer = styled.div`
  position: absolute;
  top: 0%;
  right: 105%;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const DatePickerTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

const DatePickerSubTitle = styled.div`
  font-size: 14px;
  color: #29b9ff;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  margin-right: 15px;
`;

const ResetButton = styled.div`
  padding: 13px 15px 10px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #29b9ff;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const CloseButton = styled(ResetButton)``;

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

export default DatePicker;

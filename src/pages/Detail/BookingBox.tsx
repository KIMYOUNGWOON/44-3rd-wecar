import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from './DatePicker';
import moment from 'moment';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { HOST_ADDRESS } from '../../HostAddress';
import { useParams } from 'react-router';

interface BookingBoxProps {
  carData: any;
}

const BookingBox: React.FC<BookingBoxProps> = ({ carData }) => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const [datePickerModal, setDatePickerModal] = useState(false);
  const [startDate, setStartDate] = useState<Date | string>('날짜 추가');
  const [endDate, setEndDate] = useState<Date | string>('날짜 추가');
  const formattedStartDate =
    startDate !== '날짜 추가'
      ? moment(startDate).format('YYYY-MM-DD')
      : '날짜 추가';
  const formattedEndDate =
    endDate !== '날짜 추가'
      ? moment(endDate).format('YYYY-MM-DD')
      : '날짜 추가';
  const startDateValue = moment(startDate);
  const endDateValue = moment(endDate);
  const diffDays = endDateValue
    .startOf('day')
    .diff(startDateValue.startOf('day'), 'days');
  const DateChecked = startDate !== '날짜 추가' && endDate !== '날짜 추가';
  const commission = carData.pricePerDay * diffDays * 0.05;
  const totalPrice =
    carData.pricePerDay * diffDays + carData.pricePerDay * diffDays * 0.05;

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };

  function handleBooking() {
    axios
      .post(`${HOST_ADDRESS}/bookings/${id}`, {
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        totalPrice,
        commission,
      })
      .then(response => console.log(response))
      .then(() => {
        navigate(`/booking/${id}`);
        window.scrollTo(0, 0);
      })
      .catch(error => console.error(error));
  }

  return (
    <BookingBoxContainer>
      {datePickerModal && (
        <DatePicker
          carData={carData}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          setDatePickerModal={setDatePickerModal}
        />
      )}
      <PricePerDay>
        {carData?.pricePerDay?.toLocaleString()}원<span>/일</span>
      </PricePerDay>
      <DateButtonContainer
        onClick={() => {
          setDatePickerModal(true);
        }}
      >
        <StartDateBtn>
          <DateTitle>탑승일</DateTitle>
          <DateMark>{formattedStartDate}</DateMark>
        </StartDateBtn>
        <EndDateBtn>
          <DateTitle>반납일</DateTitle>
          <DateMark>{formattedEndDate}</DateMark>
        </EndDateBtn>
      </DateButtonContainer>
      <BookingButton
        onClick={() => {
          handleBooking();
        }}
      >
        예약하기
      </BookingButton>
      <GuideMessage>예약 확정 전에는 요금이 청구되지 않습니다.</GuideMessage>
      {DateChecked && (
        <CalculateContainer>
          <FlexStart>
            {carData?.pricePerDay?.toLocaleString()}원 ✕ {diffDays}일
          </FlexStart>
          <FlexEnd>
            {(carData?.pricePerDay * diffDays)?.toLocaleString()}원
          </FlexEnd>
        </CalculateContainer>
      )}
      {DateChecked && (
        <CommissionContainer>
          <FlexStart>위카 서비스 수수료</FlexStart>
          <FlexEnd>{commission?.toLocaleString()}원</FlexEnd>
        </CommissionContainer>
      )}
      <TotalAmountContainer>
        <TotalAmountTitle>총 합계</TotalAmountTitle>
        <TotalAmountValue>
          {diffDays ? totalPrice?.toLocaleString() : 0}원
        </TotalAmountValue>
      </TotalAmountContainer>
    </BookingBoxContainer>
  );
};

const BookingBoxContainer = styled.div`
  position: sticky;
  top: 120px;
  flex: 1;
  flex-shrink: 0;
  width: 380px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
`;

const PricePerDay = styled.div`
  margin-bottom: 20px;
  font-size: 23px;
  span {
    margin-left: 6px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
  }
`;

const DateButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
  }
`;

const StartDateBtn = styled.div`
  flex: 1;
  text-align: center;
`;
const EndDateBtn = styled(StartDateBtn)`
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;
const DateTitle = styled.div`
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 600;
`;
const DateMark = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
`;
const BookingButton = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  background-color: #2ab9ff;
  font-size: 18px;
  color: #ffffff;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;
const GuideMessage = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;
const CalculateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CommissionContainer = styled(CalculateContainer)``;

const FlexStart = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  text-decoration: underline;
`;

const FlexEnd = styled.div`
  font-size: 16px;
  color: #222222;
`;

const TotalAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

const TotalAmountTitle = styled.div`
  font-size: 17px;
`;

const TotalAmountValue = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export default BookingBox;

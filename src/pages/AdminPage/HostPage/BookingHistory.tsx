import React from 'react';
import styled from 'styled-components';

function BookingHistory() {
  return (
    <>
      <BookingHistoryTitle>예약 내역</BookingHistoryTitle>
      <BookingHistoryContainer>
        <BookingEmpty>예약 내역이 없습니다.</BookingEmpty>
      </BookingHistoryContainer>
    </>
  );
}

const BookingHistoryTitle = styled.div`
  width: 1350px;
  margin: 50px auto;
  font-size: 20px;
  font-weight: 600;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 20px;
`;

const BookingHistoryContainer = styled.div`
  width: 1350px;
  height: 300px;
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
`;

const BookingEmpty = styled.div`
  padding-top: 115px;
  text-align: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);
`;
export default BookingHistory;

import React from 'react';
import styled from 'styled-components';

function BookingHistory() {
  return (
    <BookingHistoryContainer>
      <BookingHistoryTitle>예약 내역</BookingHistoryTitle>
    </BookingHistoryContainer>
  );
}

const BookingHistoryContainer = styled.div`
  padding: 40px 300px 40px;
`;

const BookingHistoryTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
export default BookingHistory;

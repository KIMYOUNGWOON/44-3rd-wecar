import React from 'react';
import styled from 'styled-components';

function BookingHistory() {
  return (
    <>
      <BookingHistoryTitle>예약 내역</BookingHistoryTitle>
      <BookingHistoryContainer>
        <BookingListHeader>
          <BookingNumberTitle>예약번호</BookingNumberTitle>
          <BookingUserTitle>예약자</BookingUserTitle>
          <PhoneNumberTitle>연락처</PhoneNumberTitle>
          <BookingDateTitle>예약날짜</BookingDateTitle>
          <BookingPriceTitle>예약요금</BookingPriceTitle>
          <BookingStateTitle>예약상태</BookingStateTitle>
        </BookingListHeader>
        <BookingList>
          <BookingNumber>awwoi112-231132</BookingNumber>
          <BookingUser>김영운</BookingUser>
          <PhoneNumber>010-8582-2130</PhoneNumber>
          <BookingDate>2023년 05월 25일 ~ 2023년 06월 25일</BookingDate>
          <BookingPrice>249,000원</BookingPrice>
          <BookingState>예약확정</BookingState>
        </BookingList>
        {/* <BookingEmpty>예약 내역이 없습니다.</BookingEmpty> */}
      </BookingHistoryContainer>
    </>
  );
}

const BookingHistoryTitle = styled.div`
  width: 1350px;
  margin: 50px auto 30px;
  font-size: 25px;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 20px;
`;

const BookingHistoryContainer = styled.div`
  width: 1350px;
  height: 300px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const BookingListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
`;

const BookingNumberTitle = styled.div`
  flex: 3;
`;

const BookingUserTitle = styled.div`
  flex: 1;
`;

const PhoneNumberTitle = styled.div`
  flex: 2;
`;

const BookingDateTitle = styled.div`
  flex: 3;
`;

const BookingPriceTitle = styled.div`
  flex: 1;
`;

const BookingStateTitle = styled.div`
  flex: 1;
`;

const BookingList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
`;

const BookingNumber = styled.div`
  flex: 3;
`;

const BookingUser = styled.div`
  flex: 1;
`;

const PhoneNumber = styled.div`
  flex: 2;
`;

const BookingDate = styled.div`
  flex: 3;
`;

const BookingPrice = styled.div`
  flex: 1;
`;

const BookingState = styled.div`
  flex: 1;
  background-color: #2ab9ff;
  color: #ffffff;
`;

const BookingEmpty = styled.div`
  padding-top: 115px;
  text-align: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);
`;
export default BookingHistory;

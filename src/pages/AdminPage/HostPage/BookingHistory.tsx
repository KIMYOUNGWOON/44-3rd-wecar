import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HOST_ADDRESS } from '../../../HostAddress';

function BookingHistory() {
  const [bookingList, setBookingList] = useState([]);
  useEffect(() => {
    axios
      .get(`${HOST_ADDRESS}/bookings/list`)
      .then(response => setBookingList(response.data))
      .catch(error => console.error(error));
  }, []);

  console.log(bookingList);
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
        {bookingList.length !== 0 &&
          bookingList.map((data: any) => {
            return (
              <BookingList key={data.uuid}>
                <BookingNumber>{data.uuid}</BookingNumber>
                <BookingUser>{data.user.name}</BookingUser>
                <PhoneNumber>{data.user.phoneNumber}</PhoneNumber>
                <BookingDate>2023년 05월 25일 ~ 2023년 06월 25일</BookingDate>
                <BookingPrice>
                  {data.totalPrice.toLocaleString()}원
                </BookingPrice>
                <BookingState>예약확정</BookingState>
              </BookingList>
            );
          })}
        {bookingList.length === 0 && (
          <BookingEmpty>예약 내역이 없습니다.</BookingEmpty>
        )}
      </BookingHistoryContainer>
    </>
  );
}

const BookingHistoryTitle = styled.div`
  width: 1350px;
  margin: 50px auto 15px;
  font-size: 25px;
  font-weight: 600;
  padding-bottom: 20px;
`;

const BookingHistoryContainer = styled.div`
  width: 1350px;
  height: 300px;
  margin: 0 auto;
`;

const BookingListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.7);
  font-size: 18px;
  font-weight: 600;
`;

const BookingNumberTitle = styled.div`
  flex: 4;
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
  text-align: center;
`;

const BookingList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
`;

const BookingNumber = styled.div`
  flex: 4;
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
  padding: 10px 0;
  border-radius: 8px;
  color: #ffffff;
  text-align: center;
`;

const BookingEmpty = styled.div`
  padding-top: 115px;
  text-align: center;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.4);
`;
export default BookingHistory;

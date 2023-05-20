import React from 'react';
import styled from 'styled-components';
import CarInfo from './CarInfo';
import BookingHistory from './BookingHistory';

function RegistrationInfo() {
  return (
    <>
      <RegistrationInfoContainer>
        <CarImage />
        <CarInfo />
      </RegistrationInfoContainer>
      <BookingHistory />
    </>
  );
}

const RegistrationInfoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 40px 300px 40px;
  background-color: #edf0f5;
`;

const CarImage = styled.div`
  position: fixed;
  width: 560px;
  height: 560px;
  background-image: url('https://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80');
  background-size: cover;
  background-position: center;
`;

export default RegistrationInfo;

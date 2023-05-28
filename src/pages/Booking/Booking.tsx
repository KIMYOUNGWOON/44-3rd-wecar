import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import logoImg from '../../assets/mainImg/logoImg.png';
import BookingRequest from './BookingRequest';
import RateDetails from './RateDetails';
import { IoIosArrowBack } from 'react-icons/io';
import Footer from 'pages/Main/Footer';

function Booking() {
  const navigate = useNavigate();
  return (
    <BookingContainer>
      <NavContainer>
        <Logo
          src={logoImg}
          alt="로고 이미지"
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
        />
      </NavContainer>
      <BackMove
        onClick={() => {
          navigate('/');
          window.scrollTo(0, 0);
        }}
      />
      <BookingRequestText>예약 요청</BookingRequestText>
      <MainSection>
        <BookingRequest />
        <RateDetails />
      </MainSection>
      <Footer />
    </BookingContainer>
  );
}

const BookingContainer = styled.div`
  position: relative;
  margin-top: 130px;
`;

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 80px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  z-index: 1;
`;

const Logo = styled.img`
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const BackMove = styled(IoIosArrowBack)`
  position: absolute;
  left: 360px;
  font-size: 25px;
  &:hover {
    cursor: pointer;
  }
`;

const BookingRequestText = styled.div`
  width: 1120px;
  margin: 0 auto;
  font-size: 32px;
  font-weight: 500;
`;

const MainSection = styled.div`
  display: flex;
  width: 1120px;
  margin: 50px auto 70px;
`;

export default Booking;

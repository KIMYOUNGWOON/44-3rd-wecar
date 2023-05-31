import React, { useEffect, useState } from 'react';
import Footer from 'pages/Main/Footer';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import logoImg from '../../assets/mainImg/logoImg.png';
import { useParams } from 'react-router';
import axios from 'axios';
import { HOST_ADDRESS } from '../../HostAddress';
import { BsCalendarCheck } from 'react-icons/bs';

function PaymentCompleted() {
  const [bookingSuccees, setBookingSuccees] = useState({});
  const navigate = useNavigate();
  const Params = useParams();
  const { id } = Params;

  useEffect(() => {
    axios
      .get(`${HOST_ADDRESS}/bookings/${id}`)
      .then(response => setBookingSuccees(response.data))
      .catch(error => console.error(error));
  }, []);

  console.log(bookingSuccees);

  return (
    <PaymentCompletedContainer>
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
      <BookingSuccessContainer>
        <HeaderContainer>
          <CarImage />
          <CarInfoContainer>
            <BrandName>BMW</BrandName>
            <ModelName>5시리즈 520d</ModelName>
          </CarInfoContainer>
          <CheckIcon />
        </HeaderContainer>
        <BookingSuccessMessage>
          예약 신청이 정상적으로 <br /> 처리되었습니다.
        </BookingSuccessMessage>
        <SubMessage>
          자세한 예약 내역은 아래에서 확인 가능하며, 기타 궁금하신 사항은 채팅
          또는 전화문의로 연락주시면 성심껏 답변드리겠습니다.
        </SubMessage>
        <DetailInfoContainer>
          <DetailInfoTitle>예약 상세내역</DetailInfoTitle>
          <BookingNumber>
            <FlexStart>예약 번호</FlexStart>
            <FlexEnd>11111111-11111111</FlexEnd>
          </BookingNumber>
          <OrderUserName>
            <FlexStart>예약자</FlexStart>
            <FlexEnd>11111111-11111111</FlexEnd>
          </OrderUserName>
          <OrderUserPhoneNumber>
            <FlexStart>연락처</FlexStart>
            <FlexEnd>11111111-11111111</FlexEnd>
          </OrderUserPhoneNumber>
          <BookingDate>
            <FlexStart>탑승 기간</FlexStart>
            <FlexEnd>11111111-11111111</FlexEnd>
          </BookingDate>
          <BookingPrice>
            <FlexStart>이용 요금</FlexStart>
            <FlexEnd>11111111-11111111</FlexEnd>
          </BookingPrice>
        </DetailInfoContainer>
      </BookingSuccessContainer>
      <Footer />
    </PaymentCompletedContainer>
  );
}

const PaymentCompletedContainer = styled.div``;

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

const BookingSuccessContainer = styled.div`
  width: 540px;
  height: 750px;
  margin: 160px auto 80px;
  padding: 35px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const CarImage = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const CarInfoContainer = styled.div`
  padding-top: 6px;
  padding-right: 130px;
`;

const BrandName = styled.div`
  margin-bottom: 7px;
  font-size: 22px;
  font-weight: 600;
  color: #222222;
`;

const ModelName = styled.div`
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
`;

const CheckIcon = styled(BsCalendarCheck)`
  font-size: 70px;
  color: #29b9ff;
`;

const BookingSuccessMessage = styled.div`
  font-size: 30px;
  text-align: center;
  line-height: 1.5;
`;

const SubMessage = styled.div`
  padding: 30px;
  font-size: 15px;
  line-height: 1.5;
  color: #29b9ff;
`;

const DetailInfoContainer = styled.div``;

const DetailInfoTitle = styled.div`
  margin-bottom: 35px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 20px;
  font-weight: 600;
`;

const FlexStart = styled.div``;

const FlexEnd = styled.div`
  color: rgba(0, 0, 0, 0.7);
`;

const BookingNumber = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const OrderUserName = styled(BookingNumber)``;

const OrderUserPhoneNumber = styled(BookingNumber)``;

const BookingDate = styled(BookingNumber)``;

const BookingPrice = styled(BookingNumber)``;

export default PaymentCompleted;

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import carImage from '../../assets/mainImg/carImage.png';
import PaymentMethod from './PaymentMethod';
import { TbCalendarTime } from 'react-icons/tb';
import moment from 'moment';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import axios from 'axios';
import { HOST_ADDRESS } from '../../HostAddress';

interface BookingRequestProps {
  bookingData: any;
}

const BookingRequest: React.FC<BookingRequestProps> = ({ bookingData }) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();

  function KoreanDateChange(date: Date | undefined) {
    const dateObj = moment(date).utcOffset('');
    const koreanDate = dateObj.format('YYYY년 MM월 DD일');

    return koreanDate;
  }

  const clientKey = 'test_ck_qLlDJaYngroZNAo1AWXVezGdRpXx'; // 발급받은 토스 결제 클라이언트 키

  const handlePayment = async () => {
    try {
      await axios.post(`${HOST_ADDRESS}/payments`, {
        bookingUuid: bookingData.uuid,
        method: paymentMethod,
      });

      const tossPayments = await loadTossPayments(clientKey);
      const paymentOptions = {
        amount: bookingData.totalPrice,
        orderId: bookingData.uuid,
        orderName: bookingData.hostCar.carModel.name,
        customerName: bookingData.user.name,
      };

      const paymentResult = await tossPayments.requestPayment(
        '카드',
        paymentOptions
      );
      console.log(paymentResult);
      axios
        .post(`${HOST_ADDRESS}/payments/toss`, paymentResult)
        .then(response => console.log(response))
        .then(() => {
          navigate(`/success/${id}`);
          window.scrollTo(0, 0);
        });
    } catch (error) {
      console.error(error);
      alert('결제가 실패했습니다');
      // 결제 실패 처리 로직 작성
    }
  };

  return (
    <BookingRequestContainer>
      <HookingBox>
        <HookingTextArea>
          <HookingTitle>흔치 않은 기회입니다.</HookingTitle>
          <HookingContent>
            해당 차량은 보통 예약이 가득 차 있습니다.
          </HookingContent>
        </HookingTextArea>
        <HookingImage carimage={carImage} />
      </HookingBox>
      <BookingInfoTitle>
        예약 정보 <span>•</span>
      </BookingInfoTitle>
      <BookingDateBox>
        <DateTitle>예약 날짜</DateTitle>
        <DateValue>
          {KoreanDateChange(bookingData.startDate) +
            ' ~ ' +
            KoreanDateChange(bookingData.endDate)}
        </DateValue>
      </BookingDateBox>
      <PaymentMethod
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <RequiredInputContainer>
        <RequiredInputTitle>
          필수 입력 정보 <span>•</span>
        </RequiredInputTitle>
        <MessageTitle>호스트에게 메시지 보내기</MessageTitle>
        <MessageContent>
          호스트에게 이용 목적과 픽업 예정 시간을 알려주세요.
        </MessageContent>
        <MessageInputBox />
      </RequiredInputContainer>
      <ReturnPolicyTitle>
        환불 정책 <span>•</span>
      </ReturnPolicyTitle>
      <ReturnPolicyContent>
        00월 00일 오후 12:00 전에 취소하면 부분 환불을 받으실 수 있습니다. 그
        이후에는 취소 시점에 따라 환불액이 결정됩니다.
        <span>자세히 알아보기</span>
      </ReturnPolicyContent>
      <BasicRulesTitle>
        기본 규칙 <span>•</span>
      </BasicRulesTitle>
      <BasicRulesContent>
        훌륭한 게스트가 되기 위한 몇 가지 간단한 규칙을 지켜주실 것을 모든
        게스트에게 당부드리고 있습니다.
      </BasicRulesContent>
      <BasicRulesList>• 차량 이용 규칙을 준수하세요.</BasicRulesList>
      <BasicRulesList>• 호스트의 차도 자신의 차처럼 아껴주세요.</BasicRulesList>
      <ReservationInfoBox>
        <ReservationInfoIcon />
        <ReservationInfoContent>
          호스트가 24시간 이내 예약 요청을 수락하기 전까지는 예약이 아직 확정된
          것이 아닙니다. 예약 확정 전까지는 요금이 청구되지 않습니다.
        </ReservationInfoContent>
      </ReservationInfoBox>
      <Agreeinfo>
        아래 버튼을 선택하면 <span>호스트가 설정한 차량 이용규칙</span>,
        <span>게스트에게 적용되는 기본 규칙</span>,
        <span>위카 재예약 및 환불 정책</span>에 동의하며, 피해에 대한 책임이
        본인에게 있을 경우 위카가 <span>결제 수단으로 청구</span>의 조치를 취할
        수 있다는 사실에 동의하는 것입니다. 호스트가 예약 요청을 수락하면 표시된
        총액이 결제되는 데 동의합니다.
      </Agreeinfo>
      <BookingRequestBtn
        onClick={() => {
          if (paymentMethod === 'toss') {
            handlePayment();
          }
        }}
      >
        예약 요청
      </BookingRequestBtn>
    </BookingRequestContainer>
  );
};

const BookingRequestContainer = styled.div`
  width: 560px;
`;

const HookingBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const HookingTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HookingTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
`;

const HookingContent = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`;

const HookingImage = styled.div<{ carimage: string }>`
  width: 80px;
  background-image: ${({ carimage }) => `url(${carimage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const BookingInfoTitle = styled.div`
  font-size: 25px;
  margin-bottom: 25px;

  span {
    color: #fa545c;
  }
`;

const BookingDateBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const DateTitle = styled.div`
  font-size: 16px;
`;

const DateValue = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.8);
`;

const RequiredInputContainer = styled.div`
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const RequiredInputTitle = styled.div`
  font-size: 25px;
  margin-bottom: 25px;
  span {
    color: #fa545c;
  }
`;

const MessageTitle = styled.div`
  font-size: 16px;
  margin-bottom: 7px;
`;

const MessageContent = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
`;

const MessageInputBox = styled.textarea`
  width: 100%;
  height: 116px;
  padding: 15px;
  border-radius: 10px;
  border-color: rgba(0, 0, 0, 0.2);
`;

const ReturnPolicyTitle = styled.div`
  font-size: 25px;
  margin-bottom: 25px;
  span {
    color: #fa545c;
  }
`;

const ReturnPolicyContent = styled.div`
  margin-bottom: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  line-height: 1.5;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);

  span {
    margin-left: 10px;
    color: #222222;
    font-weight: 600;
    text-decoration: underline;
  }
`;

const BasicRulesTitle = styled.div`
  font-size: 25px;
  margin-bottom: 25px;
  span {
    color: #fa545c;
  }
`;

const BasicRulesContent = styled.div`
  margin-bottom: 20px;
  line-height: 1.5;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
`;

const BasicRulesList = styled.div`
  margin-bottom: 10px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
`;

const ReservationInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ReservationInfoIcon = styled(TbCalendarTime)`
  font-size: 50px;
  color: #29b8ff;
`;

const ReservationInfoContent = styled.div`
  line-height: 1.5;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
`;

const Agreeinfo = styled.div`
  margin-bottom: 35px;
  line-height: 1.5;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.7);
  span {
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
  }
`;

const BookingRequestBtn = styled.div`
  width: 150px;
  height: 56px;
  padding: 18px 25px;
  border-radius: 10px;
  background-color: #29b8ff;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;
export default BookingRequest;

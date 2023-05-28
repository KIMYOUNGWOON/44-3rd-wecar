import React from 'react';
import styled from 'styled-components';
import hyeYoung from '../../assets/mainImg/혜영이.jpeg';

function RateDetails() {
  return (
    <RateDetailsContainer>
      <RateDetailsHeader>
        <HeaderImage hyeyoung={hyeYoung} />
        <HeaderInfo>
          <BrandName>이혜영</BrandName>
          <ModelName>허버 보고싶네</ModelName>
          <SideInfo>
            ★ 4.97 <span>(후기 252개)</span> • ⚑ <span>슈퍼호스트</span>
          </SideInfo>
        </HeaderInfo>
      </RateDetailsHeader>
      <RateDetailsTitle>요금 세부정보</RateDetailsTitle>
      <FlexBox>
        <FlexStart>150,000원 ✕ 5일</FlexStart>
        <FlexEnd>750,000원</FlexEnd>
      </FlexBox>
      <FlexBox>
        <FlexStart>위카 서비스 수수료</FlexStart>
        <FlexEnd>20,000원</FlexEnd>
      </FlexBox>
      <TotalSumContainer>
        <TotalSumTitle>총 합계</TotalSumTitle>
        <TotalSumValue>123,000원</TotalSumValue>
      </TotalSumContainer>
      <Notice>
        해외에서 결제가 처리되기 때문에 카드 발행사에서 추가 수수료를 부과할 수
        있습니다.
      </Notice>
    </RateDetailsContainer>
  );
}

const RateDetailsContainer = styled.div`
  position: fixed;
  top: 211px;
  right: 20%;
  width: 470px;
  padding: 25px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  background-color: #ffffff;
`;

const RateDetailsHeader = styled.div`
  display: flex;
  gap: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 25px;
`;

const HeaderImage = styled.div<{ hyeyoung: string }>`
  width: 120px;
  height: 120px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-image: ${({ hyeyoung }) => `url(${hyeyoung})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const HeaderInfo = styled.div``;

const BrandName = styled.div`
  font-size: 17px;
  margin-bottom: 5px;
`;

const ModelName = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
`;

const SideInfo = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 1);
  margin-top: 65px;
  span {
    color: rgba(0, 0, 0, 0.6);
    margin-left: 5px;
  }
`;

const RateDetailsTitle = styled.div`
  font-size: 23px;
  margin: 35px 0;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const FlexStart = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: underline;
`;

const FlexEnd = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
`;

const TotalSumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const TotalSumTitle = styled.div`
  font-size: 17px;
`;

const TotalSumValue = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const Notice = styled.div`
  margin-top: 30px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`;

export default RateDetails;

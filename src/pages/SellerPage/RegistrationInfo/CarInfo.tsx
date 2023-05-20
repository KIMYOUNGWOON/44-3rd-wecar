import React from 'react';
import styled from 'styled-components';
import CarOption from './CarOption';
import KeyInfo from './KeyInfo';

function CarInfo() {
  return (
    <CarInfoContainer>
      <CarBrandName>BMW</CarBrandName>
      <CarModelName>BMW M8 컴페티션 그란 쿠페</CarModelName>
      <CarNumberTitle>
        차량 번호 <span>•</span>
      </CarNumberTitle>
      <CarNumberContainer>
        <CarNumber>32바4977</CarNumber>
      </CarNumberContainer>
      <KeyInfoTitle>
        차량 주요 정보 <span>•</span>
      </KeyInfoTitle>
      <KeyInfo />
      <CarOptionTitle>
        차량 옵션 <span>•</span>
      </CarOptionTitle>
      <CarOption />
      <PriceContainer>
        <PriceTitle>
          시간당 이용 요금 <span>•</span>
        </PriceTitle>
        <HourlyPrice>8,900원</HourlyPrice>
      </PriceContainer>
      <TermContainer>
        <TermTitle>
          공유 기간 <span>•</span>
        </TermTitle>
        <TermValue>2023-05-16 ~ 2023-05-23</TermValue>
      </TermContainer>
      <AddressContainer>
        <AddressTitle>
          픽업 / 반납 위치 <span>•</span>
        </AddressTitle>
        <AddressValue>
          <ZipCode>33292</ZipCode>
          <MainAddress>서울특별시 강남구 테헤란로 427</MainAddress>
          <DetailAddress>위워크타워 10층</DetailAddress>
        </AddressValue>
      </AddressContainer>
    </CarInfoContainer>
  );
}

const CarInfoContainer = styled.div`
  width: 700px;
  padding: 40px;
  transform: translateX(90%);
  background-color: #ffffff;
`;

const CarBrandName = styled.div`
  margin-bottom: 5px;
  font-size: 25px;
  font-weight: 700;
  color: rgb(34, 34, 34);
`;

const CarModelName = styled.div`
  margin-bottom: 40px;
  padding-bottom: 15px;
  padding-left: 2px;
  border-bottom: 1px solid #ebebeb;
  line-height: 17px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.8);
`;

const CarNumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  margin-bottom: 40px;
  border: 1px solid #ebebeb;
  border-radius: 10px;
`;

const CarNumberTitle = styled.div`
  font-size: 16px;
  color: rgba(34, 34, 34, 0.8);
  margin-bottom: 15px;
  span {
    color: #fa545c;
  }
`;

const CarNumber = styled.div`
  font-size: 23px;
  letter-spacing: 10px;
  color: rgba(34, 34, 34, 0.8);
`;

const KeyInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 16px;
  color: rgba(34, 34, 34, 0.8);
  span {
    color: #fa545c;
  }
`;

const CarOptionTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 16px;
  color: rgba(34, 34, 34, 0.8);
  span {
    color: #fa545c;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  padding: 20px 0;
`;

const PriceTitle = styled.div`
  font-size: 16px;
  color: rgba(34, 34, 34, 0.8);
  span {
    color: #fa545c;
  }
`;

const HourlyPrice = styled.div`
  font-size: 18px;
  color: rgba(34, 34, 34, 0.8);
  text-align: right;
`;

const TermContainer = styled(PriceContainer)``;

const TermTitle = styled(PriceTitle)``;

const TermValue = styled(HourlyPrice)``;

const AddressContainer = styled(PriceContainer)`
  align-items: flex-start;
  margin: 0;
`;

const AddressTitle = styled(PriceTitle)``;

const AddressValue = styled(HourlyPrice)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ZipCode = styled.div``;

const MainAddress = styled.div``;

const DetailAddress = styled.div``;

export default CarInfo;

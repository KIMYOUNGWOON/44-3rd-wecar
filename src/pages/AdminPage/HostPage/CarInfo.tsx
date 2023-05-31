import React from 'react';
import styled from 'styled-components';
import CarOption from './CarOption';
import KeyInfo from './KeyInfo';

interface CarInfoProps {
  carData: any;
}

const CarInfo: React.FC<CarInfoProps> = ({ carData }) => {
  return (
    <CarInfoContainer>
      <CarBrandName>{carData.carModel.brand.name}</CarBrandName>
      <CarModelName>{carData.carModel.name}</CarModelName>
      <CarNumberTitle>
        차량 번호 <span>•</span>
      </CarNumberTitle>
      <CarNumberContainer>
        <CarNumber>{carData.carNumber}</CarNumber>
      </CarNumberContainer>
      <KeyInfoTitle>
        차량 주요 정보 <span>•</span>
      </KeyInfoTitle>
      <KeyInfo carData={carData} />
      <CarOptionTitle>
        차량 옵션 <span>•</span>
      </CarOptionTitle>
      <CarOption carData={carData} />
      <PriceContainer>
        <PriceTitle>
          일일 이용 요금 <span>•</span>
        </PriceTitle>
        <HourlyPrice>{carData.pricePerDay.toLocaleString()}원</HourlyPrice>
      </PriceContainer>
      <TermContainer>
        <TermTitle>
          공유 기간 <span>•</span>
        </TermTitle>
        <TermValue>
          {carData.startDate.substring(0, 10) +
            ' ~ ' +
            carData.endDate.substring(0, 10)}
        </TermValue>
      </TermContainer>
      <AddressContainer>
        <AddressTitle>
          픽업 / 반납 위치 <span>•</span>
        </AddressTitle>
        <AddressValue>
          <ZipCode>{carData.address.slice(0, 5)}</ZipCode>
          <Address>{carData.address.slice(5)}</Address>
        </AddressValue>
      </AddressContainer>
    </CarInfoContainer>
  );
};

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
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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
  border: 1px solid rgba(0, 0, 0, 0.2);
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
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
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

const Address = styled.div``;

export default CarInfo;

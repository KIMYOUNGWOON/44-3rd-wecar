import React from 'react';
import styled from 'styled-components';
import { BsFillCheckSquareFill } from 'react-icons/bs';

function HostCarInfo() {
  return (
    <HostCarInfoContainer>
      <HostName>OOO 님이 호스팅하는 차량</HostName>
      <CarBrandName>BMW</CarBrandName>
      <CarModelName>M8 컴페티션 그란 쿠페</CarModelName>
      <CarNumberTitle>
        차량 번호 <span>•</span>
      </CarNumberTitle>
      <CarNumberContainer>
        <CarNumber>123가1234</CarNumber>
      </CarNumberContainer>
      <KeyInfoTitle>
        차량 주요 정보 <span>•</span>
      </KeyInfoTitle>
      <KeyInfoContainer>
        <Appearance>
          <Key>외형</Key>
          <Value>승용차</Value>
        </Appearance>
        <ReleaseDate>
          <Key>차종</Key>
          <Value>대형</Value>
        </ReleaseDate>
        <Color>
          <Key>승차 정원</Key>
          <Value>4인승</Value>
        </Color>
        <SellingPrice>
          <Key>연류 유형</Key>
          <Value>가솔린</Value>
        </SellingPrice>
      </KeyInfoContainer>
      <CarOptionTitle>
        차량 옵션 <span>•</span>
      </CarOptionTitle>
      <CarOptionContainer>
        {CAR_OPTION.map((data: string, i: number) => {
          return (
            <CarOptionList key={i}>
              <CheckIcon />
              <CarOptionText>{data}</CarOptionText>
            </CarOptionList>
          );
        })}
      </CarOptionContainer>
      <TermContainer>
        <TermTitle>
          공유 기간 <span>•</span>
        </TermTitle>
        <TermValue>2023년 5월 7일 ~ 2023년 6월 3일</TermValue>
      </TermContainer>
      <TermMessage>
        해당 기간 외에 예약은 불가능하니 참고 바랍니다. <br />
        또한, 미리 예약된 날짜의 경우 날짜 선택이 불가능합니다.
      </TermMessage>
    </HostCarInfoContainer>
  );
}

const HostCarInfoContainer = styled.div`
  flex: 2;
`;

const HostName = styled.div`
  font-size: 25px;
  margin-bottom: 40px;
`;

const CarBrandName = styled.div`
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 600;
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

const KeyInfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  padding: 20px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

const Appearance = styled.div`
  flex: 1;
`;

const ReleaseDate = styled(Appearance)`
  padding: 0 12px;
  border-left: 1px solid #ebebeb;
`;

const Color = styled(ReleaseDate)``;

const SellingPrice = styled(ReleaseDate)``;

const Key = styled.div`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const Value = styled.div`
  margin-top: 6px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.8);
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

const CarOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  padding: 20px 0;
`;

const CarOptionList = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CheckIcon = styled(BsFillCheckSquareFill)`
  color: #29b9ff;
`;

const CarOptionText = styled.div`
  padding-top: 4px;
`;

const TermContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  padding: 20px 0;
`;

const TermTitle = styled.div`
  font-size: 16px;
  color: rgba(34, 34, 34, 0.8);
  span {
    color: #fa545c;
  }
`;

const TermValue = styled.div`
  font-size: 18px;
  color: rgba(34, 34, 34, 0.8);
  text-align: right;
`;

const TermMessage = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: #29b9ff;
  text-align: right;
`;

export default HostCarInfo;

const CAR_OPTION = [
  '매뉴얼 에어컨',
  '후방모니터',
  '스마트 트렁크',
  '스마트키 원격시동',
  '썬루프',
  '크루즈 컨트롤',
  '패들 쉬프트',
  '차로 이탈방지 보조',
  '차로 유지 보조',
  '하이빔 보조',
  '통합 주행 모드',
  '열선 시트',
  'LED 실내등',
  '전동식 파킹 브레이크',
  '2열 에어벤트',
  '오토라이트 컨트롤',
  '전자식 변속 칼럼',
  '세이프티 연락',
  '운전석 전동시트',
];

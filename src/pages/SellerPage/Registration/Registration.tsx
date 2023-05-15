import React from 'react';
import styled from 'styled-components';
import CarImage from './CarImage';
import EnterAddress from './EnterAddress';
import OfferPeriod from './OfferPeriod';

function Registration() {
  return (
    <RegistrationContainer>
      <TitleBox>
        브랜드 <span>•</span>
      </TitleBox>
      <SelectContainer>
        <SelectBox>
          <SelectList>브랜드 선택</SelectList>
          {CAR_BRAND.map((brand, i) => {
            return <SelectList>{brand}</SelectList>;
          })}
        </SelectBox>
        <GuidanceNotes>정확한 브랜드명을 작성해주세요.</GuidanceNotes>
        <GuidanceNotes>
          차량과 맞지 않는 브랜드를 등록할 경우 판매중지, 판매금지 될 수
          있습니다.
        </GuidanceNotes>
      </SelectContainer>
      <TitleBox>
        차량 모델 <span>•</span>
      </TitleBox>
      <SelectContainer>
        <SelectBox>
          <SelectList>차량 모델 선택</SelectList>
          {CAR_BRAND.map((brand, i) => {
            return <SelectList>{brand}</SelectList>;
          })}
        </SelectBox>
        <GuidanceNotes>
          등록 차량과 직접 관련이 없는 다른 모델명, 스팸성 키워드 입력시
          관리자에 의해 판매 금지될 수 있습니다.
        </GuidanceNotes>
        <GuidanceNotes>
          다른 차량 모델명을 무단으로 도용하여 -st 등과 같이 기재하는 경우 별도
          고지 없이 제재될 수 있습니다.
        </GuidanceNotes>
      </SelectContainer>
      <TitleBox>
        차량 번호 <span>•</span>
      </TitleBox>
      <CarNumberBox>
        <CarNumberInput placeholder="OOO가OOOO" />
        <GuidanceNotes>
          본인 명의의 차량만 등록 가능하며, 타인명의 / 리스 / 렌트 등의 차량은
          등록이 불가합니다.
        </GuidanceNotes>
      </CarNumberBox>

      <TitleBox>
        이용 요금 <span>•</span>
      </TitleBox>
      <ChargeInputBox>
        <ChargeText>
          시간당 이용 요금 <span>•</span>
        </ChargeText>
        <div>
          <ChargeInput placeholder="숫자만 입력" />
          <WonText>원</WonText>
          <GuidanceNotes>
            매출연동수수료 2%가 결제수수료와 별도로 과금됩니다.
          </GuidanceNotes>
          <GuidanceNotes>
            이용요금, 할인요금을 활용한 비정상 거래는 자동 탐지되어 판매지수에
            포함되지 않으니 유의해주세요.
          </GuidanceNotes>
        </div>
      </ChargeInputBox>
      <TitleBox>
        차량 주요정보 <span>•</span>
      </TitleBox>
      <KeyInfoBox>
        <AppearanceBox>
          <BoxTitle>외형</BoxTitle>
          <RadioInputContainer>
            <RadioInput type="radio" />
            <Label>경차</Label>
            <RadioInput type="radio" />
            <Label>세단</Label>
            <RadioInput type="radio" />
            <Label>SUV</Label>
            <RadioInput type="radio" />
            <Label>승합차</Label>
          </RadioInputContainer>
        </AppearanceBox>
        <CarTypeBox>
          <BoxTitle>차종</BoxTitle>
          <RadioInputContainer>
            <RadioInput type="radio" />
            <Label>소형</Label>
            <RadioInput type="radio" />
            <Label>중형</Label>
            <RadioInput type="radio" />
            <Label>대형</Label>
          </RadioInputContainer>
        </CarTypeBox>
        <PeopleNumberBox>
          <BoxTitle>승차 정원</BoxTitle>
          <RadioInputContainer>
            <RadioInput type="radio" />
            <Label>4인승</Label>
            <RadioInput type="radio" />
            <Label>5인승</Label>
            <RadioInput type="radio" />
            <Label>7인승</Label>
            <RadioInput type="radio" />
            <Label>9인승</Label>
          </RadioInputContainer>
        </PeopleNumberBox>
        <FuelTypeBox>
          <BoxTitle>연료 유형</BoxTitle>
          <RadioInputContainer>
            <RadioInput name="fuelType" type="radio" />
            <Label>가솔린</Label>
            <RadioInput name="fuelType" type="radio" />
            <Label>디젤</Label>
            <RadioInput name="fuelType" type="radio" />
            <Label>하이브리드</Label>
            <RadioInput name="fuelType" type="radio" />
            <Label>EV</Label>
          </RadioInputContainer>
        </FuelTypeBox>
      </KeyInfoBox>
      <TitleBox>
        차량 옵션 <span>•</span>
      </TitleBox>
      <CarOptionBox>
        <CarOptionTitle>옵션 선택</CarOptionTitle>
        <CheckBoxContainer>
          {CAR_OPTION.map((option, i) => {
            return (
              <CheckBoxForm key={i}>
                <CheckBox type="checkbox" />
                <Label>{option}</Label>
              </CheckBoxForm>
            );
          })}
        </CheckBoxContainer>
      </CarOptionBox>
      <CarImage />
      <OfferPeriod />
      <EnterAddress />
      <ButtonContainer>
        <RegistrationButton>등록하기</RegistrationButton>
        <CancelButton>취소</CancelButton>
      </ButtonContainer>
    </RegistrationContainer>
  );
}

const RegistrationContainer = styled.div`
  padding: 20px 300px 40px;
  background-color: #edf0f5;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: 74px;
  margin-top: 15px;
  padding: 20px 35px;
  border: 1px solid #dbdde2;
  background-color: #ffffff;
  font-size: 18px;
  line-height: 2;

  span {
    color: #fa545c;
  }
`;

export const GuidanceNotes = styled.p`
  margin-top: 10px;
  font-size: 13px;
  color: #29b8ff;
`;
const SelectContainer = styled.div`
  width: 100%;
  padding: 20px 35px;
  border: 1px solid #dbdde2;
  background-color: #ffffff;
`;

const SelectBox = styled.select`
  width: 25%;
  height: 34px;
  padding: 0 10px 2px;
  border: 1px solid #dbdde2;
  background-color: #f8f9fd;
`;

const SelectList = styled.option``;

const CarNumberBox = styled.div`
  width: 100%;
  padding: 20px 35px;
  border: 1px solid #dbdde2;
  background-color: #ffffff;
`;

const CarNumberInput = styled.input`
  width: 100%;
  height: 34px;
  padding: 0 15px 2px;
  border: 1px solid #dbdde2;
  background-color: #f8f9fd;
  outline: none;
`;

const ChargeInputBox = styled(CarNumberBox)`
  position: relative;
  display: flex;
  gap: 20px;
`;

const ChargeText = styled.div`
  padding-top: 5px;
  font-size: 15px;
  span {
    color: #fa545c;
  }
`;

const ChargeInput = styled(CarNumberInput)`
  width: 170px;
`;

const WonText = styled.div`
  position: absolute;
  top: 20px;
  left: 340px;
  width: 34px;
  height: 34px;
  padding-top: 9px;
  padding-left: 9px;
  border: 1px solid #dbdde2;
  background-color: #f8f9fd;
  font-size: 15px;
  color: #222222;
`;

const KeyInfoBox = styled.div`
  width: 100%;
  padding: 20px 35px;
  border: 1px solid #dbdde2;
  background-color: #ffffff;
`;

const AppearanceBox = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  border-bottom: 1px solid #dbdde2;
`;

const CarTypeBox = styled(AppearanceBox)``;

const PeopleNumberBox = styled(AppearanceBox)``;

const FuelTypeBox = styled(AppearanceBox)`
  margin-bottom: 20px;
`;

const BoxTitle = styled.div`
  flex: 1;
`;

const RadioInputContainer = styled.div`
  flex: 4;
`;

const Label = styled.label`
  margin-left: 5px;
  margin-right: 25px;
`;

const RadioInput = styled.input``;

const CarOptionBox = styled.div`
  display: flex;
  width: 100%;
  padding: 40px 35px;
  border: 1px solid #dbdde2;
  background-color: #ffffff;
`;

const CarOptionTitle = styled.div`
  flex: 1;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex: 4;
  flex-wrap: wrap;
  gap: 15px 0;
`;

const CheckBoxForm = styled.div`
  flex-shrink: 0;
`;

const CheckBox = styled.input``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 30px;
`;

const RegistrationButton = styled.div`
  width: 180px;
  height: 46px;
  padding-top: 15px;
  background-color: #29b8ff;
  color: #ffffff;
  border: 1px solid #dbdde2;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const CancelButton = styled(RegistrationButton)`
  background-color: #ffffff;
  color: #222222;
`;

export default Registration;

const CAR_BRAND = ['현대', '기아', 'BMV', '벤츠', '아우디', '볼보', '쉐보레'];

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

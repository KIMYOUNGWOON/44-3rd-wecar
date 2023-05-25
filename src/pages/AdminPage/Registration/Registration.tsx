import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HOST_ADDRESS } from '../../../HostAddress';
import styled from 'styled-components';
import CarImage from './CarImage';
import EnterAddress from './EnterAddress';
import OfferPeriod from './OfferPeriod';
import { useNavigate } from 'react-router';

const initialValue = {
  brandName: '',
  carModel: '',
  carNumber: '',
  pricePerDay: '',
  fuelType: '',
  carImage: '',
  startDate: '',
  endDate: '',
  postCode: '',
  address: '',
  detailAddress: '',
};

const initialKeyInfoValue = {
  carType: '',
  carSize: '',
  capacity: '',
};

interface CarBrand {
  id: number;
  name: string;
  logoUrl: string;
}

export type FileData = {
  name: string;
  type: string;
  url: string | undefined;
};

interface RegistrationProps {
  setPageMode: React.Dispatch<React.SetStateAction<string>>;
}

const Registration: React.FC<RegistrationProps> = ({ setPageMode }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [keyInfoValue, setKeyInfoValue] = useState(initialKeyInfoValue);
  const [optionValue, setOptionValue] = useState<string[]>([]);
  const [carBrandList, setCarBrandList] = useState<CarBrand[]>([]);
  const [carModelList, setCarModelList] = useState<any>([]);
  const [fileData, setFileData] = useState<FileData[]>([]);
  const {
    carNumber,
    carModel,
    fuelType,
    pricePerDay,
    startDate,
    endDate,
    postCode,
    address,
    detailAddress,
  } = inputValue;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${HOST_ADDRESS}/cars/brands`)
      .then(response => {
        if (response.status === 200) {
          setCarBrandList(response.data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  function handleChange(event: React.ChangeEvent<any>) {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  }

  function handleOption(event: React.ChangeEvent<any>) {
    const { value, checked } = event.target;
    if (checked === true) {
      setOptionValue([...optionValue, value]);
    } else {
      const newOptionValue = [...optionValue];
      const removeOptions = newOptionValue.filter(option => option !== value);
      setOptionValue(removeOptions);
    }
  }

  function handleBrandName(event: React.ChangeEvent<any>) {
    const { value } = event.target;
    const checkedCarBrand = carBrandList.find(data => data.name === value);
    setInputValue({ ...inputValue, brandName: value });
    axios
      .get(`${HOST_ADDRESS}/cars/brands/${checkedCarBrand?.id}`)
      .then(response => {
        if (response.status === 200) {
          setCarModelList(response.data);
        }
      })
      .catch(error => console.log(error));
  }

  function handleCarModel(event: React.ChangeEvent<any>) {
    const { value } = event.target;
    const checkedCarModel = carModelList.find(
      (data: any) => data.name === value
    );
    axios
      .get(`${HOST_ADDRESS}/cars/models/${checkedCarModel?.id}`)
      .then(response => {
        if (response.status === 200) {
          const { data } = response;
          setInputValue({
            ...inputValue,
            carModel: value,
          });
          setKeyInfoValue({
            ...keyInfoValue,
            carType: data.carType.type,
            carSize: data.engineSize.size,
            capacity: `${data.capacity}인승`,
          });
        }
      })
      .catch(error => console.log(error));
  }

  function carUpload() {
    axios
      .post(`${HOST_ADDRESS}/cars/host`, {
        newHostCar: {
          carNumber,
          carModel,
          fuelType,
          address: `${postCode} ${address} ${detailAddress}`,
          pricePerDay,
          options: optionValue,
          startDate,
          endDate,
        },
        files: fileData,
      })
      .then(response => {
        if (response.status === 201) {
          alert('차량이 등록되었습니다.');
          setPageMode('breakdown');
        }
      });
  }

  return (
    <RegistrationContainer>
      <TitleBox>
        브랜드 <span>•</span>
      </TitleBox>
      <SelectContainer>
        <SelectBox
          name="brand"
          value={inputValue.brandName}
          onChange={handleBrandName}
        >
          <SelectList>브랜드 선택</SelectList>
          {carBrandList.map(data => {
            return <SelectList key={data.id}>{data.name}</SelectList>;
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
        <SelectBox
          name="carModel"
          value={inputValue.carModel}
          onChange={handleCarModel}
        >
          <SelectList>차량 모델 선택</SelectList>
          {carModelList.map((data: any) => {
            return <SelectList key={data.id}>{data.name}</SelectList>;
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
        <CarNumberInput
          name="carNumber"
          placeholder="OOO가OOOO"
          onChange={handleChange}
        />
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
          일일 이용 요금 <span>•</span>
        </ChargeText>
        <div>
          <ChargeInput
            name="pricePerDay"
            placeholder="숫자만 입력"
            onChange={handleChange}
          />
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
            <RadioInput
              name="carType"
              type="radio"
              value="경차"
              checked={keyInfoValue.carType === '경차'}
              disabled
            />
            <Label>경차</Label>
            <RadioInput
              name="carType"
              type="radio"
              value="승용차"
              checked={keyInfoValue.carType === '승용차'}
              disabled
            />
            <Label>승용차</Label>
            <RadioInput
              name="carType"
              type="radio"
              value="SUV"
              checked={keyInfoValue.carType === 'SUV'}
              disabled
            />
            <Label>SUV</Label>
            <RadioInput
              name="carType"
              type="radio"
              value="승합차"
              checked={keyInfoValue.carType === '승합차'}
              disabled
            />
            <Label>승합차</Label>
          </RadioInputContainer>
        </AppearanceBox>
        <CarTypeBox>
          <BoxTitle>차종</BoxTitle>
          <RadioInputContainer>
            <RadioInput
              name="carSize"
              type="radio"
              value="소형"
              checked={keyInfoValue.carSize === '소형'}
              disabled
            />
            <Label>소형</Label>
            <RadioInput
              name="carSize"
              type="radio"
              value="중형"
              checked={keyInfoValue.carSize === '중형'}
              disabled
            />
            <Label>중형</Label>
            <RadioInput
              name="carSize"
              type="radio"
              value="대형"
              checked={keyInfoValue.carSize === '대형'}
              disabled
            />
            <Label>대형</Label>
          </RadioInputContainer>
        </CarTypeBox>
        <PeopleNumberBox>
          <BoxTitle>승차 정원</BoxTitle>
          <RadioInputContainer>
            <RadioInput
              name="boardingCapacity"
              type="radio"
              value="4인승"
              checked={keyInfoValue.capacity === '4인승'}
              disabled
            />
            <Label>4인승</Label>
            <RadioInput
              name="boardingCapacity"
              type="radio"
              value="6인승"
              checked={keyInfoValue.capacity === '6인승'}
              disabled
            />
            <Label>6인승</Label>
            <RadioInput
              name="boardingCapacity"
              type="radio"
              value="8인승"
              checked={keyInfoValue.capacity === '8인승'}
              disabled
            />
            <Label>8인승</Label>
            <RadioInput
              name="boardingCapacity"
              type="radio"
              value="10인승"
              checked={keyInfoValue.capacity === '10인승'}
              disabled
            />
            <Label>10인승</Label>
          </RadioInputContainer>
        </PeopleNumberBox>
        <FuelTypeBox>
          <BoxTitle>연료 유형</BoxTitle>
          <RadioInputContainer>
            {FUEL_TYPE.map(data => {
              return (
                <div key={data.id}>
                  <RadioInput
                    name="fuelType"
                    type="radio"
                    value={data.fuel}
                    onChange={handleChange}
                  />
                  <Label>{data.fuel}</Label>
                </div>
              );
            })}
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
                <CheckBox
                  name="carOption"
                  type="checkbox"
                  value={option}
                  onChange={handleOption}
                />
                <Label>{option}</Label>
              </CheckBoxForm>
            );
          })}
        </CheckBoxContainer>
      </CarOptionBox>
      <CarImage fileData={fileData} setFileData={setFileData} />
      <OfferPeriod handleChange={handleChange} />
      <EnterAddress
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleChange={handleChange}
      />
      <ButtonContainer>
        <RegistrationButton onClick={carUpload}>등록하기</RegistrationButton>
        <CancelButton
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
        >
          취소
        </CancelButton>
      </ButtonContainer>
    </RegistrationContainer>
  );
};

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
  width: 183px;
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
  display: flex;
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

const FUEL_TYPE = [
  { id: 1, fuel: '가솔린' },
  { id: 2, fuel: '디젤' },
  { id: 3, fuel: '하이브리드' },
  { id: 4, fuel: 'EV' },
];

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

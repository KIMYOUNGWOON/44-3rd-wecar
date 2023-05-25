import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';
import { TitleBox } from './Registration';

interface EnterAddressProps {
  handleChange: (event: React.ChangeEvent<any>) => void;
  setInputValue: React.Dispatch<
    React.SetStateAction<{
      brandName: string;
      carModel: string;
      carNumber: string;
      pricePerDay: string;
      fuelType: string;
      carImage: string;
      startDate: string;
      endDate: string;
      postCode: string;
      address: string;
      detailAddress: string;
    }>
  >;
  inputValue: {
    brandName: string;
    carModel: string;
    carNumber: string;
    pricePerDay: string;
    fuelType: string;
    carImage: string;
    startDate: string;
    endDate: string;
    postCode: string;
    address: string;
    detailAddress: string;
  };
}

const EnterAddress: React.FC<EnterAddressProps> = ({
  inputValue,
  setInputValue,
  handleChange,
}) => {
  const [openPostcode, setOpenPostcode] = useState(false);

  function handleOpen() {
    setOpenPostcode(current => !current);
  }

  function selectAddress(data: any) {
    setInputValue({
      ...inputValue,
      postCode: data.zonecode,
      address: data.address,
    });
    setOpenPostcode(false);
  }

  return (
    <EnterAddressContainer>
      {openPostcode && (
        <EnterAddressWindow>
          <DaumPostcode
            onComplete={selectAddress}
            autoClose={false}
            defaultQuery="테헤란로 427"
          />
        </EnterAddressWindow>
      )}
      <TitleBox>
        픽업 / 반납 위치 <span>•</span>
      </TitleBox>
      <EnterAddressBox>
        <SubTitle>주소 설정</SubTitle>
        <AddressForm>
          <ZipCodeBtn onClick={handleOpen}>우편 번호</ZipCodeBtn>
          <InputContainer>
            <InputTitle>우편 번호</InputTitle>
            <ZipCode
              placeholder="우편 번호를 검색하세요"
              value={inputValue.postCode}
              readOnly
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>주소</InputTitle>
            <AddressInput
              placeholder="우편 번호 검색 후, 자동입력 됩니다"
              value={inputValue.address}
              readOnly
            />
          </InputContainer>
          <InputContainer>
            <InputTitle>상세 주소</InputTitle>
            <DetailAddressInput
              name="detailAddress"
              placeholder="건물, 아파트, 동/호수 입력"
              value={inputValue.detailAddress}
              onChange={handleChange}
            />
          </InputContainer>
        </AddressForm>
      </EnterAddressBox>
    </EnterAddressContainer>
  );
};

const EnterAddressContainer = styled.div`
  position: relative;
`;

const EnterAddressWindow = styled.div`
  position: absolute;
  top: -30px;
  right: 70px;
  width: 500px;
  height: 400px;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
`;

const EnterAddressBox = styled.div`
  display: flex;
  width: 100%;
  padding: 45px 35px 0;
  border: 1px solid #dbdde2;
  background-color: #ffffff;
`;

const SubTitle = styled.div`
  margin-right: 170px;
`;

const AddressForm = styled.div`
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  margin-bottom: 50px;
`;

const InputTitle = styled.label`
  font-size: 14px;
`;

const ZipCode = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #dbdde2;
  font-size: 17px;
  color: #222222;
  outline: none;
  &::placeholder {
    font-size: 17px;
    color: rgba(0, 0, 0, 0.3);
  }
`;

const ZipCodeBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  width: 70px;
  height: 34px;
  padding-top: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 6px;
  background-color: #ffffff;
  font-size: 13px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const AddressInput = styled(ZipCode)``;

const DetailAddressInput = styled(ZipCode)``;

export default EnterAddress;

import React, { useState } from 'react';
import styled from 'styled-components';
import { SiVisa } from 'react-icons/si';
import { GrAmex } from 'react-icons/gr';
import { BsCreditCard2Back } from 'react-icons/bs';
import { RiCheckLine } from 'react-icons/ri';

function PaymentMethod() {
  const [selectModal, setSelectModal] = useState(false);
  const [rotation, setRotation] = useState(0);

  function handleSelectModal() {
    setSelectModal(prev => !prev);
  }

  function handleRotation() {
    if (rotation === 0) {
      setRotation(180);
    } else {
      setRotation(0);
    }
  }

  return (
    <PaymentMethodContainer>
      <PaymentMethodHeader>
        <PaymentMethodTitle>결제 수단</PaymentMethodTitle>
        <IconContainer>
          <VisaIcon />
          <AmexIcon />
          <MasterIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" />
        </IconContainer>
      </PaymentMethodHeader>
      <SelectBox>
        <IconTextContainer>
          <CardIcon />
          <SelectBoxText>신용카드 또는 체크카드</SelectBoxText>
        </IconTextContainer>
        <ArrowIcon
          rotation={rotation}
          onClick={() => {
            handleSelectModal();
            handleRotation();
          }}
        >
          ⌵
        </ArrowIcon>
      </SelectBox>
      <SelectListBox
        selectmodal={selectModal.toString()}
        onClick={() => {
          handleSelectModal();
          handleRotation();
        }}
      >
        <IconTextContainer>
          <CardIcon />
          <SelectBoxText>신용카드 또는 체크카드</SelectBoxText>
        </IconTextContainer>
        <CheckIcon />
      </SelectListBox>
      <CardNumberBox placeholder="카드 번호 (ex.0000 0000 0000 0000)" />
      <BoxContainer>
        <DeadLineDate placeholder="만료일" />
        <CvvNumber placeholder="CVV" />
      </BoxContainer>
      <PostCodeBox placeholder="우편 번호" />
      <CountryBox placeholder="국가/지역" />
    </PaymentMethodContainer>
  );
}

const PaymentMethodContainer = styled.div`
  position: relative;
`;

const PaymentMethodHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PaymentMethodTitle = styled.div`
  font-size: 25px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const VisaIcon = styled(SiVisa)`
  font-size: 30px;
  color: #122d98;
`;

const AmexIcon = styled(GrAmex)`
  font-size: 40px;
  color: #2578bc;
`;

const MasterIcon = styled.img`
  width: 25px;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 15px;
`;

const CardIcon = styled(BsCreditCard2Back)`
  font-size: 30px;
  color: rgba(0, 0, 0, 0.2);
`;

const SelectBoxText = styled.div`
  padding-top: 3px;
  color: rgba(0, 0, 0, 0.7);
`;

const ArrowIcon = styled.div<{ rotation: number }>`
  font-size: 30px;
  margin-right: 20px;
  padding-bottom: 8px;
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  transform-origin: center;
  transition: transform 0.5s;
  &:hover {
    cursor: pointer;
  }
`;

const CheckIcon = styled(RiCheckLine)`
  font-size: 40px;
  padding-right: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const SelectListBox = styled(SelectBox)<{ selectmodal: string }>`
  position: absolute;
  top: ${({ selectmodal }) => (selectmodal === 'true' ? 120 : 105)}px;
  background-color: #f2f2f2;
  opacity: ${({ selectmodal }) => (selectmodal === 'true' ? 1 : 0)};
  transition: all 0.4s;
  &:hover {
    cursor: pointer;
  }
`;

const CardNumberBox = styled.input`
  width: 100%;
  height: 56px;
  margin-top: 15px;
  padding-left: 15px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  &::placeholder {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeadLineDate = styled.input`
  width: 49%;
  height: 56px;
  margin-top: 15px;
  padding-left: 15px;
  font-size: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  &::placeholder {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const CvvNumber = styled(DeadLineDate)``;

const PostCodeBox = styled(CardNumberBox)``;

const CountryBox = styled(CardNumberBox)``;

export default PaymentMethod;

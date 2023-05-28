import React from 'react';
import styled from 'styled-components';
import carImage from '../../assets/mainImg/carImage.png';

interface LoginSuccessProps {
  setSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginSuccess: React.FC<LoginSuccessProps> = ({ setSuccessModal }) => {
  return (
    <LoginSuccessContainer>
      <LoginSuccessHeader>
        <CloseButton
          onClick={() => {
            setSuccessModal(false);
            window.document.body.style.overflowY = 'scroll';
          }}
        >
          ✕
        </CloseButton>
        <WecarTitle>위카 이용하기</WecarTitle>
      </LoginSuccessHeader>
      <Carimage src={carImage} />
      <WelcomeText>위카에 오신 것을 환영합니다.</WelcomeText>
      <Description>전국 다양한 차량을 편하게 이용해보세요.</Description>
      <ContinueButton
        onClick={() => {
          setSuccessModal(false);
          window.document.body.style.overflowY = 'scroll';
        }}
      >
        계속
      </ContinueButton>
    </LoginSuccessContainer>
  );
};

const LoginSuccessContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 568px;
  background-color: #ffffff;
  padding: 20px 30px 40px;
  border-radius: 10px;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 2;
`;

const LoginSuccessHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 180px;
  padding: 15px 15px 25px 15px;
  border-bottom: 1px solid #eeeeee;
`;
const CloseButton = styled.div`
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
const WecarTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;
const Carimage = styled.img`
  margin-top: 30px;
  margin-bottom: 15px;
`;
const WelcomeText = styled.div`
  font-size: 25px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.5);
`;
const ContinueButton = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  background-color: #2ab9ff;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;
export default LoginSuccess;

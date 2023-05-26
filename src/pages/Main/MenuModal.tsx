import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

interface MenuModalProps {
  setMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModeChange: React.Dispatch<React.SetStateAction<string>>;
  tokenChecked: null | string;
}

const MenuModal: React.FC<MenuModalProps> = ({
  setMenuModal,
  setUserModal,
  setModeChange,
  tokenChecked,
}) => {
  const navigate = useNavigate();
  return (
    <ModalContainer>
      {tokenChecked && (
        <>
          <Account>계정</Account>
          <WishList>위시리스트</WishList>
          <Notice>
            알림 <span>•</span>
          </Notice>
          <LogOut
            onClick={() => {
              localStorage.removeItem('accessToken');
              localStorage.removeItem('refreshToken');
              localStorage.removeItem('userName');
              setMenuModal(false);
              alert('로그아웃 되었습니다.');
            }}
          >
            로그아웃
          </LogOut>
        </>
      )}
      {!tokenChecked && (
        <>
          <SingIn
            onClick={() => {
              setMenuModal(false);
              setUserModal(true);
              setModeChange('signIn');
              window.document.body.style.overflowY = 'hidden';
            }}
          >
            로그인
          </SingIn>
          <SignUp
            onClick={() => {
              setMenuModal(false);
              setUserModal(true);
              setModeChange('signUp');
              window.document.body.style.overflowY = 'hidden';
            }}
          >
            회원가입
          </SignUp>
        </>
      )}
      <CarSharing
        onClick={() => {
          navigate('/seller');
          window.document.body.style.overflowY = 'scroll';
        }}
      >
        당신의 차를 <span>위카</span>하세요
      </CarSharing>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 70px;
  right: 90px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  z-index: 2;
`;
const SingIn = styled.div`
  padding: 19px 15px 15px 15px;
  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
    border-radius: 50px;
  }
`;

const SignUp = styled(SingIn)``;

const Account = styled(SingIn)``;

const WishList = styled(SingIn)``;

const Notice = styled(SingIn)`
  span {
    color: #fa545c;
  }
`;

const LogOut = styled(SingIn)``;

const CarSharing = styled.div`
  margin-top: 5px;
  padding: 20px 15px 10px 15px;
  border-top: 1px solid #eeeeee;

  span {
    color: #00b9ff;
    font-weight: 700;
  }

  &:hover {
    cursor: pointer;
  }
`;

export default MenuModal;

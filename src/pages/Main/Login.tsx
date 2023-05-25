import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { SiNaver } from 'react-icons/si';
import { SiKakao } from 'react-icons/si';
import { SiApple } from 'react-icons/si';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { HOST_ADDRESS } from '../../HostAddress';

interface LoginProps {
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const loginValueObj = { email: '', password: '', userType: 'general' };

const Login: React.FC<LoginProps> = ({ setUserModal, setSuccessModal }) => {
  const [loginValue, setLoginValue] = useState(loginValueObj);
  const { email, password } = loginValue;
  const isValid = email.includes('@') && password.length >= 6;
  const userTypeChecked = loginValue.userType === 'general' ? 'users' : 'hosts';
  const getUserType = loginValue.userType === 'general' ? 'user' : 'host';

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setLoginValue({ ...loginValue, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    axios
      .post(`${HOST_ADDRESS}/${userTypeChecked}/signin`, {
        email,
        password,
      })
      .then(response => {
        if (response.status === 201) {
          setUserModal(false);
          setSuccessModal(true);
        }
      })
      .then(() => {
        axios
          .get(`${HOST_ADDRESS}/auth/check/${getUserType}`)
          .then(response => {
            if (response.status === 200) {
              localStorage.setItem('userName', response.data.name);
            }
          });
      })
      .catch(error => {
        const { response } = error;
        if (response.status === 404) {
          alert('회원 유형을 확인해주세요.');
        }
      });
  }

  return (
    <LoginContainer>
      <Header>
        <CloseBtn
          onClick={() => {
            setUserModal(false);
            window.document.body.style.overflowY = 'scroll';
          }}
        >
          ✕
        </CloseBtn>
        <LoginText>로그인</LoginText>
        <div />
      </Header>
      <Greeting>
        <span>위카</span>에 오신 것을 환영합니다.
      </Greeting>
      <FormContainer onSubmit={handleSubmit}>
        <UserTypeTitle>회원 유형</UserTypeTitle>
        <UserTypeName>일반 회원</UserTypeName>
        <UserType
          type="radio"
          name="userType"
          value="general"
          checked={loginValue.userType === 'general'}
          onChange={handleChange}
        />
        <UserTypeName>공급 회원</UserTypeName>
        <UserType
          type="radio"
          name="userType"
          value="supply"
          checked={loginValue.userType === 'supply'}
          onChange={handleChange}
        />
        <EmailInput
          name="email"
          placeholder="이메일"
          onChange={handleChange}
          value={loginValue.email}
          autoComplete="username"
        />
        <PasswordInput
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={handleChange}
          value={loginValue.password}
          autoComplete="new-password"
        />
        <LoginBtn type="submit" isvalid={isValid.toString()}>
          로그인
        </LoginBtn>
      </FormContainer>
      <PartingLine />
      <SocialLogin>
        <NaverIcon />
        <Text>네이버로 로그인하기</Text>
        <div />
      </SocialLogin>
      <SocialLogin>
        <FaceBookIcon />
        <Text>페이스북으로 로그인하기</Text>
        <div />
      </SocialLogin>
      <SocialLogin>
        <KaKaoIcon />
        <Text>카카오로 로그인하기</Text>
        <div />
      </SocialLogin>
      <SocialLogin>
        <GoogleIcon />
        <Text>구글로 로그인하기</Text>
        <div />
      </SocialLogin>
      <SocialLogin>
        <AppleIcon />
        <Text>애플로 로그인하기</Text>
        <div />
      </SocialLogin>
    </LoginContainer>
  );
};
const LoginContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 568px;
  height: 730px;
  padding: 0px 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  border-bottom: 1px solid #eeeeee;
  background-color: #ffffff;
`;

const LoginText = styled.div`
  font-size: 19px;
  font-weight: 600;
`;

const CloseBtn = styled.div`
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const Greeting = styled.div`
  margin-bottom: 20px;
  padding: 30px 0;
  font-size: 23px;
  font-weight: 600;
  color: rgb(34, 34, 34);

  span {
    color: rgb(41, 184, 255);
  }
`;

const UserTypeTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
`;

const UserTypeName = styled.label`
  font-size: 15px;
`;

const UserType = styled.input`
  margin-right: 18px;
  margin-bottom: 20px;
`;

const FormContainer = styled.form``;

const EmailInput = styled.input`
  display: block;
  width: 100%;
  height: 56px;
  margin-bottom: 30px;
  padding-bottom: 4px;
  padding-left: 10px;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  font-size: 18px;
  outline: none;

  &::placeholder {
    font-size: 17px;
  }
`;

const PasswordInput = styled(EmailInput)``;

const LoginBtn = styled.button<{ isvalid: string }>`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 7px;
  background-color: ${({ isvalid }) =>
    isvalid === 'true' ? 'rgb(41, 184, 255)' : 'rgba(41, 184, 255, 0.3)'};
  color: #fefefe;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const PartingLine = styled.hr`
  border: none;
  height: 1px;
  background-color: #eeeeee;
  margin: 20px 0;
`;

const SocialLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  height: 48px;
  border: 1px solid #b0b0b0;
  border-radius: 7px;

  &:hover {
    cursor: pointer;
  }
`;

const NaverIcon = styled(SiNaver)`
  margin-left: 30px;
  color: #30c759;
`;

const FaceBookIcon = styled(AiFillFacebook)`
  margin-left: 25px;
  color: #1977f2;
  font-size: 30px;
`;

const KaKaoIcon = styled(SiKakao)`
  margin-left: 30px;
  color: #fccd00;
  font-size: 30px;
`;

const GoogleIcon = styled(FcGoogle)`
  margin-left: 30px;
  font-size: 25px;
`;

const AppleIcon = styled(SiApple)`
  margin-left: 30px;
  font-size: 25px;
`;

const Text = styled.div`
  font-size: 15px;
  margin-right: 30px;
`;

export default Login;

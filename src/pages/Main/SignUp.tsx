import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { HOST_ADDRESS } from '../../HostAddress';

interface SignUpProps {
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const signUpValueObj = {
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  phoneNumber: '',
  birthDay: '',
  licenseNumber: '',
  userType: 'general',
};

const isChecked = {
  mandatoryCheck: false,
  choiceCheck: false,
};

const SignUp: React.FC<SignUpProps> = ({ setUserModal }) => {
  const [signUpValue, setSignUpValue] = useState(signUpValueObj);
  const [checkedValue, setCheckedValue] = useState(isChecked);
  const passwordChecked = signUpValue.password === signUpValue.passwordConfirm;
  const fullName = signUpValue.lastName + signUpValue.firstName;
  const userTypeChecked =
    signUpValue.userType === 'general' ? 'users' : 'hosts';

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setSignUpValue({ ...signUpValue, [name]: value });
  }

  function handleCheckBox(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    setCheckedValue({ ...checkedValue, [name]: checked });
  }

  const USERS_SIGNUP = {
    email: signUpValue.email,
    password: signUpValue.password,
    name: fullName,
    phoneNumber: signUpValue.phoneNumber,
    driversLicenseNumber: signUpValue.licenseNumber,
    birthday: signUpValue.birthDay,
    marketingAgreement: checkedValue.choiceCheck,
  };

  const HOSTS_SIGNUP = {
    email: signUpValue.email,
    password: signUpValue.password,
    name: fullName,
    phoneNumber: signUpValue.phoneNumber,
    marketingAgreement: checkedValue.choiceCheck,
  };
  const POST_SIGNUP = userTypeChecked === 'users' ? USERS_SIGNUP : HOSTS_SIGNUP;

  function handleSubmit() {
    axios
      .post(`${HOST_ADDRESS}/${userTypeChecked}/signup`, {
        ...POST_SIGNUP,
      })
      .then(response => {
        if (response.status === 201) {
          alert('회원가입이 되었습니다.');
          setUserModal(false);
          window.document.body.style.overflowY = 'scroll';
        }
      })
      .catch(error => {
        if (error.response.status === 401) {
          alert('입력값을 확인해주세요.');
        }
        console.error(error);
      });
  }

  return (
    <SignUpContainer>
      <Header>
        <CloseBtn
          onClick={() => {
            setUserModal(false);
            window.document.body.style.overflowY = 'scroll';
          }}
        >
          ✕
        </CloseBtn>
        <SignUpText>회원가입</SignUpText>
        <div />
      </Header>
      <Greeting>
        <span>위카</span>에 오신 것을 환영합니다.
      </Greeting>
      <UserTypeTitle>회원가입 유형</UserTypeTitle>
      <UserTypeName>일반 회원</UserTypeName>
      <UserType
        type="radio"
        name="userType"
        value="general"
        checked={signUpValue.userType === 'general'}
        onChange={handleChange}
      />
      <UserTypeName>공급 회원</UserTypeName>
      <UserType
        type="radio"
        name="userType"
        value="supply"
        checked={signUpValue.userType === 'supply'}
        onChange={handleChange}
      />
      <form>
        <LastNameInput
          name="lastName"
          placeholder="성"
          value={signUpValue.lastName}
          onChange={handleChange}
        />
        <FirstNameInput
          name="firstName"
          placeholder="이름"
          value={signUpValue.firstName}
          onChange={handleChange}
        />
        <GuidanceNotes>
          정부 발급 신분증에 표시된 이름과 일치하는지 확인하세요.
        </GuidanceNotes>
        <EmailInput
          name="email"
          value={signUpValue.email}
          placeholder="이메일"
          onChange={handleChange}
          autoComplete="username"
        />
        <GuidanceNotes>
          예약 확인과 영수증을 이메일로 보내드립니다.
        </GuidanceNotes>
        <PasswordInput
          type="password"
          name="password"
          value={signUpValue.password}
          placeholder="비밀번호"
          onChange={handleChange}
          autoComplete="new-password"
        />
        <PasswordConfirmInput
          type="password"
          placeholder="비밀번호 확인"
          name="passwordConfirm"
          value={signUpValue.passwordConfirm}
          onChange={handleChange}
          autoComplete="new-password"
        />
        {signUpValue.password && signUpValue.passwordConfirm && (
          <WarningMessage passwordchecked={passwordChecked.toString()}>
            {passwordChecked
              ? '비밀번호가 일치합니다.'
              : '비밀번호가 일치하지 않습니다'}
          </WarningMessage>
        )}
        <GuidanceNotes>비밀번호는 6~20자로 되어야 합니다.</GuidanceNotes>
        <PhoneNumberInput
          name="phoneNumber"
          placeholder="휴대폰 번호"
          value={signUpValue.phoneNumber}
          onChange={handleChange}
        />
        <GuidanceNotes>010-0000-0000 형식으로 입력 가능합니다.</GuidanceNotes>
        {signUpValue.userType === 'general' && (
          <BirthDayInput
            name="birthDay"
            placeholder="생년월일"
            type="date"
            value={signUpValue.birthDay}
            onChange={handleChange}
          />
        )}
        {signUpValue.userType === 'general' && (
          <GuidanceNotes>
            만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 위카의
            다른 회원에게 공개되지 않습니다.
          </GuidanceNotes>
        )}
        {signUpValue.userType === 'general' && (
          <LicenseNumber
            name="licenseNumber"
            value={signUpValue.licenseNumber}
            placeholder="운전면허증 번호"
            onChange={handleChange}
          />
        )}
        {signUpValue.userType === 'general' && (
          <GuidanceNotes>
            00-00-000000-00 형식으로 입력 가능합니다.
          </GuidanceNotes>
        )}
      </form>
      <PartingLine />
      <AgreeBox>
        <div>
          <AgreeTitle>개인정보 수집 및 이용에 동의합니다. (필수)</AgreeTitle>
          <AgreeContent>
            위카가 수집하는 개인 정보 위카 플랫폼을 이용하는 데 필요한 정보
            당사는 회원님이 에어비앤비 플랫폼을 이용할 때 회원님의 개인 정보를
            수집합니다. 그렇지 않은 경우, 에어비앤비는 요청하신 서비스를
            회원님게 제공하지 못할 수 있습니다. 이러한 정보에는 다음이
            포함됩니다.
          </AgreeContent>
          <SeeMore>더보기</SeeMore>
        </div>
        <AgreeCheckBox
          type="checkbox"
          name="mandatoryCheck"
          checked={checkedValue.mandatoryCheck}
          onChange={handleCheckBox}
        />
      </AgreeBox>
      <AgreeBox>
        <div>
          <AgreeTitle>마케팅 이메일 수신을 원합니다. (선택)</AgreeTitle>
          <AgreeContent>
            에어비앤비 회원 전용 할인, 추천 여행 정보, 마케팅 이메일, 푸시
            알림을 보내드립니다. 계정 설정 또는 마케팅 알림에서 언제든지 수신을
            거부할 수 있습니다.
          </AgreeContent>
          <SeeMore>더보기</SeeMore>
        </div>
        <AgreeCheckBox
          type="checkbox"
          name="choiceCheck"
          checked={checkedValue.choiceCheck}
          onChange={handleCheckBox}
        />
      </AgreeBox>
      <AgreeConfirm>
        동의 및 계속하기를 선택하여 에어비앤비 <span>서비스 약관</span>,&nbsp;
        <span>결제 서비스 약관</span>, <span>위치기반 서비스 이용약관</span>
        ,&nbsp;
        <span>차별 금지 정책</span>, <span>개인정보 처리방침</span>에
        동의합니다.
      </AgreeConfirm>
      <AgreeBtn
        enable={checkedValue.mandatoryCheck.toString()}
        onClick={handleSubmit}
      >
        가입하기
      </AgreeBtn>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
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
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  z-index: 2;
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

const SignUpText = styled.div`
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

const LastNameInput = styled.input`
  display: block;
  width: 100%;
  height: 56px;
  margin-bottom: 15px;
  padding-left: 10px;
  padding-bottom: 4px;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  font-size: 18px;
  outline: none;

  &::placeholder {
    font-size: 17px;
  }
`;

const FirstNameInput = styled(LastNameInput)`
  margin-bottom: 10px;
`;

const EmailInput = styled(LastNameInput)`
  margin-bottom: 10px;
`;

const PasswordInput = styled(LastNameInput)`
  margin-bottom: 10px;
`;

const PasswordConfirmInput = styled(LastNameInput)`
  margin-bottom: 10px;
`;

const PhoneNumberInput = styled(LastNameInput)`
  margin-bottom: 10px;
`;

const BirthDayInput = styled(LastNameInput)`
  margin-bottom: 10px;
`;

const LicenseNumber = styled(LastNameInput)`
  margin-bottom: 10px;
`;

const GuidanceNotes = styled.div`
  font-size: 12px;
  color: #8c8b8c;
  margin-bottom: 30px;
`;

const WarningMessage = styled.div<{ passwordchecked: string }>`
  font-size: 12px;
  color: ${({ passwordchecked }) =>
    passwordchecked === 'true' ? '#29b9ff' : '#ff2735'};
  margin-bottom: 10px;
`;

const PartingLine = styled.hr`
  border: none;
  height: 1px;
  background-color: #eeeeee;
  margin: 30px 0;
`;

const AgreeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eeeeee;
`;

const AgreeTitle = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
`;

const AgreeContent = styled.div`
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 1.2;
  color: #8c8b8c;
`;

const SeeMore = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #29b8ff;
  text-decoration: underline;
`;

const AgreeCheckBox = styled.input`
  flex-shrink: 0;
  width: 25px;
  height: 25px;
  margin-left: 40px;
  margin-bottom: 15px;
`;

const AgreeConfirm = styled.div`
  margin: 30px 0;
  font-size: 14px;
  color: #222222;
  line-height: 1.2;
  span {
    color: #29b8ff;
    text-decoration: underline;
    font-weight: 600;
  }
`;

const AgreeBtn = styled.button<{ enable: string }>`
  width: 100%;
  height: 48px;
  margin-bottom: 30px;
  border: none;
  border-radius: 7px;
  background-color: ${({ enable }) =>
    enable === 'true' ? 'rgb(41, 184, 255)' : 'rgba(41, 184, 255, 0.3)'};
  color: #fefefe;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;

export default SignUp;

import React, { useState } from 'react';
import styled from 'styled-components';

interface UserTypeProps {
  userType: string;
}

function MemberType() {
  const [userType, setUserType] = useState<string>('general');

  return (
    <SelectTypeContainer>
      <SelectBox>
        <GeneralUser
          userType={userType}
          onClick={() => {
            setUserType('general');
          }}
        >
          <Title>일반 회원</Title>
          <SubTitle>(차량 이용 고객 전용)</SubTitle>
        </GeneralUser>
        <SupplyUser
          userType={userType}
          onClick={() => {
            setUserType('supply');
          }}
        >
          <Title>공급 회원</Title>
          <SubTitle>(차량 제공 고객 전용)</SubTitle>
        </SupplyUser>
      </SelectBox>
      <ContinueBtn>선택 완료</ContinueBtn>
    </SelectTypeContainer>
  );
}

const SelectTypeContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 25%;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
`;
const SelectBox = styled.div`
  display: flex;
  border: 1px solid #eeeeee;
`;

const GeneralUser = styled.div<UserTypeProps>`
  flex: 1;
  padding: 30px;
  background-color: ${({ userType }) =>
    userType === 'general' ? '#29b8ff' : '#ffffff'};
  color: ${({ userType }) => (userType === 'general' ? '#ffffff' : '#222222')};

  &:hover {
    cursor: pointer;
  }
`;

const SupplyUser = styled(GeneralUser)<UserTypeProps>`
  border-left: 1px solid #eeeeee;
  background-color: ${({ userType }) =>
    userType === 'supply' ? '#29b8ff' : '#ffffff'};
  color: ${({ userType }) => (userType === 'supply' ? '#ffffff' : '#222222')};
`;

const Title = styled.div`
  margin-bottom: 5px;
  font-size: 19px;
  font-weight: 600;
  text-align: center;
`;
const SubTitle = styled.div`
  font-size: 12px;
  text-align: center;
`;

const ContinueBtn = styled.div`
  margin-top: 30px;
  padding: 10px;
  border-radius: 5px;
  background-color: #29b8ff;
  color: #ffffff;
  font-size: 15px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export default MemberType;

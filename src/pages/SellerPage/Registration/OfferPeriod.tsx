import React, { useState } from 'react';
import styled from 'styled-components';
import { TitleBox } from './Registration';

const OfferPeriod: React.FC = () => {
  const [btnChange, setBtnChange] = useState(false);

  return (
    <OfferPeriodContainer>
      <TitleBox>
        공유 기간 <span>•</span>
      </TitleBox>
      <ContentBox>
        <SubTitle>기간 설정</SubTitle>
        <SettingContainer>
          <ButtonContainer>
            <Setting
              btnchange={btnChange.toString()}
              onClick={() => {
                setBtnChange(true);
              }}
            >
              설정함
            </Setting>
            <NotSetting
              btnchange={btnChange.toString()}
              onClick={() => {
                setBtnChange(false);
              }}
            >
              설정안함
            </NotSetting>
          </ButtonContainer>
        </SettingContainer>
      </ContentBox>
      {btnChange && (
        <InputContainer>
          <DateInput type="date" />
          <WaveText>~</WaveText>
          <DateInput type="date" />
        </InputContainer>
      )}
    </OfferPeriodContainer>
  );
};

const OfferPeriodContainer = styled.div``;

const ContentBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 40px 35px;
  border: 1px solid #dbdde2;
  background-color: #ffffff;
`;

const SubTitle = styled.div`
  margin-right: 170px;
`;

const SettingContainer = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;

const Setting = styled.div<{ btnchange: string }>`
  width: 115px;
  height: 34px;
  padding-top: 9px;
  border: 1px solid #dbdde2;
  background-color: ${({ btnchange }) =>
    btnchange === 'true' ? '#29b8ff' : '#ffffff'};
  color: ${({ btnchange }) => (btnchange === 'true' ? '#ffffff' : '#222222')};
  font-size: 14px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const NotSetting = styled(Setting)`
  border: none;
  border-top: 1px solid #dbdde2;
  border-bottom: 1px solid #dbdde2;
  border-right: 1px solid #dbdde2;
  background-color: ${({ btnchange }) =>
    btnchange === 'true' ? '#ffffff' : '#29b8ff'};
  color: ${({ btnchange }) => (btnchange === 'true' ? '#222222' : '#ffffff')};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 20px 265px;
  border: 1px solid #dbdde2;
  background-color: #ffffff;
`;

const DateInput = styled.input`
  width: 260px;
  height: 35px;
  padding-left: 10px;
  font-size: 15px;
`;

const WaveText = styled.div``;

export default OfferPeriod;

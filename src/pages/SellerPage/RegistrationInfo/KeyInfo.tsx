import React from 'react';
import styled from 'styled-components';

function KeyInfo() {
  return (
    <KeyInfoContainer>
      <Appearance>
        <DateKey>외형</DateKey>
        <DateValue>세단</DateValue>
      </Appearance>
      <ReleaseDate>
        <DateKey>차종</DateKey>
        <DateValue>중형</DateValue>
      </ReleaseDate>
      <Color>
        <DateKey>승차 정원</DateKey>
        <DateValue>4인승</DateValue>
      </Color>
      <SellingPrice>
        <DateKey>연류 유형</DateKey>
        <DateValue>하이브리드</DateValue>
      </SellingPrice>
    </KeyInfoContainer>
  );
}

const KeyInfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  padding: 20px 0;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
`;

const Appearance = styled.div`
  flex: 1;
`;

const ReleaseDate = styled(Appearance)`
  padding: 0 12px;
  border-left: 1px solid #ebebeb;
`;

const Color = styled(ReleaseDate)``;

const SellingPrice = styled(ReleaseDate)``;

const DateKey = styled.div`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const DateValue = styled.div`
  margin-top: 6px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.8);
`;
export default KeyInfo;

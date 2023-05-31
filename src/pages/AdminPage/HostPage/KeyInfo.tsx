import React from 'react';
import styled from 'styled-components';

interface KeyInfoProps {
  carData: any;
}

const KeyInfo: React.FC<KeyInfoProps> = ({ carData }) => {
  return (
    <KeyInfoContainer>
      <Appearance>
        <Key>외형</Key>
        <Value>{carData.carModel.carType.name}</Value>
      </Appearance>
      <ReleaseDate>
        <Key>차종</Key>
        <Value>{carData.carModel.engineSize.name}</Value>
      </ReleaseDate>
      <Color>
        <Key>승차 정원</Key>
        <Value>{carData.carModel.capacity + '인승'}</Value>
      </Color>
      <SellingPrice>
        <Key>연류 유형</Key>
        <Value>{carData.fuelType.name}</Value>
      </SellingPrice>
    </KeyInfoContainer>
  );
};

const KeyInfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Appearance = styled.div`
  flex: 1;
`;

const ReleaseDate = styled(Appearance)`
  padding: 0 12px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
`;

const Color = styled(ReleaseDate)``;

const SellingPrice = styled(ReleaseDate)``;

const Key = styled.div`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.5);
`;

const Value = styled.div`
  margin-top: 6px;
  font-size: 14px;
  color: rgba(34, 34, 34, 0.8);
`;
export default KeyInfo;

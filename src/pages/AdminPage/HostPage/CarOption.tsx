import React from 'react';
import styled from 'styled-components';
import { BsFillCheckSquareFill } from 'react-icons/bs';

interface CarOptionProps {
  carData: any;
}

const CarOption: React.FC<CarOptionProps> = ({ carData }) => {
  const { options } = carData;
  return (
    <CarOptionContainer>
      {options.map((data: any) => {
        return (
          <CarOptionList key={data.id}>
            <CheckIcon />
            <CarOptionText>{data.name}</CarOptionText>
          </CarOptionList>
        );
      })}
    </CarOptionContainer>
  );
};

const CarOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  height: 260px;
  margin-bottom: 40px;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  padding: 20px 0;
`;

const CarOptionList = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CheckIcon = styled(BsFillCheckSquareFill)`
  color: #29b9ff;
`;

const CarOptionText = styled.div`
  padding-top: 4px;
`;

export default CarOption;

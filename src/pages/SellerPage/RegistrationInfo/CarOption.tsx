import React from 'react';
import styled from 'styled-components';
import { BsFillCheckSquareFill } from 'react-icons/bs';

function CarOption() {
  return (
    <CarOptionContainer>
      {OPTION_DATA.map((data, i) => {
        return (
          <CarOptionList key={i}>
            <CheckIcon />
            <CarOptionText>{data}</CarOptionText>
          </CarOptionList>
        );
      })}
    </CarOptionContainer>
  );
}

const CarOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
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

const OPTION_DATA = [
  '매뉴얼 에어컨',
  '후방 모니터',
  '스마트 트렁크',
  '썬루프',
  '크루즈컨트롤',
  '열선시트',
  '하이빔 보조',
  '패들 쉬프트',
  '차로 이탈방지 보조',
];

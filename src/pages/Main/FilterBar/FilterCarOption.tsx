import React from 'react';
import styled from 'styled-components';

interface FilterCarOptionProps {
  carOption: string[];
  setCarOption: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterCarOption: React.FC<FilterCarOptionProps> = ({
  carOption,
  setCarOption,
}) => {
  function handleCarOption(event: any) {
    const { checked, value } = event.target;
    if (checked) {
      setCarOption([...carOption, value]);
    } else {
      const removeOption = carOption.filter(data => data !== value);
      setCarOption(removeOption);
    }
  }

  return (
    <FilterCarOptionContainer>
      <FilterCarOptionTitle>차량 옵션</FilterCarOptionTitle>
      <CarOptionListContainer>
        {CAR_OPTION.map((data, i) => {
          return (
            <CarOptionList key={i}>
              <CheckBoxInput
                name="carOption"
                type="checkbox"
                value={data}
                checked={carOption.includes(data)}
                onChange={handleCarOption}
              />
              <LabelTag>{data}</LabelTag>
            </CarOptionList>
          );
        })}
      </CarOptionListContainer>
    </FilterCarOptionContainer>
  );
};

const FilterCarOptionContainer = styled.div`
  padding: 40px;
`;

const FilterCarOptionTitle = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 600;
`;

const CarOptionListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 40px;
`;

const CarOptionList = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 10px;
`;

const CheckBoxInput = styled.input`
  width: 20px;
  height: 20px;
`;

const LabelTag = styled.label`
  padding-top: 1px;
`;
export default FilterCarOption;

const CAR_OPTION = [
  '매뉴얼 에어컨',
  '후방모니터',
  '스마트 트렁크',
  '스마트키 원격시동',
  '썬루프',
  '크루즈 컨트롤',
  '패들 쉬프트',
  '차로 이탈방지 보조',
  '차로 유지 보조',
  '하이빔 보조',
  '통합 주행 모드',
  '열선 시트',
  'LED 실내등',
  '전동식 파킹 브레이크',
  '2열 에어벤트',
  '오토라이트 컨트롤',
  '전자식 변속 칼럼',
  '세이프티 연락',
  '운전석 전동시트',
];

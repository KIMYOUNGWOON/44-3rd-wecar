import React, { useState } from 'react';
import styled from 'styled-components';

interface RegionSearchProps {
  regionValueChange: (region: string) => void;
}

const RegionSearch: React.FC<RegionSearchProps> = ({ regionValueChange }) => {
  const [currentId, setCurrentId] = useState(0);

  function handleClick(targetId: number): void {
    setCurrentId(targetId);
  }

  return (
    <RegionSearchContainer>
      <RegionSearchTitle>지역으로 검색</RegionSearchTitle>
      <RegionSearchSubTitle>원하는 지역에서 쉽고 빠르게</RegionSearchSubTitle>
      <RegionChoiceContainer>
        {REGION_DATA.map(data => {
          return (
            <RegionBox
              key={data.id}
              ischecked={(currentId === data.id).toString()}
              onClick={() => {
                handleClick(data.id);
                regionValueChange(data.region);
              }}
            >
              {data.region}
            </RegionBox>
          );
        })}
      </RegionChoiceContainer>
    </RegionSearchContainer>
  );
};

const RegionSearchContainer = styled.div`
  width: 500px;
  height: 500px;
  padding: 30px 30px;
`;

const RegionSearchTitle = styled.div`
  font-size: 18px;
  margin-bottom: 15px;
`;

const RegionSearchSubTitle = styled.div`
  font-size: 14px;
  margin-bottom: 40px;
  color: #29b9ff;
`;

const RegionChoiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 30px;
`;

const RegionBox = styled.div<{ ischecked: string }>`
  padding: 15px 15px;
  ${({ ischecked }) =>
    ischecked === 'true'
      ? 'border: 2px solid #29b9ff'
      : 'border: 1px solid #eeeeee'};
  border-radius: 10px;
  font-size: 14px;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export default RegionSearch;

const REGION_DATA = [
  { id: 1, region: '서울특별시' },
  { id: 2, region: '부산광역시' },
  { id: 3, region: '대구광역시' },
  { id: 4, region: '인천광역시' },
  { id: 5, region: '광주광역시' },
  { id: 6, region: '대전광역시' },
  { id: 7, region: '울산광역시' },
  { id: 8, region: '세종특별자치시' },
  { id: 9, region: '경기도' },
  { id: 10, region: '강원도' },
  { id: 11, region: '충청북도' },
  { id: 12, region: '충청남도' },
  { id: 13, region: '전라북도' },
  { id: 14, region: '전라남도' },
  { id: 15, region: '경상북도' },
  { id: 16, region: '경상남도' },
  { id: 17, region: '제주특별자치도' },
];

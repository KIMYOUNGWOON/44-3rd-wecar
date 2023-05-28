import React, { useState } from 'react';
import styled from 'styled-components';

interface RegionSearchProps {
  regionValueChange: (region: string) => void;
  searchRegion: (region: any) => void;
}

const RegionSearch: React.FC<RegionSearchProps> = ({
  regionValueChange,
  searchRegion,
}) => {
  const [currentId, setCurrentId] = useState(0);

  function handleClick(targetId: number): void {
    if (currentId === targetId) {
      setCurrentId(0);
    } else {
      setCurrentId(targetId);
    }
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
                searchRegion(data.region);
                if (currentId === data.id) {
                  regionValueChange('지역 검색');
                } else {
                  regionValueChange(data.region);
                }
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
  width: 445px;
  height: 420px;
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
  gap: 25px 25px;
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
  { id: 1, region: '서울' },
  { id: 2, region: '부산' },
  { id: 3, region: '대구' },
  { id: 4, region: '인천' },
  { id: 5, region: '광주' },
  { id: 6, region: '대전' },
  { id: 7, region: '울산' },
  { id: 8, region: '세종특별자치시' },
  { id: 9, region: '경기' },
  { id: 10, region: '강원' },
  { id: 11, region: '충북' },
  { id: 12, region: '충남' },
  { id: 13, region: '전북' },
  { id: 14, region: '전남' },
  { id: 15, region: '경북' },
  { id: 16, region: '경남' },
  { id: 17, region: '제주특별자치도' },
];

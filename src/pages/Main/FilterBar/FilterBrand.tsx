import React, { useState } from 'react';
import styled from 'styled-components';
import { CAR_BRAND } from './FilterBar';

function FilterBrand() {
  const [currentId, setCurrentId] = useState(0);

  function checkItOut(targetId: number) {
    if (currentId === targetId) {
      setCurrentId(0);
    } else {
      setCurrentId(targetId);
    }
  }

  return (
    <FilterBrandContainer>
      <FilterBrandTitle>브랜드</FilterBrandTitle>
      <BrandContainer>
        {CAR_BRAND.map(data => {
          return (
            <CarBrandList
              key={data.id}
              clicked={(currentId === data.id).toString()}
              onClick={() => {
                checkItOut(data.id);
              }}
            >
              <BrandImage logoimage={data.brandImg} />
              <BrandName>{data.brandName}</BrandName>
            </CarBrandList>
          );
        })}
      </BrandContainer>
    </FilterBrandContainer>
  );
}

const FilterBrandContainer = styled.div`
  padding: 40px;
  border-bottom: 1px solid #eeeeee;
`;

const FilterBrandTitle = styled.div`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
`;

const BrandContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px 10px;
`;

const CarBrandList = styled.div<{ clicked: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 10px 20px;
  ${({ clicked }) =>
    clicked === 'true'
      ? 'border: 3px solid #29b8ff'
      : 'border: 1px solid #eeeeee'};
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const BrandName = styled.div`
  font-size: 14px;
`;

const BrandImage = styled.div<{ logoimage: string }>`
  width: 80px;
  height: 60px;
  background-image: ${({ logoimage }) => `url(${logoimage})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export default FilterBrand;

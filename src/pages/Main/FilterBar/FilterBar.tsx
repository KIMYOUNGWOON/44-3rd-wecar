import React from 'react';
import styled from 'styled-components';
import bmwLogo from '../../../assets/brandLogoImg/BMW.png';
import benzLogo from '../../../assets/brandLogoImg/벤츠.png';
import audiLogo from '../../../assets/brandLogoImg/아우디.png';
import porscheLogo from '../../../assets/brandLogoImg/포르쉐.png';
import genesisLogo from '../../../assets/brandLogoImg/제네시스.png';
import hyundaiLogo from '../../../assets/brandLogoImg/현대.png';
import kiaLogo from '../../../assets/brandLogoImg/기아.png';
import volvoLogo from '../../../assets/brandLogoImg/볼보.png';
import chevroletLogo from '../../../assets/brandLogoImg/쉐보레.png';
import landRoverLogo from '../../../assets/brandLogoImg/랜드로버.png';
import volkswagenLogo from '../../../assets/brandLogoImg/폭스바겐.png';
import teslaLogo from '../../../assets/brandLogoImg/테슬라.png';
import { BsFilterSquareFill } from 'react-icons/bs';

interface FilterBarProps {
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterBar: React.FC<FilterBarProps> = ({ setFilterModal }) => {
  return (
    <FilterBarContainer>
      <BrandBoxContainer>
        {CAR_BRAND.map(data => {
          return (
            <BrandBox key={data.id}>
              <BrandLogo logoimg={data.brandImg} />
              <BrandName>{data.brandName}</BrandName>
            </BrandBox>
          );
        })}
      </BrandBoxContainer>
      <FilterButtonBox
        onClick={() => {
          setFilterModal(true);
          window.document.body.style.overflowY = 'hidden';
        }}
      >
        <FilterIcon />
        <FilterText>필터</FilterText>
      </FilterButtonBox>
    </FilterBarContainer>
  );
};

const FilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 50px 80px 25px;
  border-bottom: 1px solid #eeeeee;
`;

const BrandBoxContainer = styled.div`
  display: flex;
  gap: 15px;
`;

const BrandBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const BrandLogo = styled.div<{ logoimg: string }>`
  width: 90px;
  height: 70px;
  background-image: ${({ logoimg }) => `url(${logoimg})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const BrandName = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const FilterButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90px;
  height: 55px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const FilterIcon = styled(BsFilterSquareFill)`
  font-size: 23px;
  color: #29b9ff;
`;

const FilterText = styled.div`
  padding-top: 2px;
  font-size: 15px;
`;

export default FilterBar;

const CAR_BRAND = [
  { id: 1, brandName: 'BMW', brandImg: bmwLogo },
  { id: 2, brandName: '아우디', brandImg: audiLogo },
  { id: 3, brandName: '벤츠', brandImg: benzLogo },
  { id: 4, brandName: '포르쉐', brandImg: porscheLogo },
  { id: 5, brandName: '제네시스', brandImg: genesisLogo },
  { id: 6, brandName: '현대', brandImg: hyundaiLogo },
  { id: 7, brandName: '기아', brandImg: kiaLogo },
  { id: 8, brandName: '볼보', brandImg: volvoLogo },
  { id: 9, brandName: '쉐보레', brandImg: chevroletLogo },
  { id: 10, brandName: '랜드로버', brandImg: landRoverLogo },
  { id: 11, brandName: '폭스바겐', brandImg: volkswagenLogo },
  { id: 12, brandName: '테슬라', brandImg: teslaLogo },
];

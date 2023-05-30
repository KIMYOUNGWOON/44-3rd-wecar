import React from 'react';
import styled from 'styled-components';
import { BsFilterSquareFill } from 'react-icons/bs';
import { TiThSmall } from 'react-icons/ti';
import { useSearchParams } from 'react-router-dom';

interface FilterBarProps {
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterBar: React.FC<FilterBarProps> = ({ setFilterModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function brandFiltering(brand: string) {
    searchParams.set('brand', brand);
    setSearchParams(searchParams);
  }

  return (
    <FilterBarContainer>
      <BrandBoxContainer>
        {CAR_BRAND.map(data => {
          return (
            <BrandBox
              key={data.id}
              onClick={() => {
                brandFiltering(data.brandName);
              }}
            >
              <BrandLogo logoimg={data.brandImg} />
              <BrandName>{data.brandName}</BrandName>
            </BrandBox>
          );
        })}
      </BrandBoxContainer>
      <ViewAllButtonBox
        onClick={() => {
          setSearchParams('');
        }}
      >
        <ViewAllIcon />
        <ViewAllText>모두 보기</ViewAllText>
      </ViewAllButtonBox>
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
  padding: 20px 80px 25px;
  border-bottom: 1px solid #eeeeee;
  background-color: #ffffff;
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
  width: 80px;
  height: 60px;
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

const ViewAllButtonBox = styled(FilterButtonBox)`
  width: 110px;
  margin-left: 390px;
`;

const ViewAllIcon = styled(TiThSmall)`
  font-size: 23px;
  color: #29b9ff;
`;

const ViewAllText = styled.div`
  padding-top: 2px;
  font-size: 15px;
`;

export default FilterBar;

export const CAR_BRAND = [
  {
    id: 1,
    brandName: 'BMW',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181427-415efcf3-59b9-4fea-8701-3e679588a5ab.png',
  },

  {
    id: 2,
    brandName: '아우디',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181409-b07acbf4-f264-432c-aee4-fd75d8fb06ef.png',
  },

  {
    id: 3,
    brandName: '벤츠',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181397-470e56fb-fcaf-4bd1-b808-dccdc4b8bf99.png',
  },

  {
    id: 4,
    brandName: '포르쉐',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181417-164158cc-1301-4224-859c-a5d77aacbbd1.png',
  },

  {
    id: 5,
    brandName: '제네시스',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181413-f627207b-5c48-4b10-98cb-db7bc9e0df63.png',
  },

  {
    id: 6,
    brandName: '현대',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181423-b2c02d1d-9dfa-4346-8c0c-8b038d272281.png',
  },

  {
    id: 7,
    brandName: '기아',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181389-980e6563-f21d-4188-b62d-bd5be503f4b8.png',
  },

  {
    id: 8,
    brandName: '볼보',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181403-31346a22-3249-49f1-befd-abfd5234cb94.png',
  },

  {
    id: 9,
    brandName: '쉐보레',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181406-963224b3-8afa-4cc6-a138-7d942003aac6.png',
  },

  {
    id: 10,
    brandName: '랜드로버',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181396-0bae53b1-ff90-4e49-877b-7c89e65f1498.png',
  },

  {
    id: 11,
    brandName: '폭스바겐',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181419-4ec5a15b-8f60-4f57-a73a-6faba958fb64.png',
  },

  {
    id: 12,
    brandName: '테슬라',
    brandImg:
      'https://user-images.githubusercontent.com/126956430/239181414-333b0c12-7fda-4c42-9c96-806a0785389d.png',
  },
];

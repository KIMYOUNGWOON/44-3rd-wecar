import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import FilterBrand from './FilterBrand';
import FilterCarOption from './FilterCarOption';
import FilterCarType from './FilterCarType';
import FilterKeyInfo from './FilterKeyinfo';
import PriceGraph from './PriceGraph';
import PriceSlider from './PriceSlider';

interface FilterModalProps {
  filterModal: boolean;
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CAR_TYPE = [
  { id: 1, carType: '경차' },
  { id: 2, carType: '승용차' },
  { id: 3, carType: 'SUV' },
  { id: 4, carType: '승합차' },
];

const FilterModal: React.FC<FilterModalProps> = ({
  filterModal,
  setFilterModal,
}) => {
  const [carType, setCarType] = useState('');
  const [minValue, setMinValue] = useState(20000);
  const [maxValue, setMaxValue] = useState(300000);
  const [brandValue, setBrandValue] = useState('');
  const [engineSize, setEngineSize] = useState('');
  const [capacity, setCapacity] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [carOption, setCarOption] = useState<string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFiltering() {
    if (carType !== '') {
      searchParams.set('carType', carType);
    } else {
      searchParams.delete('carType');
    }

    if (minValue !== 20000) {
      searchParams.set('minPrice', minValue.toString());
    } else {
      searchParams.delete('minPrice');
    }

    if (maxValue !== 300000) {
      searchParams.set('maxPrice', maxValue.toString());
    } else {
      searchParams.delete('maxPrice');
    }

    if (brandValue !== '') {
      searchParams.set('brand', brandValue);
    } else {
      searchParams.delete('brand');
    }

    if (engineSize !== '') {
      searchParams.set('engineSize', engineSize);
    } else {
      searchParams.delete('engineSize');
    }

    if (capacity !== '') {
      searchParams.set('capacity', capacity);
    } else {
      searchParams.delete('capacity');
    }

    if (fuelType !== '') {
      searchParams.set('fuelType', fuelType);
    } else {
      searchParams.delete('fuelType');
    }

    if (carOption.length !== 0) {
      searchParams.delete('options');
      carOption.forEach(option => {
        searchParams.append('options', option);
      });
    } else {
      searchParams.delete('options');
    }

    setSearchParams(searchParams);
  }

  function fullReset() {
    setCarType('');
    setMinValue(20000);
    setMaxValue(300000);
    setBrandValue('');
    setEngineSize('');
    setCapacity('');
    setFuelType('');
    setCarOption([]);
  }

  return (
    <FilterModalContainer filtermodal={filterModal.toString()}>
      <FilterModalHeader>
        <ModalCloseBtn
          onClick={() => {
            setFilterModal(false);
            window.document.body.style.overflowY = 'scroll';
          }}
        >
          ✕
        </ModalCloseBtn>
        <FilterTitle>필터</FilterTitle>
      </FilterModalHeader>
      <FilterCarType carType={carType} setCarType={setCarType} />
      <PriceGraph />
      <PriceSlider
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
      />
      <FilterBrand brandValue={brandValue} setBrandValue={setBrandValue} />
      <FilterKeyInfo
        engineSize={engineSize}
        setEngineSize={setEngineSize}
        capacity={capacity}
        setCapacity={setCapacity}
        fuelType={fuelType}
        setFuelType={setFuelType}
      />
      <FilterCarOption carOption={carOption} setCarOption={setCarOption} />
      <FilterModalFooter>
        <FullReset onClick={fullReset}>전체 해제</FullReset>
        <FilterButton
          onClick={() => {
            handleFiltering();
            setFilterModal(false);
            window.document.body.style.overflowY = 'scroll';
          }}
        >
          차량 보기 {'>'}
        </FilterButton>
      </FilterModalFooter>
    </FilterModalContainer>
  );
};

const FilterModalContainer = styled.div<{ filtermodal: string }>`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: ${({ filtermodal }) =>
    filtermodal === 'true' ? 'translate(-50%, 0%)' : 'translate(-50%, -110%)'};
  transition: transform 0.5s;
  width: 780px;
  height: 900px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 3px 0 15px 0 rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const FilterModalHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;
  z-index: 1;
`;
const ModalCloseBtn = styled.div`
  position: absolute;
  left: 35px;
  &:hover {
    cursor: pointer;
  }
`;

const FilterTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
`;

const FilterModalFooter = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 25px 40px;
  border-top: 1px solid #eeeeee;
  background-color: #ffffff;
`;

const FullReset = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: #29b8ff;
  font-size: 15px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const FilterButton = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: #29b8ff;
  font-size: 15px;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;
export default FilterModal;

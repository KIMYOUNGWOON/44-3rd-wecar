import React, { useState } from 'react';
import styled from 'styled-components';
import ClickSearch from './ClickSearch';
import SearchModal from './SearchModal';
import StaticSearch from './StaticSearch';
import moment from 'moment';
import carImg from '../../../assets/mainImg/carImage.png';

interface SearchBarProps {
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
  searchModal: boolean;
  setSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
  tokenChecked: null | string;
  searchParams: URLSearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
  handleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchMode,
  setSearchMode,
  searchModal,
  setSearchModal,
  tokenChecked,
  searchParams,
  setSearchParams,
  handleSearch,
}) => {
  const [modalChange, setModalChange] = useState('region');
  const [regionValue, setRegionValue] = useState('지역 검색');
  const [passengerValue, setPassengerValue] = useState('인승 선택');
  const [startDateValue, setStartDateValue] = useState<Date | string>(
    '날짜 추가'
  );
  const [endDateValue, setEndDateValue] = useState<Date | string>('날짜 추가');
  const formattedStartDate =
    startDateValue !== '날짜 추가'
      ? moment(startDateValue).format('YY년 MM월 DD일')
      : '날짜 추가';
  const formattedEndDate =
    endDateValue !== '날짜 추가'
      ? moment(endDateValue).format('YY년 MM월 DD일')
      : '날짜 추가';

  const handleSearchMode = () => {
    setSearchMode(prevMode => !prevMode);
  };

  const handleSearchModal = (targetId: number) => {
    if (targetId === 1) {
      setModalChange('region');
      setSearchModal(true);
    } else if (targetId === 2 || targetId === 3) {
      setModalChange('date');
      setSearchModal(true);
    } else {
      setModalChange('passenger');
      setSearchModal(true);
    }
  };

  function regionValueChange(region: string) {
    setRegionValue(region);
  }

  function passengerValueChange(passenger: string) {
    setPassengerValue(passenger);
  }

  const handleStartDateChange = (date: any) => {
    setStartDateValue(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDateValue(date);
  };

  const searchRegion = (region: any) => {
    searchParams.append('address', region);
    setSearchParams(searchParams);
  };

  return (
    <SearchContainer tokenchecked={tokenChecked}>
      {searchModal && (
        <SearchModal
          modalChange={modalChange}
          regionValueChange={regionValueChange}
          passengerValueChange={passengerValueChange}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          startDateValue={startDateValue}
          endDateValue={endDateValue}
          searchRegion={searchRegion}
        />
      )}
      {searchMode && (
        <SearchBarTitle>
          어디든지 언제든 함께 <span>위카</span>하세요
          <CarImage src={carImg} alt="자동차 이미지" />
        </SearchBarTitle>
      )}
      <SearchBarContainer searchmode={searchMode.toString()}>
        {!searchMode && <StaticSearch handleSearchMode={handleSearchMode} />}
        {searchMode && (
          <ClickSearch
            handleSearchModal={handleSearchModal}
            regionValue={regionValue}
            passengerValue={passengerValue}
            formattedStartDate={formattedStartDate}
            formattedEndDate={formattedEndDate}
            handleSearch={handleSearch}
          />
        )}
      </SearchBarContainer>
    </SearchContainer>
  );
};
const SearchContainer = styled.div<{ tokenchecked: null | string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${({ tokenchecked }) => (tokenchecked ? 75 : 0)}px;
`;

const SearchBarContainer = styled.div<{ searchmode: string }>`
  width: ${({ searchmode }) => (searchmode === 'true' ? 800 : 340)}px;
  height: ${({ searchmode }) => (searchmode === 'true' ? 70 : 48)}px;
  transform: ${({ searchmode }) =>
    searchmode === 'true' ? 'translateY(150%)' : 'translateY(0%)'};
  transition: all 0.4s, transform 0.4s;
  border: 1px solid #eeeeee;
  border-radius: 40px;
  background-color: #ffffff;
`;

const SearchBarTitle = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  top: 60px;
  font-size: 28px;
  span {
    color: #29b9ff;
    font-weight: 700;
    font-size: 28px;
  }
`;

const CarImage = styled.img`
  width: 90px;
`;

export default SearchBar;

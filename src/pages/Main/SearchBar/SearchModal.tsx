import React from 'react';
import styled from 'styled-components';
import DateSearch from './DateSearch';
import PassengerSearch from './PassengerSearch';
import RegionSearch from './RegionSearch';

interface SearchModalProps {
  modalChange: string;
  regionValueChange: (region: string) => void;
  handleStartDateChange: (date: any) => void;
  handleEndDateChange: (date: any) => void;
  regionValue: string;
  startDateValue: Date | string;
  setStartDateValue: React.Dispatch<React.SetStateAction<string | Date>>;
  endDateValue: Date | string;
  setEndDateValue: React.Dispatch<React.SetStateAction<string | Date>>;
  passengerValue: number;
  setPassengerValue: React.Dispatch<React.SetStateAction<number>>;
}

const SearchModal: React.FC<SearchModalProps> = ({
  modalChange,
  regionValueChange,
  handleStartDateChange,
  handleEndDateChange,
  regionValue,
  startDateValue,
  setStartDateValue,
  endDateValue,
  setEndDateValue,
  passengerValue,
  setPassengerValue,
}) => {
  return (
    <SearchModalContainer modalchange={modalChange}>
      {modalChange === 'region' && (
        <RegionSearch
          regionValue={regionValue}
          regionValueChange={regionValueChange}
        />
      )}
      {modalChange === 'date' && (
        <DateSearch
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          startDateValue={startDateValue}
          setStartDateValue={setStartDateValue}
          endDateValue={endDateValue}
          setEndDateValue={setEndDateValue}
        />
      )}
      {modalChange === 'passenger' && (
        <PassengerSearch
          passengerValue={passengerValue}
          setPassengerValue={setPassengerValue}
        />
      )}
    </SearchModalContainer>
  );
};

const SearchModalContainer = styled.div<{ modalchange: string }>`
  position: absolute;
  top: 218px;
  left: ${({ modalchange }) => (modalchange === 'passenger' ? 53 : 27)}%;
  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;
`;
export default SearchModal;

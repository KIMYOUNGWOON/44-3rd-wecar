import React from 'react';
import styled from 'styled-components';
import DateSearch from './DateSearch';
import PassengerSearch from './PassengerSearch';
import RegionSearch from './RegionSearch';

interface SearchModalProps {
  modalChange: string;
  regionValueChange: (region: string) => void;
  passengerValueChange: (passenger: string) => void;
  handleStartDateChange: (date: any) => void;
  handleEndDateChange: (date: any) => void;
  startDateValue: Date | string;
  endDateValue: Date | string;
}

const SearchModal: React.FC<SearchModalProps> = ({
  modalChange,
  regionValueChange,
  passengerValueChange,
  handleStartDateChange,
  handleEndDateChange,
  startDateValue,
  endDateValue,
}) => {
  return (
    <SearchModalContainer modalchange={modalChange}>
      {modalChange === 'region' && (
        <RegionSearch regionValueChange={regionValueChange} />
      )}
      {modalChange === 'date' && (
        <DateSearch
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
          startDateValue={startDateValue}
          endDateValue={endDateValue}
        />
      )}
      {modalChange === 'passenger' && (
        <PassengerSearch passengerValueChange={passengerValueChange} />
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

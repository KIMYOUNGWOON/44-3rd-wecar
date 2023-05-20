import React from 'react';
import styled from 'styled-components';
import { IoSearchCircle } from 'react-icons/io5';

interface StaticSearchProps {
  handleSearchMode: () => void;
}

const StaticSearch: React.FC<StaticSearchProps> = ({ handleSearchMode }) => {
  return (
    <StaticSearchContainer>
      <SearchText
        onClick={() => {
          handleSearchMode();
        }}
      >
        어디든지
      </SearchText>
      <SearchText
        onClick={() => {
          handleSearchMode();
        }}
      >
        언제든
      </SearchText>
      <PeopleNumber
        onClick={() => {
          handleSearchMode();
        }}
      >
        승차인원
      </PeopleNumber>
      <SearchIcon onClick={handleSearchMode} />
    </StaticSearchContainer>
  );
};

const StaticSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
`;

const SearchText = styled.div`
  font-size: 15px;
  padding-top: 3px;
  padding-right: 24px;
  border-right: 1px solid #eeeeee;
  &:hover {
    cursor: pointer;
  }
`;

const PeopleNumber = styled.div`
  padding-top: 3px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
`;

const SearchIcon = styled(IoSearchCircle)`
  font-size: 45px;
  color: #29b9ff;
  &:hover {
    cursor: pointer;
  }
`;

export default StaticSearch;

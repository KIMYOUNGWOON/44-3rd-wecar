import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

interface ClickSearchProps {
  handleSearchModal: (targeId: number) => void;
  regionValue: string;
  passengerValue: string;
  formattedStartDate: string;
  formattedEndDate: string;
}
const ClickSearch: React.FC<ClickSearchProps> = ({
  handleSearchModal,
  regionValue,
  passengerValue,
  formattedStartDate,
  formattedEndDate,
}) => {
  const CLICK_SEARCH = [
    { id: 1, title: '지역', subTitle: regionValue },
    {
      id: 2,
      title: '탑승일',
      subTitle: formattedStartDate,
    },
    {
      id: 3,
      title: '반납일',
      subTitle: formattedEndDate,
    },
    { id: 4, title: '승차정원', subTitle: passengerValue },
  ];

  return (
    <ClickSearchContainer>
      {CLICK_SEARCH.map(data => {
        return (
          <SearchBox
            key={data.id}
            targetid={data.id}
            onClick={() => {
              handleSearchModal(data.id);
            }}
          >
            <Title>{data.title}</Title>
            <SubTitle>{data.subTitle}</SubTitle>
          </SearchBox>
        );
      })}
      <SearchButtonBox>
        <SearchIcon />
        <ButtonText>검색</ButtonText>
      </SearchButtonBox>
    </ClickSearchContainer>
  );
};

const ClickSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px 10px 0px 40px;
`;

const SearchBox = styled.div<{ targetid: number }>`
  display: flex;
  flex-direction: column;
  gap: 7px;
  flex: ${({ targetid }) => (targetid === 1 ? 2 : 1)};
  ${({ targetid }) =>
    targetid === 4 ? null : '  border-right: 1px solid #eeeeee;'}

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
`;

const SearchButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 90px;
  height: 48px;
  border-radius: 30px;
  background-color: #29b9ff;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const SearchIcon = styled(IoSearch)`
  font-size: 25px;
`;

const ButtonText = styled.div`
  padding-top: 3px;
  font-size: 18px;
`;

export default ClickSearch;

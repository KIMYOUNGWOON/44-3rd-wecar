import React from 'react';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import logoImg from '../../assets/mainImg/logoImg.png';

interface NavProps {
  setMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModeChange: React.Dispatch<React.SetStateAction<string>>;
}

const Nav: React.FC<NavProps> = ({
  setMenuModal,
  setUserModal,
  setModeChange,
}) => {
  return (
    <NavContainer>
      <Logo src={logoImg} alt="로고이미지" />
      <SearchContainer />
      <UserContainer>
        <CarSharing>당신의 차를 위카하세요</CarSharing>
        <UserMenu>
          <Profile
            onClick={() => {
              setMenuModal(prev => !prev);
            }}
          />
        </UserMenu>
      </UserContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 80px;
  border-bottom: 1px solid #eeeeee;
`;

const Logo = styled.img`
  width: 150px;
`;

const SearchContainer = styled.div``;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const CarSharing = styled.div`
  padding: 15px 20px;
  border-radius: 22px;
  background-color: #f7f7f7;
  font-size: 15px;
`;

const UserMenu = styled.div``;

const Profile = styled(CgProfile)`
  font-size: 35px;
  color: #00b9ff;

  &:hover {
    cursor: pointer;
  }
`;

export default Nav;

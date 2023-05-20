import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import logoImg from '../../assets/mainImg/logoImg.png';
import SearchBar from './SearchBar/SearchBar';

interface NavProps {
  loginMode: boolean;
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
  searchModal: boolean;
  setSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> = ({
  setMenuModal,
  loginMode,
  searchMode,
  setSearchMode,
  searchModal,
  setSearchModal,
}) => {
  const navigate = useNavigate();
  // const accessToken = localStorage.getItem('accessToken');

  // useEffect(() => {
  //   if (accessToken) {
  //     axios
  //       .get('', { headers: { Authorization: accessToken } })
  //       .then(reponse => console.log(reponse));
  //   }
  // });

  return (
    <NavContainer searchmode={searchMode.toString()}>
      <Logo
        src={logoImg}
        alt="로고이미지"
        onClick={() => {
          navigate('/');
        }}
      />
      <SearchBar
        searchMode={searchMode}
        setSearchMode={setSearchMode}
        searchModal={searchModal}
        setSearchModal={setSearchModal}
      />
      <UserContainer>
        <CarSharing
          onClick={() => {
            navigate('/seller');
          }}
        >
          당신의 차를 위카하세요
        </CarSharing>
        <UserMenu>
          {loginMode && <UserName>김영운 님</UserName>}
          <Profile
            onClick={() => {
              setMenuModal(prev => !prev);
              window.document.body.style.overflowY = 'hidden';
            }}
          />
        </UserMenu>
      </UserContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div<{ searchmode: string }>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: ${({ searchmode }) => (searchmode === 'true' ? 230 : 110)}px;
  transition: height 0.4s;
  padding: 30px 80px;
  border-bottom: 1px solid #eeeeee;
`;

const Logo = styled.img`
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

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

  &:hover {
    cursor: pointer;
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserName = styled.div`
  font-size: 18px;
`;

const Profile = styled(CgProfile)`
  font-size: 35px;
  color: #00b9ff;

  &:hover {
    cursor: pointer;
  }
`;

export default Nav;

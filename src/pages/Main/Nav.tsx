import React from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { HOST_ADDRESS } from '../../HostAddress';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import logoImg from '../../assets/mainImg/logoImg.png';
import SearchBar from './SearchBar/SearchBar';

interface NavProps {
  searchMode: boolean;
  setSearchMode: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
  searchModal: boolean;
  setSearchModal: React.Dispatch<React.SetStateAction<boolean>>;
  tokenChecked: null | string;
}

const Nav: React.FC<NavProps> = ({
  setMenuModal,
  searchMode,
  setSearchMode,
  searchModal,
  setSearchModal,
  tokenChecked,
}) => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName');

  return (
    <NavContainer searchmode={searchMode.toString()}>
      <Logo
        src={logoImg}
        alt="로고이미지"
        onClick={() => {
          navigate('/');
          window.scrollTo(0, 0);
        }}
      />
      <SearchBar
        searchMode={searchMode}
        setSearchMode={setSearchMode}
        searchModal={searchModal}
        setSearchModal={setSearchModal}
        tokenChecked={tokenChecked}
      />
      <UserContainer>
        <CarSharing
          onClick={() => {
            if (tokenChecked) {
              axios
                .get(`${HOST_ADDRESS}/auth/check/host`)
                .then(response => {
                  navigate('/seller');
                })
                .catch(error => {
                  console.log(error);
                  alert('공급회원 전용 페이지입니다.');
                });
            } else {
              alert('공급회원 전용 페이지입니다.');
            }
          }}
        >
          당신의 차를 위카하세요
        </CarSharing>
        <UserMenu>
          {tokenChecked && <UserName>{userName} 님</UserName>}
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
  background-color: #ffffff;
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

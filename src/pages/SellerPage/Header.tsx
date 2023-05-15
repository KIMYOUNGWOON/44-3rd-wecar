import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import logoImg from '../../assets/mainImg/logoImg.png';

interface HeaderProps {
  pageMode: string;
  setPageMode: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ pageMode, setPageMode }) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Logo
        src={logoImg}
        alt="로고이미지"
        onClick={() => {
          navigate('/');
        }}
      />
      <Register
        onClick={() => {
          setPageMode('registration');
        }}
      >
        차량 등록
      </Register>
      <BreakDown
        onClick={() => {
          setPageMode('breakdown');
        }}
      >
        예약 내역
      </BreakDown>
      <UnderLine pageMode={pageMode} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 80px;
  border-bottom: 1px solid #eeeeee;
`;

const Logo = styled.img`
  width: 150px;
  margin-right: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const Register = styled.div`
  flex-basis: 100px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

const BreakDown = styled(Register)`
  border-left: 1px solid #222222;
`;

const UnderLine = styled.div<{ pageMode: string }>`
  position: absolute;
  width: 70px;
  border: 2px solid #29b9ff;
  top: 60px;
  left: ${({ pageMode }) => (pageMode === 'registration' ? 295 : 396)}px;
`;

export default Header;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterBar from './FilterBar/FilterBar';
import FilterModal from './FilterBar/FilterModal';
import Footer from './Footer';
import Login from './Login';
import LoginSuccess from './LoginSuccess';
import MenuModal from './MenuModal';
import Nav from './Nav';
import ProductList from './ProductList';
import SignUp from './SignUp';

const Main: React.FC = () => {
  const [menuModal, setMenuModal] = useState<boolean>(false);
  const [userModal, setUserModal] = useState<boolean>(false);
  const [successModal, setSuccessModal] = useState<boolean>(false);
  const [modeChange, setModeChange] = useState<string>('');
  const [searchMode, setSearchMode] = useState(false);
  const [searchModal, setSearchModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const tokenChecked =
    localStorage.getItem('accessToken') || localStorage.getItem('refreshToken');

  useEffect(() => {
    const handleScroll = () => {
      setSearchMode(false);
      setSearchModal(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MainContainer>
      <Nav
        setMenuModal={setMenuModal}
        searchMode={searchMode}
        setSearchMode={setSearchMode}
        searchModal={searchModal}
        setSearchModal={setSearchModal}
        tokenChecked={tokenChecked}
      />
      {menuModal && (
        <MenuBlackModal
          onClick={() => {
            setMenuModal(false);
            window.document.body.style.overflowY = 'scroll';
          }}
        />
      )}
      {userModal && (
        <UserBlackModal
          onClick={() => {
            setUserModal(false);
            window.document.body.style.overflowY = 'scroll';
          }}
        />
      )}
      {menuModal && (
        <MenuModal
          setMenuModal={setMenuModal}
          setUserModal={setUserModal}
          setModeChange={setModeChange}
          tokenChecked={tokenChecked}
        />
      )}
      {userModal &&
        (modeChange === 'signIn' ? (
          <Login
            setUserModal={setUserModal}
            setSuccessModal={setSuccessModal}
          />
        ) : (
          <SignUp setUserModal={setUserModal} />
        ))}
      {successModal && <LoginSuccess setSuccessModal={setSuccessModal} />}
      {searchMode && (
        <SearchBlackModal
          onClick={() => {
            setSearchMode(prev => !prev);
            setSearchModal(false);
          }}
        />
      )}
      {filterModal && (
        <FilterBlackModal
          onClick={() => {
            setFilterModal(false);
            window.document.body.style.overflowY = 'scroll';
          }}
        />
      )}
      <FilterModal filterModal={filterModal} setFilterModal={setFilterModal} />
      <FilterBar setFilterModal={setFilterModal} />
      <ProductList />
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
`;

const MenuBlackModal = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const SearchBlackModal = styled(MenuBlackModal)`
  position: absolute;
  inset: 0;
  transform: translateY(230px);
  background-color: rgba(0, 0, 0, 0.2);
`;

const UserBlackModal = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const FilterBlackModal = styled(MenuBlackModal)`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default Main;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HOST_ADDRESS } from '../../HostAddress';
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
  const [carList, setCarList] = useState<any>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryString = searchParams.toString();

  useEffect(() => {
    const handleScroll = () => {
      setSearchMode(false);
      setSearchModal(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [searchParams]);

  useEffect(() => {
    axios
      .get(`${HOST_ADDRESS}/cars?${queryString}`)
      .then(response => {
        setCarList(response.data.hostCars);
        setTotalAmount(response.data.totalCount);
      })
      .catch(error => console.error(error));
  }, [queryString]);

  const buttonCountArr = [];
  const buttonCount = Math.floor(totalAmount / 12);
  for (let i = 0; i < buttonCount + 1; i++) {
    buttonCountArr.push(i + 1);
  }

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
      <ProductList carList={carList} />
      {carList.length !== 0 && (
        <PagebuttonContainer>
          {buttonCountArr.map(button => {
            return <Pagebutton key={button}>{button}</Pagebutton>;
          })}
        </PagebuttonContainer>
      )}
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
  z-index: 1;
`;

const SearchBlackModal = styled(MenuBlackModal)`
  position: absolute;
  inset: 0;
  transform: translateY(230px);
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const UserBlackModal = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const FilterBlackModal = styled(MenuBlackModal)`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const PagebuttonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Pagebutton = styled.div`
  width: 25px;
  height: 25px;
  padding-top: 6px;
  border-radius: 4px;
  background-color: #29b9ff;
  font-size: 15px;
  color: #ffffff;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export default Main;

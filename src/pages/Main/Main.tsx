import React, { useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import MenuModal from './MenuModal';
import Nav from './Nav';
import SignUp from './SignUp';

function Main() {
  const [menuModal, setMenuModal] = useState<boolean>(false);
  const [userModal, setUserModal] = useState<boolean>(false);
  const [modeChange, setModeChange] = useState<string>('signin');

  return (
    <MainContainer>
      <Nav
        setMenuModal={setMenuModal}
        setUserModal={setUserModal}
        setModeChange={setModeChange}
      />
      {menuModal && (
        <MenuModal
          setMenuModal={setMenuModal}
          setUserModal={setUserModal}
          setModeChange={setModeChange}
        />
      )}
      {menuModal && (
        <MenuBlackModal
          onClick={() => {
            setMenuModal(prev => !prev);
          }}
        />
      )}
      {userModal &&
        (modeChange === 'signin' ? (
          <Login setUserModal={setUserModal} />
        ) : (
          <SignUp setUserModal={setUserModal} />
        ))}
      {userModal && (
        <UserBlackModal
          onClick={() => {
            setUserModal(false);
          }}
        />
      )}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const MenuBlackModal = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const UserBlackModal = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;
export default Main;

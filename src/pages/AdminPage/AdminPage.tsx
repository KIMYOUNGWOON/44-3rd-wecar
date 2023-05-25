import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Registration from './Registration/Registration';
import RegistrationInfo from './HostPage/HostPage';

function AdminPage() {
  const [pageMode, setPageMode] = useState('registration');

  return (
    <SellerPageContainer>
      <Header pagemode={pageMode} setPageMode={setPageMode} />
      {pageMode === 'registration' && (
        <Registration setPageMode={setPageMode} />
      )}
      {pageMode === 'breakdown' && <RegistrationInfo />}
    </SellerPageContainer>
  );
}

const SellerPageContainer = styled.div``;

export default AdminPage;

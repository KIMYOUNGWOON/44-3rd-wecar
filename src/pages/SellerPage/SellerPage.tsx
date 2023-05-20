import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Registration from './Registration/Registration';
import RegistrationInfo from './RegistrationInfo/RegistrationInfo';

function SellerPage() {
  const [pageMode, setPageMode] = useState('registration');

  return (
    <SellerPageContainer>
      <Header pagemode={pageMode} setPageMode={setPageMode} />
      {pageMode === 'registration' && <Registration />}
      {pageMode === 'breakdown' && <RegistrationInfo />}
    </SellerPageContainer>
  );
}

const SellerPageContainer = styled.div``;

export default SellerPage;

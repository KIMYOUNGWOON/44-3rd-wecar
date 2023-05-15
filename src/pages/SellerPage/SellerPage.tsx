import React, { useState } from 'react';
import styled from 'styled-components';
import BookingHistory from './BookingHistory/BookingHistory';
import Header from './Header';
import Registration from './Registration/Registration';

function SellerPage() {
  const [pageMode, setPageMode] = useState('registration');

  return (
    <SellerPageContainer>
      <Header pageMode={pageMode} setPageMode={setPageMode} />
      {pageMode === 'registration' && <Registration />}
      {pageMode === 'breakdown' && <BookingHistory />}
    </SellerPageContainer>
  );
}

const SellerPageContainer = styled.div``;

export default SellerPage;

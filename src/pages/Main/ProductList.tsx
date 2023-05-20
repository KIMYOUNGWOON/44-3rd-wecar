import React from 'react';
import styled from 'styled-components';

function ProductList() {
  return (
    <ProductListContainer>
      {PRODUCT_LIST.map(data => {
        return (
          <ProductContainer key={data}>
            <ProductImg />
            <ProductInfo />
          </ProductContainer>
        );
      })}
    </ProductListContainer>
  );
}

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px 40px;
  width: 100%;
  padding: 50px 80px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 360px;
  border: 1px solid #222222;
  border-radius: 10px;
`;

const ProductImg = styled.div`
  width: 90%;
  margin-top: 12px;
  height: 240px;
  border: 1px solid #222222;
  border-radius: 10px;
`;

const ProductInfo = styled.div``;

export default ProductList;

const PRODUCT_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

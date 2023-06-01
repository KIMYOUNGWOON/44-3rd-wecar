import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import loadingGif from '../../assets/mainImg/loading.gif';

interface ProductListProps {
  carList: any;
  isLoading: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ carList, isLoading }) => {
  const navigate = useNavigate();

  function dateChange(date: Date) {
    const dateObj = moment(date).utcOffset('');
    const koreanDate = dateObj.format('YY년 MM월 DD일');
    return koreanDate;
  }

  return (
    <ProductListContainer>
      {carList.length === 0 &&
        (isLoading ? (
          <LoadingBox src={loadingGif} />
        ) : (
          <CarListEmpty>해당 조건에 맞는 차량이 없습니다.</CarListEmpty>
        ))}
      {carList.map((data: any) => {
        return (
          <ProductContainer key={data.id}>
            <ProductImg
              carimage={data.files[0].url}
              onClick={() => {
                navigate(`/detail/${data.id}`);
                window.scrollTo(0, 0);
              }}
            />
            <ProductInfo>
              <CarBrandName>{data.carModel.brand.name}</CarBrandName>
              <CarModelName>{data.carModel.name}</CarModelName>
              <PricePerDay>
                {data.pricePerDay.toLocaleString()}원 /일
              </PricePerDay>
              <ShareTerm>
                {dateChange(data.startDate) + ' ~ ' + dateChange(data.endDate)}
              </ShareTerm>
              <AddressMark>{data.address.slice(6, 8)}</AddressMark>
            </ProductInfo>
          </ProductContainer>
        );
      })}
    </ProductListContainer>
  );
};

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 50px 40px;
  width: 100%;
  height: 870px;
  padding: 50px 80px;
`;

const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
`;

const ProductImg = styled.div<{ carimage: string }>`
  width: 100%;
  height: 240px;
  border-radius: 10px;
  background-image: ${({ carimage }) => `url(${carimage})`};
  background-size: cover;
  background-position: center;
  &:hover {
    cursor: pointer;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

const CarBrandName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const CarModelName = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
`;

const ShareTerm = styled.div`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
  text-decoration: underline;
`;

const PricePerDay = styled.div`
  margin: 5px 0;
  font-size: 18px;
  font-weight: 600;
`;

const AddressMark = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;
  padding: 6px;
  border-radius: 5px;
  font-size: 13px;
  background-color: #29b9ff;
  color: #ffffff;
`;

const CarListEmpty = styled.div`
  margin-top: 250px;
  font-size: 25px;
  grid-column: 1/7;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`;

const LoadingBox = styled.img`
  grid-column: 1/7;
  margin: 180px auto;
  width: 170px;
  text-align: center;
`;

export default ProductList;

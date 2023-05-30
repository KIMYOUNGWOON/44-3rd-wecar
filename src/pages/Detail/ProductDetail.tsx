import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import BookingBox from './BookingBox';
import logoImg from '../../assets/mainImg/logoImg.png';
import Footer from 'pages/Main/Footer';
import HostCarInfo from './HostCarInfo';
import Map from './Map';
import axios from 'axios';
import { HOST_ADDRESS } from '../../HostAddress';

function ProductDetail() {
  const [carData, setCarData] = useState<any>({});
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    axios.get(`${HOST_ADDRESS}/cars/${id}`).then(response => {
      setCarData(response.data);
    });
  }, []);

  console.log(carData);

  return (
    <>
      <NavContainer>
        <Logo
          src={logoImg}
          alt="로고 이미지"
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
        />
      </NavContainer>
      <ProductDetailContainer>
        <ProductDetailHeader>
          <BrandModelNameBox>
            {carData.carModel && (
              <CarBrandName>{carData.carModel.brand.name}</CarBrandName>
            )}
            {carData.carModel && (
              <CarModelName>{carData.carModel.name}</CarModelName>
            )}
          </BrandModelNameBox>
          <SideInfo>
            ★ 4.97 <span>(후기 252개)</span> • ⚑ <span>슈퍼호스트</span>
          </SideInfo>
        </ProductDetailHeader>
        {carData.files && (
          <CarImageContainer>
            <MainCarImage carimage={carData.files[0].url} />
            {carData?.files.slice(1).map((data: any) => {
              return <CarImage key={data.id} carimage={data.url} />;
            })}
          </CarImageContainer>
        )}
        <MainSectionContainer>
          <HostCarInfo carData={carData} />
          <BookingBox carData={carData} />
        </MainSectionContainer>
      </ProductDetailContainer>
      <AddressContainer>
        <AddressTitle>
          픽업 / 반납 위치 <span>•</span>
        </AddressTitle>
        <AddressValue>{carData?.address}</AddressValue>
      </AddressContainer>
      <Map carData={carData} />
      <Footer />
    </>
  );
}

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 80px;
  border-bottom: 1px solid #eeeeee;
  background-color: #ffffff;
  z-index: 1;
`;

const Logo = styled.img`
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const ProductDetailContainer = styled.div`
  position: relative;
  width: 1200px;
  margin: 140px auto 0;
`;

const ProductDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandModelNameBox = styled.div``;

const CarBrandName = styled.div`
  margin-bottom: 7px;
  font-size: 30px;
  font-weight: 600;
`;
const CarModelName = styled.div`
  padding-left: 1px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
`;

const SideInfo = styled.div`
  padding-bottom: 25px;
  font-size: 18px;
  color: rgba(0, 0, 0, 1);
  margin-top: 65px;
  span {
    color: rgba(0, 0, 0, 0.6);
    margin-left: 5px;
  }
`;

const CarImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 292px);
  grid-template-rows: repeat(2, 300px);
  gap: 10px;
`;
const MainCarImage = styled.div<{ carimage: string }>`
  grid-row: 1/ 3;
  grid-column: 1/3;
  background-image: ${({ carimage }) => `url(${carimage})`};
  background-position: center;
  background-size: cover;
`;
const CarImage = styled.div<{ carimage: string }>`
  width: 100%;
  height: 100%;
  background-image: ${({ carimage }) => `url(${carimage})`};
  background-position: center;
  background-size: cover;
`;

const MainSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 90px;
  width: 100%;
  margin-top: 60px;
  padding-top: 60px;
  padding-bottom: 70px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const AddressContainer = styled.div`
  width: 1200px;
  margin: 70px auto 30px;
`;

const AddressTitle = styled.div`
  font-size: 25px;
  margin-bottom: 40px;
  span {
    color: #fa545c;
  }
`;

const AddressValue = styled.div`
  font-size: 17px;
`;

export default ProductDetail;

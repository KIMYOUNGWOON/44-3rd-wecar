import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import bmwImg1 from '../../assets/detailImg/BMW.jpg';
import bmwImg2 from '../../assets/detailImg/BMW추가이미지.jpg';
import bmwImg3 from '../../assets/detailImg/BMW추가이미지1.jpg';
import bmwImg4 from '../../assets/detailImg/BMW추가이미지2.jpg';
import bmwImg5 from '../../assets/detailImg/BMW추가이미지3.jpg';
import BookingBox from './BookingBox';
import logoImg from '../../assets/mainImg/logoImg.png';
import Footer from 'pages/Main/Footer';
import HostCarInfo from './HostCarInfo';
import Map from './Map';

const BMW_IMAGE = [bmwImg1, bmwImg2, bmwImg3, bmwImg4, bmwImg5];
const BMW_IMAGE_SUB = BMW_IMAGE.slice(1);

function ProductDetail() {
  const navigate = useNavigate();
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
        <CarBrandName>BMW</CarBrandName>
        <CarModelName>M8 컴페티션 그란 쿠페</CarModelName>
        <CarImageContainer>
          <MainCarImage carimage={BMW_IMAGE[0]} />
          {BMW_IMAGE_SUB.map((image, i) => {
            return <CarImage key={i} carimage={image} />;
          })}
        </CarImageContainer>
        <MainSectionContainer>
          <HostCarInfo />
          <BookingBox />
        </MainSectionContainer>
      </ProductDetailContainer>
      <AddressContainer>
        <AddressTitle>
          픽업 / 반납 위치 <span>•</span>
        </AddressTitle>
        <AddressValue>서울특별시 테헤란로 427 위워크 건물 앞</AddressValue>
      </AddressContainer>

      <Map />
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
const CarBrandName = styled.div`
  margin-bottom: 5px;
  font-size: 30px;
  font-weight: 600;
`;
const CarModelName = styled.div`
  margin-bottom: 20px;
  padding-left: 1px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
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
  width: 100%;
  margin-top: 60px;
  gap: 90px;
`;

const AddressContainer = styled.div`
  width: 1200px;
  margin: 130px auto 30px;
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

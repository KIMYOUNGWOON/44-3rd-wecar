import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import CarInfo from './CarInfo';
import BookingHistory from './BookingHistory';
import axios from 'axios';
import { HOST_ADDRESS } from '../../../HostAddress';
import { useNavigate } from 'react-router';

function HostPage() {
  const [carData, setCarData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const fixed = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  console.log(carData);

  useEffect(() => {
    axios
      .get(`${HOST_ADDRESS}/cars/host`)
      .then(response => {
        if (response.status === 200) {
          const { data } = response;
          setCarData(data);
          setIsLoading(false);
        }
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    handleFixed();
  };

  function handleFixed() {
    if (fixed.current) {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 520) {
        fixed.current.style.position = 'absolute';
        fixed.current.style.top = '527px';
      } else if (scrollTop < 520) {
        fixed.current.style.top = '';
        fixed.current.style.position = 'fixed';
      }
    }
  }

  if (isLoading) {
    return <LoadingContainer />;
  } else if (carData) {
    return (
      <BreakDownContainer>
        <RegistrationInfoContainer>
          <CarImage ref={fixed} carimage={carData?.files[0].url} />
          <CarInfo carData={carData} />
        </RegistrationInfoContainer>
        <BookingHistory />
        <ButtonContainer>
          <RemoveBtn
            onClick={() => {
              axios.delete(`${HOST_ADDRESS}/cars/host`).then(() => {
                setCarData(null);
              });
            }}
          >
            삭제하기
          </RemoveBtn>
          <GotohomeBtn
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
          >
            홈 이동
          </GotohomeBtn>
        </ButtonContainer>
      </BreakDownContainer>
    );
  } else {
    return (
      <CarEmptyContainer>
        <CarEmptyText>등록된 차량이 없습니다.</CarEmptyText>
      </CarEmptyContainer>
    );
  }
}

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CarEmptyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CarEmptyText = styled.div`
  font-size: 25px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 200px;
`;

const BreakDownContainer = styled.div``;

const RegistrationInfoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 40px 300px 40px 290px;
  background-color: #edf0f5;
`;

const CarImage = styled.div<{ carimage: string }>`
  position: fixed;
  width: 560px;
  height: 560px;
  background-image: ${({ carimage }) => `url(${carimage})`};
  background-size: cover;
  background-position: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 60px 0;
`;

const RemoveBtn = styled.div`
  padding: 15px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #29b9ff;
  color: #ffffff;
  &:hover {
    cursor: pointer;
  }
`;

const GotohomeBtn = styled(RemoveBtn)``;

export default HostPage;

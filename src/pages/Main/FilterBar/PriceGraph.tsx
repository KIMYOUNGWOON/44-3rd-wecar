import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, Title, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, Title, BarElement);

function PriceGraph() {
  const data = {
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
    ],
    datasets: [
      {
        label: 'Data',
        data: [1, 6, 3, 5, 2, 3, 2, 5, 6, 7, 3, 5, 3, 2, 1, 4, 5, 7, 2, 5, 2],
        backgroundColor: 'rgba(41, 184, 255, 0.3)',
        borderColor: 'rgba(41, 184, 255, 0.3)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        display: false,
      },
    },
  };

  return (
    <FilterPriceContainer>
      <PriceGraphTitle>가격 범위</PriceGraphTitle>
      <PriceGraphDescription>
        평균 일일 요금은 ₩ 24,330원이며, 수수료 및 세금이 포함된 금액입니다
      </PriceGraphDescription>
      <PriceGraphContainer>
        <Bar data={data} options={options} />
      </PriceGraphContainer>
    </FilterPriceContainer>
  );
}

const FilterPriceContainer = styled.div`
  padding: 40px 40px 0 40px;
`;

const PriceGraphTitle = styled.div`
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 600;
`;

const PriceGraphDescription = styled.div`
  margin-bottom: 50px;
  font-size: 14px;
  color: #29b8ff;
`;

const PriceGraphContainer = styled.div`
  position: relative;
  width: 650px;
  margin: 0 auto;
  padding: 40px 50px 0 40px;
`;

export default PriceGraph;

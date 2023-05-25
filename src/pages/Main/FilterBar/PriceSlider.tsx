import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function PriceSlider() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(30000);

  const handleSliderChange = (values: any) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  return (
    <PriceSliderContainer>
      <Slider
        range
        min={1000}
        max={30000}
        value={[minValue, maxValue]}
        onChange={handleSliderChange}
        handleStyle={{
          borderColor: '#29b8ff',
          backgroundColor: '#29b8ff',
          height: 30,
          width: 30,
          marginTop: -21,
          cursor: 'pointer',
        }}
        trackStyle={{
          borderColor: '#29b8ff',
          backgroundColor: '#29b8ff',
          marginTop: -8,
        }}
        railStyle={{
          backgroundColor: '#dcdcdc',
          height: 3,
          borderRadius: 3,
          marginTop: -8,
        }}
      />
      <PriceValueContainer>
        <PriceMinValueContainer>
          <PriceMinValueText>최저</PriceMinValueText>
          <PriceMinValue>₩ {minValue}</PriceMinValue>
        </PriceMinValueContainer>
        <Hyphen />
        <PriceMaxValueContainer>
          <PriceMaxValueText>최고</PriceMaxValueText>
          <PriceMaxValue>₩ {maxValue} +</PriceMaxValue>
        </PriceMaxValueContainer>
      </PriceValueContainer>
    </PriceSliderContainer>
  );
}

const PriceSliderContainer = styled.div`
  padding: 0 100px 40px;
  margin-right: 10px;
  border-bottom: 1px solid #eeeeee;
`;

const PriceValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PriceMinValueContainer = styled.div`
  width: 265px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const PriceMinValueText = styled.div`
  margin-bottom: 5px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
`;

const PriceMinValue = styled.div`
  font-size: 17px;
`;

const PriceMaxValueContainer = styled(PriceMinValueContainer)``;

const PriceMaxValueText = styled(PriceMinValueText)``;

const PriceMaxValue = styled(PriceMinValue)``;

const Hyphen = styled.div`
  width: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

export default PriceSlider;

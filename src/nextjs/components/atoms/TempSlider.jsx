import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from "@chakra-ui/react";
import React, { useState } from "react";

export const TempSlider = (props) => {
  const { onValueChange } = props;
  const [sliderValue, setSliderValue] = useState(36.2);
  const onChangeSledeVal = (val) => {
    setSliderValue(val);
    onValueChange(val);
  }

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }

  return (
    <Box pt={6} pb={2}>
      <Slider
        aria-label='slider-ex-6'
        min={34}
        max={42}
        step={0.1}
        onChange={onChangeSledeVal}
        value={sliderValue}
      >
        <SliderMark value={36} {...labelStyles}>
          36
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {sliderValue}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}
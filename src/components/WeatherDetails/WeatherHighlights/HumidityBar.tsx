import * as S from './WeatherHighlightsStyle'
import { FC, useContext } from "react";
import { ColorContext } from "../../../context/ColorContext";
import { ColorsProps } from "../../../context/ColorContext";

interface Props {
  humidityValue: number;
}
export interface HumidityBarInterface extends Props, ColorsProps { }

const HumidityBar: FC<Props> = ({ humidityValue }) => {
  const colors = useContext(ColorContext);
  return (
    <>
      <S.HumidityBarDescription>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </S.HumidityBarDescription>
      <S.HumidityBar colors={colors} humidityValue={humidityValue} />
    </>
  );
};

export default HumidityBar;



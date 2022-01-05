import * as S from './WrongCityMessageStyle'
import { FC, useContext } from "react";
import { ColorContext, ColorsProps } from "../../context/ColorContext";

interface Props {
  cityName: string;
  showMessage: "false" | "true";
}
export interface MessageInterface extends ColorsProps, Props { }

const WrongCityMessage: FC<Props> = ({ cityName, showMessage }) => {
  const colors = useContext(ColorContext);

  return (
    <>
      <S.Message colors={colors} showMessage={showMessage}>
        {cityName.length !== 0 ? (
          <p>
            Sorry, can not find location:<span>{cityName}</span>
          </p>
        ) : (
          <p>Location can not be empty!</p>
        )}
      </S.Message>
    </>
  );
};

export default WrongCityMessage;



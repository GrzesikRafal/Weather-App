import styled from "styled-components";
import { MessageInterface } from "./WrongCityMessage";

export const Message = styled.div<Partial<MessageInterface>>`
  position: absolute;
  margin-top: 1rem;
  padding: 0 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  background: ${(props) => props.colors?.wrongCityMessage};
  border-radius: 20px;

  visibility: ${(props) =>
    props.showMessage === "true" ? "visible" : "hidden"};
  p {
    color: black;
  }
  span {
    display: block;
    text-transform: capitalize;
    font-weight: bold;
    color: black;
  }
`;
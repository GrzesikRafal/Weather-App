import styled from "styled-components";
import { MessageInterface } from "./WrongCityMessage";

export const Message = styled.div<Partial<MessageInterface>>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  width: fit-content;
  padding:  1rem 1rem;
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
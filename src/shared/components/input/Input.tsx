

import { TextInputProps } from "react-native";
import { ContanierInput } from "./input.styled";

type InputProps = TextInputProps;

export default function Input({...props}: InputProps) {
  return (
    <ContanierInput {...props} />
  )
}
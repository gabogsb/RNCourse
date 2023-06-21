

import { ContainerLogin } from "./styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
// import { Text } from "react-native";
import Text from "../../../shared/components/text/Text";

export default function Login() {

  const handleOnpress = () => {
    console.log('Clicou')
  }

  return (
    <ContainerLogin>
      <Input />
      <Button title='Entrar' onPress={handleOnpress} margin="8px"/>
      <Button style={{backgroundColor: 'red'}} title='Entrar' onPress={handleOnpress} margin="8px"/>
    </ContainerLogin>
  )
}
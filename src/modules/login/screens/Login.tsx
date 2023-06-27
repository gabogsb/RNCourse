

import { ContainerLogin } from "./styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";
// import { Text } from "react-native";
import Text from "../../../shared/components/text/Text";
import { theme } from '../../../shared/themes/theme';
import { useState } from 'react';

export default function Login() {
  
  
  

  const handleOnpress = () => {
    console.log('Clicou')
  }

  return (
    <ContainerLogin>
      <Input />
      <Button
        title='Clica em mim'
        onPress={handleOnpress}
        margin="8px"
        type={theme.buttons.buttonsTheme.primary}
      />
    </ContainerLogin>
  )
}
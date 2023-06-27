import styled from "styled-components/native";
import { theme } from '../../themes/theme';
import LinearGradient from 'react-native-linear-gradient';
interface ContainerButtonProps {
  margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
  width: 100%;
  height: 48px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;

  ${(props) => props.margin ? `margin: ${props.margin}` : ''}
  
`;

export const ContainerButtonGradeinet = styled(LinearGradient) <ContainerButtonProps>`

  ${(props) => props.margin ? `margin: ${props.margin}` : ''}
  border-radius: 18px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerButtonSecundary = styled(ContainerButton) <ContainerButtonProps>`

  ${(props) => props.margin ? `margin: ${props.margin}` : ''}

  background-color: transparent;

  border-width: 1px;
  border-color: ${theme.colors.mainTheme.primary};
  
`;

export const ContainerButtonDisabled = styled(ContainerButton) <ContainerButtonProps> `
  background-color: ${theme.colors.grayTheme.gray100};
`; 
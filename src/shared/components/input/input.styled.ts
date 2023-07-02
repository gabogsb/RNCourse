import styled from "styled-components/native";
import { theme } from '../../themes/theme';



export const ContanierInput = styled.TextInput`
  width: 100%;
  height: 48px;
  padding: 16px;
  border-width: 1px;
  border-radius: 26px;
  background-color: ${theme.colors.neutralTheme.white};
  border-color: ${theme.colors.grayTheme.gray80};
  color: ${theme.colors.neutralTheme.black};
`;
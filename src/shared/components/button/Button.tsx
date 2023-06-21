import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ContainerButton } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
  title: string
  margin?: string;
}

export default function Button({title, margin, ...props}: ButtonProps) {

  return (
    <ContainerButton margin={margin} {...props}>
      <Text type={textTypes.TITLE} color={theme.colors.neutralTheme.white}>{ title }</Text>
    </ContainerButton>
      
  )

}
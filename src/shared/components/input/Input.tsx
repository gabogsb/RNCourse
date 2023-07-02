

import { TextInputProps, View } from "react-native";
import { ContanierInput } from "./input.styled";
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/theme';

interface InputProps extends TextInputProps {
  title?: string;
}

export default function Input({title, ...props }: InputProps) {
  
  return (
    <DisplayFlexColumn>
      {title && (
        <Text customMargin='0px 0px 0px 8px' color={theme.colors.grayTheme.gray100} type={textTypes.PARAGRAPH_SMALL_SEMI_BOLD}> {title} </Text>
      )}
      <ContanierInput {...props} />
    </DisplayFlexColumn>
  )
}
import { ActivityIndicator, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ContainerButton, ContainerButtonSecundary, ContainerButtonGradeinet, ContainerButtonDisabled } from "./button.style";
import LinearGradient from 'react-native-linear-gradient';
import Text from "../text/Text";
import { theme } from "../../themes/theme";
import { textTypes } from "../text/textTypes";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

export default function Button({ title, type, loading, disabled, onPress, margin, ...props }: ButtonProps) {
  
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  }

  const renderText = (color: string) => (
    <>
      {loading ? (
        <ActivityIndicator
          color={theme.colors.neutralTheme.white}
        />
      ) : (
          <Text type={textTypes.BUTTON_BOLD} color={color}>{ title }</Text>
      )}
    </>
  )

  if (disabled) {
    return (
      <ContainerButtonDisabled {...props} margin={margin} activeOpacity= {1}>
        {renderText(theme.colors.neutralTheme.white)}
      </ContainerButtonDisabled>
    )
   }

  switch (type) {
    case theme.buttons.buttonsTheme.secundary:
       return (
         <ContainerButtonSecundary {...props} margin={margin} onPress={handleOnPress} >  
          {renderText(theme.colors.mainTheme.primary)}
        </ContainerButtonSecundary>
       )
    
    case theme.buttons.buttonsTheme.primary:
  
    default: 
       return (
         <ContainerButton {...props} margin={margin} onPress={handleOnPress}>
           <ContainerButtonGradeinet
             start={{ x: 0, y: 0 }}
             end={{ x: 1, y: 1 }}
             colors={[theme.colors.pinkTheme.pink80, theme.colors.purpleTheme.purple80]}
           >
             {renderText(theme.colors.neutralTheme.white)}     
            </ContainerButtonGradeinet>
        </ContainerButton>
          
  )
  }

 

}
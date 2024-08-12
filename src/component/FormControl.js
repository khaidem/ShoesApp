import {FormControl, Input, WarningIcon, WarningOutlineIcon} from 'native-base';
import { COLOURS, FONTSIZE } from '../constant/Constant';



const CustomForm = ({formLabel, placeholder, setValue , }) => {
  return (
    <FormControl >
      <FormControl.Label _text={
        {
          fontFamily: 'body',
          fontWeight:500,
          fontSize: FONTSIZE.Size16,
          color: COLOURS.textColor
        }
      }>
        {formLabel}
      
      </FormControl.Label>
      <Input
      backgroundColor={COLOURS.white}
        variant={'rounded'}
        autoCapitalize="none"
        placeholder={placeholder}
        fontFamily={'body'}
        onChangeText={setValue}></Input>
        {/* <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size='xs'/>}>{errorMessage}</FormControl.ErrorMessage> */}
    </FormControl>
  );
};

export default CustomForm;

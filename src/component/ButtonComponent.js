import { Button } from 'native-base'
import React from 'react'

const ButtonComponent = ({name, onPress, Height,Weight}) => {
  return (
    <Button width={Weight} height={Height} onPress={()=> {onPress}}>{name}</Button>
  )
}

export default ButtonComponent
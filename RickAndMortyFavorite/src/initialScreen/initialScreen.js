import React from 'react'
import {Text} from 'react-native'
import styled from "styled-components/native"

const InitialSafeArea = styled.SafeAreaView`
  flex: 1;
`

const InitialScreen = () => {
  return (
    <InitialSafeArea>
      <Text>Teste</Text>
    </InitialSafeArea>
  )
}

export default InitialScreen;
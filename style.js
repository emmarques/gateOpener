import { Text, View } from 'react-native';
import styled, { css } from 'styled-components'
import Constants from 'expo-constants';

export const Title = styled(Text)`
  marginBottom: 20px;
  fontSize: 30px;
  fontWeight: bold;
  color: #333;
`

export const Container = styled(View)`
  paddingTop: ${Constants.statusBarHeight + 40}px;
  flex: 1;
  flexDirection: column;
  alignItems: stretch;
  backgroundColor: #e4e4e4;
  justifyContent: flex-start;
  paddingLeft: 20px;
  paddingRight: 20px;
`

export const ButtonMessage = styled(Text)`
  padding: 10px 10px 10px 10px;
  text-align: center;
  color: white;
  backgroundColor: red;
  borderRadius: 5px;
  alignItems: center;
  display: ${props => props.disabled ? "flex" : "none"};
`

export const BigButton = styled(Text)`
  backgroundColor: ${props => props.disabled ? "#989898" : "#337ab7"};
  alignItems: center;
  justifyContent: center;
  borderRadius: 5px;
  text-align: center;
  padding: 50px 10px 50px 10px;
  margin: 20px 0px 20px 0px;
  fontWeight: bold;
  color: white;
  fontSize: 25px;
`
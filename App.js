import React from 'react';
import * as style from './style'
import { TouchableOpacity } from 'react-native';
import { callApi } from './api'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      errorText: null
    }
  }

  toggleGate = async () => {
    this.setState({
      loading: true
    })

    await callApi({
      method: 'post',
      url: '/toggle'
    }, () => {
      this.setState({
        loading: false,
        errorText: null
      })
    }, (error) => {
      console.log(error)
      this.setState({ loading: false, errorText: 'Ocorreu um erro ao enviar o sinal. Tente novamente' })
    })
  }

  render () {
    return (
      <style.Container>
        <style.Title>
          Abrir ou fechar o portão:
        </style.Title>

        <style.ButtonMessage disabled={this.state.errorText != null}>
          {this.state.errorText}
        </style.ButtonMessage>

        <TouchableOpacity onPress={this.toggleGate} disabled={this.state.loading}>
          <style.BigButton disabled={this.state.loading}>
              {this.state.loading ? 'Enviando o sinal...' : 'Toque para abrir ou fechar'}
          </style.BigButton>
        </TouchableOpacity>
      </style.Container>
    );
  }
}
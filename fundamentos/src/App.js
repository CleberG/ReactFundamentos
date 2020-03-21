import React from 'react';

function CompornentFuncional() {
  return (
    <h1>hello Clebão</h1>
  )
}

class App extends React.Component {
  state = {
    nome: ''
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBOx = () => {
    const opcoes = ["Fulano" , "Cicrano"]
  const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
  return(
    <select>
      {comboBoxOpcoes}
    </select>
  )
  }
  render() {
    const MeuComboBox = () => this.criaComboBOx()
    return (
      <>
        <input type ="text" value = {this.state.value} onChange = {this.modificarNome}/>
        <h1>Hello {this.state.nome}</h1>
        <MeuComboBox />
      </>
    )
  }
}
export default App;
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

  mudarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }
  render() {
    return (
      <>
        <input type ="text" value = {this.state.value} onChange = {this.mudarNome}/>
        <h1>Hello {this.state.nome}</h1>
      </>
    )
  }
}
export default App;
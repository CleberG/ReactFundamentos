import React from 'react';

function CompornentFuncional (){
  return(
    <h1>hello Clebão</h1>
  )
}

class App extends React.Component{
  state = {
    nome: 'Cleber Gomes'
  }
  render(){
    return(
    <h1>Hello {this.state.nome}</h1>
    )
  }
}
export default App;
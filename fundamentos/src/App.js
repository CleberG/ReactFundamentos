import React from 'react';

function CompornentFuncional() {
  return (
    <h1>hello Clebão</h1>
  )
}

function App(props) {

  const modificarNome = event => {
    console.log(event.target.value)
  }


  const criaComboBOx = () => {
    const opcoes = ["Fulano", "Cicrano"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
    return (
      <select >
        {comboBoxOpcoes}
      </select>
    )
  }
  const MeuComboBox = () => criaComboBOx()
  return (
    <>
      <input className ="text-centralizado" type="text" value={props.nome} onChange={props.modificarNome} />
  <h1>Hello {props.nome} sua idade é {props.idade}</h1>
      <MeuComboBox />
    </>
  )
}
export default App;
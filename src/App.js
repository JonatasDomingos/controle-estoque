import React from "react"
import { useSelector, useDispatch, connect } from "react-redux"
import { logar } from "./actions/login-actions"
import { cadastrar } from "./actions/cadastro-actions"
import { bindActionCreators } from "redux"

const arrayzinho = [
  {
    nome: "Xuxu",
    cpf: "515616165"
  },
  {
    nome: "Brunim",
    cpf: "231341351351"
  },
  {
    nome: "Davi",
    cpf: "4214242124"
  },
  {
    nome: "Zazaco",
    cpf: "412412421421"
  }
]

var tabelinha = () =>
  arrayzinho.map(array => {
    return (
      <table>
        <tr>
          <td>{array.nome}</td>
          <td>{array.cpf}</td>
        </tr>
      </table>
    )
  })

const App = ({ logar, cadastrar, state, loginStates }) => (
  <div>
    <h1>XUXU {loginStates}</h1>
    <h1>XUXU {state.cadastroState}</h1>
    <button onClick={() => logar(5)}>+</button>
    <button onClick={() => cadastrar(5)}>-</button>
    {tabelinha()}
  </div>
)

const mapStateToProps = state => ({
  state: state,
  loginStates: state.loginState
})

const mapDispatchToProps = dispatch => ({
  logar: numero => {
    dispatch({ type: "INCREMENT", payload: numero })
  },
  cadastrar: numero => {
    dispatch({ type: "DECREMENT", payload: numero })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

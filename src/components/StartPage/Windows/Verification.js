import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setMainPage } from "../../../store/actions";
import { generateToken } from "../../../store/helpers";

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = ({
  setMainPage
})

const Users$ = (props) => {

  const [code, setCode] = useState('')
  const [message, setMessage] = useState(null)

  const codeHandler = (e) => {
    setCode(e.target.value)
  }

  const nextHandler = async () => {
    let result = await generateToken(props.currentUser.id, code)
    if (result.message) {
      setMessage(result.message)
      return null
    }
    if (result.token) {
      localStorage.setItem('token', result.token)
      props.setMainPage('main')
    }
    console.log(result)
  }

  return(
    <div className="wrapper h-100p d-flex fd-column jc-center ai-center backMain p-10">
      <h2 className="colorMain title">Аутентификация</h2>
      <p className="colorMain mt-30 ta-center">Вам было отправлено сообщение<br/> с кодом для входа</p>
      <input className="listInput mt-20 ta-center"
             value={code}
             onChange={codeHandler}
             type="number"
             placeholder="Введите код"/>
      { message && <p className="colorMain mt-20 ta-center">{message}</p> }
      <button className="button fz-16 mt-20 backMain colorMain p-10"
              onClick={ nextHandler }>Войти</button>
    </div>
  )

}

const Users = connect(mapStateToProps, mapDispatchToProps)(Users$)

export default Users
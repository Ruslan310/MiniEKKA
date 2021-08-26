import React from 'react'
import { connect } from 'react-redux'
import { setStartWindow } from "../../../store/actions";
import { generateSms } from "../../../store/helpers";

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = ({
  setStartWindow
})

const Confirmation$ = (props) => {

  const nextHandler = async () => {
    props.setStartWindow('verification')
    await generateSms(props.currentUser.id)
  }

  const backHandler = () => {
    props.setStartWindow('users')
  }

  return(
    <div className="wrapper h-100p d-flex fd-column jc-center ai-center backMain">
      <h2 className="colorMain title">Вы хотите войти как</h2>
      <h2 className="colorMain title mt-5">{props.currentUser.firstNameRu + ' ' + props.currentUser.surNameRu}?</h2>
      <div className="d-flex mt-20">
        <button className="button fz-16 backMain colorMain p-10" onClick={ nextHandler }>Да</button>
        <button className="button fz-16 backMain colorMain p-10 ml-5" onClick={ backHandler }>Нет</button>
      </div>
    </div>
  )

}

const Confirmation = connect(mapStateToProps, mapDispatchToProps)(Confirmation$)

export default Confirmation
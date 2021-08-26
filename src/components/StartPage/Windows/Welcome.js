import React from 'react'
import { connect } from 'react-redux'
import { setStartWindow } from "../../../store/actions";

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = ({
  setStartWindow
})

const Welcome$ = (props) => {

  const buttonHandler = () => {
    props.setStartWindow('pharmacies')
  }

  return(
    <div className="wrapper h-100p d-flex fd-column jc-center ai-center backMain mt--10">
      <h1 className="colorMain title">Добро пожаловать!</h1>
      <button className="button fz-16 mt-20 backMain colorMain p-10-20"
              onClick={ buttonHandler }>Выберите аптеку</button>
    </div>
  )

}

const Welcome = connect(mapStateToProps, mapDispatchToProps)(Welcome$)

export default Welcome
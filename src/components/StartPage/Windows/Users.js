import React from 'react'
import { connect } from 'react-redux'
import { setStartWindow, setCurrentUser } from "../../../store/actions";

const mapStateToProps = (state) => ({
  usersList: state.usersList
})

const mapDispatchToProps = ({
  setStartWindow, setCurrentUser
})

const Users$ = (props) => {

  const nextHandler = (user) => {
    props.setCurrentUser(user)
    props.setStartWindow('confirmation')
  }

  const backHandler = () => {
    props.setStartWindow('pharmacies')
  }

  return(
    <div className="wrapper h-100p d-flex fd-column ai-center backMain">
      <h2 className="colorMain title mt-20">Выберите пользователя</h2>
      {
        props.usersList
          ?
          <div className="listContainer mt-20 w-100p">
            { props.usersList.map( item => {
              return(
                <p className="listItem w-100p colorMain"
                   onClick={ () => nextHandler(item) }
                   key={item.id}>{item.surNameRu + ' ' + item.firstNameRu}</p>
              )
            } ) }
          </div>
          :
          <>
            <p className="colorMain mt-20">Сотрудников не найдено</p>
          </>

      }

      <button className="button fz-16 mt-20 backMain colorMain p-10 mb-10"
              onClick={ backHandler }>Назад</button>
    </div>
  )

}

const Users = connect(mapStateToProps, mapDispatchToProps)(Users$)

export default Users
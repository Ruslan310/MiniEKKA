import React from 'react'
import {connect} from 'react-redux'
import {setMainPage} from "../../store/actions";

const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    currentPharmacy: state.currentPharmacy,
})

const mapDispatchToProps = ({
    setMainPage
})

const MainPage$ = (props) => {

    const logOutHandler = () => {
        localStorage.clear()
        window.location.reload()
    }
    const logInHandler = () => {
        props.setMainPage('order')
        console.log("вход")
    }

    return (
        <div className="wrapper h-100vh d-flex fd-column jc-center ai-center backMain">
            <h1 className="colorMain title mt--50">Здравствуйте!</h1>
            {props.currentUser &&
            <p className="colorMain mt-20">
                Вы вошли как {props.currentUser.firstNameRu + ' ' + props.currentUser.surNameRu}
            </p>
            }
            {props.currentPharmacy &&
            <p className="colorMain mt-20">Аптека {props.currentPharmacy.pharmacy}</p>}

            <button onClick={logInHandler}
                    className="button fz-16 mt-20 backMain colorMain p-10">Войти
            </button>
            <button onClick={logOutHandler}
                    className="button fz-16 mt-20 backMain colorMain p-10">Выйти
            </button>
        </div>
    )

}

const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage$)

export default MainPage
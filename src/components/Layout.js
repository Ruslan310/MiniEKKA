import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getPharmaciesList, setViewportHeight } from "../store/helpers";
import {setPharmaciesList, setMainPage, setCurrentUser, setCurrentPharmacy} from "../store/actions";
import StartPage from "./StartPage/StartPage";
import MainPage from "./MainPage/MainPage";
import OrderMenu from "./OrderMenu/OrderMenu";

const mapStateToProps = (state) => ({
  isPharmaciesListLoaded: state.isPharmaciesListLoaded,
  pharmaciesList: state.pharmaciesList,
  mainPage: state.mainPage,
})

const mapDispatchToProps = ({
  setPharmaciesList, setMainPage, setCurrentUser, setCurrentPharmacy
})

const Layout$ = (props) => {

  useEffect( () => {
    onLoad().then(null)
  }, [] )   // eslint-disable-line

  const onLoad = async () => {
    let token = localStorage.getItem('token')
    let user = localStorage.getItem('user')
    let pharmacy = localStorage.getItem('pharmacy')
    if (token && user) {
      props.setMainPage('main')
      props.setCurrentUser(JSON.parse(user))
      props.setCurrentPharmacy(JSON.parse(pharmacy))
    } else {
      props.setMainPage('start')
    }
    props.setPharmaciesList( await getPharmaciesList() )
  }

  const style = setViewportHeight()

  return(
    <div className="viewportFix" style={style}>
      { props.mainPage === 'main' && <MainPage /> }
      { props.mainPage === 'start' && <StartPage /> }
      { props.mainPage === 'order' && <OrderMenu /> }
      { props.mainPage === 'default' && <div> </div> }
    </div>
  )
}

const Layout = connect(mapStateToProps, mapDispatchToProps)(Layout$)

export default Layout
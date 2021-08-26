import React from 'react'
import { connect } from 'react-redux'
import Welcome from "./Windows/Welcome";
import Pharmacies from "./Windows/Pharmacies";
import Users from "./Windows/Users";
import Verification from "./Windows/Verification";
import Confirmation from "./Windows/Confirmation";

const mapStateToProps = (state) => ({
  startWindow: state.startWindow,

})

const mapDispatchToProps = ({

})

const StartPage$ = (props) => {

  return(
    <>
      { props.startWindow === 'welcome' && <Welcome /> }
      { props.startWindow === 'pharmacies' && <Pharmacies /> }
      { props.startWindow === 'users' && <Users /> }
      { props.startWindow === 'confirmation' && <Confirmation /> }
      { props.startWindow === 'verification' && <Verification /> }
    </>
  )

}

const StartPage = connect(mapStateToProps, mapDispatchToProps)(StartPage$)

export default StartPage
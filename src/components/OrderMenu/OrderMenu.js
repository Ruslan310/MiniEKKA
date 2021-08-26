import React from 'react';
import {connect} from "react-redux";
import {setOrderPage} from "../../store/actions";
import SearchOrder from "./OrderPage/SearchOrder";



const mapStateToProps = (state) => ({
    orderMenu: state.orderMenu,
    currentPharmacy: state.currentPharmacy
})

const mapDispatchToProps = ({
    setOrderPage
})

const OrderMenu$ = (props) => {
    console.log('order menu')
    return (
        <>
            { props.orderMenu === 'search' && <SearchOrder currentPharmacy = {props.currentPharmacy}/> }
            {/*{ props.orderMenu === 'pharmacies' && <Pharmacies /> }*/}
        </>
    );
};

const OrderMenu = connect(mapStateToProps, mapDispatchToProps)(OrderMenu$)

export default OrderMenu;
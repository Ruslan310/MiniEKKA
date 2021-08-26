import React, {useState} from 'react';
import {getOrder} from "../../../store/helpers";
import NumberFormat from "react-number-format"

const SearchOrder = (props) => {
    const [order, setOrder] = useState('')
    const [phone, setPhone] = useState('')

    const orderHandler = (e) => {
        setOrder(e.target.value)
    }
    const orderPhoneHandler = (e) => {
        setPhone(e.target.value)
    }

    let phoneNumber = phone?.replace(/\s|\)|\(|-/g, '')?.split('+38')?.[1]

    const searchNumOrderHandler = () => {
        if(order.length<4) {
            console.log('введите больше символов')
        }

        setOrder('')
    }
    const searchPhoneOrderHandler = async () => {
        if(phone.length<4) {
            console.log('введите больше символов')
        }
        let orderPhone = await getOrder(props.currentPharmacy, phone)
        setPhone('')
    }

    return (
        <div className="wrapper h-100p d-flex fd-column jc-center ai-center backMain">
                <input className="listInput mt-20 ta-center"
                       value={order}
                       onChange={orderHandler}
                       placeholder='номер заказа'
                       type="number"/>

            <NumberFormat value={phone}
                          onChange={orderPhoneHandler}
                          className="listInput mt-20 ta-center"
                          type="text"
                          mask=""
                          placeholder='+38 (___) ___-__-__'
                          format='+38 (###) ###-##-##'/>
                {/*<input className="listInput mt-20 ta-center"*/}
                {/*       value={phone}*/}
                {/*       placeholder='номер телефона'*/}
                {/*       onChange={orderHandler}*/}
                {/*       type="number"/>*/}
                <button className="button fz-16 mt-20 backMain colorMain p-10"
                    onClick={searchPhoneOrderHandler}>Найти заказ</button>
            {/*<button className="button fz-16 mt-20 backMain colorMain p-10"*/}
            {/*        onClick={searchPhoneOrderHandler}>Найти заказ</button>*/}
        </div>
    );
};

export default SearchOrder;
const API = process.env.REACT_APP_API_PATH

export const setViewportHeight = () => {
    let vh = window.innerHeight;
    return {
        height: `${vh}px`,
        maxHeight: `${vh}px`,
    }
    // console.log(document.documentElement.style[0])
    // document.documentElement.style.setProperty('--vh', `${vh}px`);
    // console.log(document.documentElement.style[0])
}

export const getPharmaciesList = async () => {
    let result = await fetch(`https://tmc.lll.org.ua/api/pharmacyList`)
        .then(res => res.json())
    // result = result[0]

    // Костыль для теста
    result.unshift({id_apteka: 123456789, apteka: 'REACT TEST'})


    result.map(item => {
        item.isFilter = true;
        return null
    })
    // console.log(result)
    return new Promise(resolve => {
        resolve(result)
    })
}

export const getUsersByPharmacy = async (id) => {
    console.log(id)
    // Костыль для теста
    if (id === 123456789) {
        return new Promise(resolve => {
            resolve([
                {firstNameRu: 'Виталий', surNameRu: 'Антощук', id: '113'},
                {firstNameRu: 'Виталий', surNameRu: 'Бабенко', id: '181237'},
                {firstNameRu: 'Дмитрий', surNameRu: 'Лысюк', id: '179278'},
                {firstNameRu: 'Руслан', surNameRu: 'Клызуб', id: '171418'},
            ])
        })
    }

    let result = await fetch(`${API}/employees/pharmacyId/${id}`)
        .then(res => {
            if (res.status === 200) return res.json()
            // console.log(res)
        })
    return new Promise(resolve => {
        resolve(result)
    })
}

export const generateSms = async (id) => {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({employeeId: +id})
    }
    let result = await fetch(`${API}/authorization/sms/generate`, options)
        .then(res => res.json())
    // console.log(result)
    return new Promise(resolve => {
        resolve(result)
    })
}

export const generateToken = async (id, code) => {
    console.log(id)
    let options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            employeeId: +id,
            code: code
        })
    }
    let result = await fetch(`${API}/authorization/sms/check`, options)
        .then(res => res.json())
    return new Promise(resolve => {
        resolve(result)
    })
}

export const getOrder = async (idPharmacy, phone) => {
    console.log(idPharmacy, phone)
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let result = await fetch(`hppt://192.168.116.112:3366/orders/pharmacy/phone/${idPharmacy}/${phone}`, options)
        .then(res => res.json())
    return new Promise(resolve => {
        resolve(result)
    })
}
import {
    SET_PHARMACIES_LIST,
    SET_MAIN_PAGE,
    SET_START_WINDOW,
    SET_USERS_LIST,
    SET_CURRENT_USER,
    FILTER_PHARMACIES_LIST,
    SET_CURRENT_PHARMACY,
    SET_ORDER_PAGE,
} from "./constants";

const initState = {
    pharmaciesList: null,
    isPharmaciesListLoaded: false,
    mainPage: 'default',
    startWindow: 'welcome',
    orderMenu: 'search',
    usersList: null,
    currentPharmacy: null,
    currentUser: null,
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case SET_PHARMACIES_LIST:
            return {...state, pharmaciesList: action.list, isPharmaciesListLoaded: true}

        case SET_MAIN_PAGE:
            return {...state, mainPage: action.page}

        case SET_START_WINDOW:
            return {...state, startWindow: action.window}

        case SET_ORDER_PAGE:
            return {...state, orderMenu: action.window}

        case SET_USERS_LIST:
            return {...state, usersList: action.list}

        case SET_CURRENT_USER:
            localStorage.setItem('user', JSON.stringify(action.user))
            return {...state, currentUser: action.user}

        case SET_CURRENT_PHARMACY:
            localStorage.setItem('pharmacy', JSON.stringify(action.pharmacy))
            return {...state, currentPharmacy: action.pharmacy}

        case FILTER_PHARMACIES_LIST:
            let fpList = state.pharmaciesList.slice()
            fpList.map(item => {
                item.isFilter = false;
                return null
            })
            fpList.map(item => {
                if (item.apteka.toLowerCase().includes(action.name.toLowerCase())) {
                    item.isFilter = true
                }
                return null
            })
            return {...state, pharmaciesList: fpList}


        default:
            return state
    }
}

export default reducer

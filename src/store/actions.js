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

export const setPharmaciesList = (list) => ({
  type: SET_PHARMACIES_LIST, list
})
export const setMainPage = (page) => ({
  type: SET_MAIN_PAGE, page
})
export const setStartWindow = (window) => ({
  type: SET_START_WINDOW, window
})
export const setOrderPage = (page) => ({
  type: SET_ORDER_PAGE, page
})
export const setUsersList = (list) => ({
  type: SET_USERS_LIST, list
})
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER, user
})
export const setCurrentPharmacy = (pharmacy) => ({
  type: SET_CURRENT_PHARMACY, pharmacy
})
export const filterPharmaciesList = (name) => ({
  type: FILTER_PHARMACIES_LIST, name
})
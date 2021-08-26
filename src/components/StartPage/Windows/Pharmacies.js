import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getUsersByPharmacy } from "../../../store/helpers";
import {setStartWindow, setUsersList, filterPharmaciesList, setCurrentPharmacy} from "../../../store/actions";

const mapStateToProps = (state) => ({
  pharmaciesList: state.pharmaciesList,

})

const mapDispatchToProps = ({
  setStartWindow, setUsersList, filterPharmaciesList, setCurrentPharmacy
})

const Pharmacies$ = (props) => {

  const [name, setName] = useState('')

  const nameHandler = (e) => {
    setName(e.target.value)
    props.filterPharmaciesList(e.target.value)
  }

  const resetHandler = () => {
    setName('')
    props.filterPharmaciesList('')
  }

  const pharmacyHandler = async (selectedPharmacy) => {
    console.log(selectedPharmacy)
    props.setCurrentPharmacy({
      pharmacy: selectedPharmacy.apteka,
      idPharmacy: selectedPharmacy.id_apteka
    })
    props.setUsersList( await getUsersByPharmacy(+selectedPharmacy.id_apteka) )
    props.setStartWindow('users')
  }

  return(
    <div className="wrapper h-100p d-flex fd-column ai-center backMain">

      <div className="listHeader d-flex fd-column ai-center p-10-20">
        <h2 className="colorMain title">Выберите аптеку</h2>
        <div className="d-flex mt-10">
          <input onChange={ nameHandler }
                 value={ name }
                 className="listInput" type="text"
                 placeholder="Поиск по списку"/>
          <button onClick={ resetHandler }
                  className="button fz-16 backMain colorMain ml-5">Сбросить</button>
        </div>
      </div>

      <div className="listContainer w-100p">
        { props.pharmaciesList && props.pharmaciesList.map( item => {
            if (item.isFilter) {
              return(
                <p className="listItem w-100p colorMain"
                   onClick={ () => pharmacyHandler(item) }
                   key={item.id_apteka}>{item.apteka}</p>
              )
            }
            return null
          } ) }
      </div>
    </div>
  )

}

const Pharmacies = connect(mapStateToProps, mapDispatchToProps)(Pharmacies$)

export default Pharmacies
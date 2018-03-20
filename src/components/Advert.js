import React from 'react'
import '../styles/App.css'
import Face from './Face'
import propTypes from 'prop-types'
import Ads from './Ad'

const Advert=({value})=>(
    <div className="col-sm-6">
        <div className="row">
            <Ads/>
            <Face   face={value.face}
                    price={value.price}
                    date={value.date}
                    size={value.size}
                    column={"col-sm-6"}/>
        </div>
    </div>
)

export default Advert

Advert.propTypes={
    value:propTypes.object.isRequired
}
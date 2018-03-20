import React from 'react'
import '../styles/App.css'
import propTypes from 'prop-types'
import {timepassed} from '../lib/lib'

const Face =({face,price,size,date,column})=> (
    <div className={column||"col-sm-3"}>
        <div className="item-container">
            <span className="item-face" 
                  style={{fontSize:size}}>
            {face}
            </span>
            <span className="item-info-container">
            <span className="item-info-holder">
                <span>${price/100}</span>
                <span>{size+" px"}</span>
                <span>{timepassed(date)}</span>
            </span>
            </span>
        </div>
    </div>
)

export default Face

Face.propTypes={
    face:propTypes.string.isRequired,
    price:propTypes.number.isRequired,
    size:propTypes.number.isRequired,
    date:propTypes.string.isRequired,
    column:propTypes.string
}
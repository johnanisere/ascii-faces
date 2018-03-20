import React from 'react'
import '../styles/App.css'
import propTypes from 'prop-types'
import Setting from 'react-icons/lib/md/settings'
import Menu from 'react-icons/lib/md/more-vert'

const Navigation=({size,price,id,settingOne,settingTwo})=>(
    <div className="content-nav">
        <div className="options">
            <span className="Sort-lable">SORT BY</span>
            <span   className="btnn" 
                    onClick={size} >Size</span>
            <span   className="btnn"
                    onClick={price}>Price</span>
            <span   className="btnn"
                    onClick={id}>Id</span>
        </div>
        <div className="more">
            <span   className="symbbtn" ><Setting/></span>
            <span   className="symbbtn symbbtn-alt" ><Menu/></span>
        </div>
    </div>
)

export default Navigation

Navigation.propTypes={
    size:propTypes.func.isRequired,
    price:propTypes.func.isRequired,
    id:propTypes.func.isRequired
}
import React from 'react'
import '../styles/App.css'
import Face from './Face'
import ActivityIndicator from './ActivityIndicator'
import propTypes from 'prop-types'
import End from './End'
import Advert from'./Advert'

const Content=({value,activity,condition})=>(
    <div className="content-body">
        <div className="row">
            {
                value.map((val,i)=>

                (!(i%20)&&i!==0)?

                <Advert value={val}
                        key={i}/>:

                <Face   face={val.face}
                        key={i}
                        price={val.price}
                        date={val.date}
                        size={val.size}/>
                )
            }
        </div>
        <ActivityIndicator activity={activity}/>
        <End condition={condition}/>
    </div>
)

export default Content

Content.propTypes={
    value:propTypes.array.isRequired,
    activity:propTypes.bool.isRequired
}
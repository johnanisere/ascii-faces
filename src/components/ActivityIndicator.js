import React from 'react'
import '../styles/App.css'
import Spinner from 'react-spinkit'
import propTypes from 'prop-types'

const ActivityIndicator=({activity})=>(
        (activity)?
        <div className="activity">
         <span>Loading</span> <Spinner name="three-bounce"/>
        </div>:
        null
)

export default ActivityIndicator

ActivityIndicator.propTypes={
    activity:propTypes.bool.isRequired
}
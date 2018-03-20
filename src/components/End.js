import React from 'react'
import '../styles/App.css'
import propTypes from 'prop-types'

const End=({condition})=>(
    (condition)?
    <h2 className="end">~ end of catalogue ~</h2>:
    null
)
export default End

End.propTypes={
    condition:propTypes.bool.isRequired
}
import React,{Component} from 'react'
import '../styles/App.css'
import {indexVerifier} from '../lib/lib'

class Ads extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentWillMount(){
        const ind =indexVerifier()
        this.setState(()=>({
            ind
        }))
    }
   render(){ 
    return(
    <div className="col-sm-6">
        <div className="item-container">
           {    (this.state.ind)? 
                    <img    src={'/ads/?r='+this.state.ind} 
                            alt="ads" 
                            className="advert" />:
                            null
            }
        </div>
    </div>
    )
}
}
export default Ads
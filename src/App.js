import React, { Component } from 'react'
import './styles/App.css'
import Navigation from './components/Navigation'
import MyParticles from './components/MyParticles'
import Content from './components/Content'
import {getResult} from './lib/lib'

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      fetching:false,
      result:[],
      page:0,
      end:false
    }
    this.initialCall=this.initialCall.bind(this)
    this.subsequentCalls=this.subsequentCalls.bind(this)
    this.onScroll=this.onScroll.bind(this)
    this.sortById=this.sortById.bind(this)
    this.sortBySize=this.sortBySize.bind(this)
    this.sortByPrice=this.sortByPrice.bind(this)
  }

//Gets product list initially, before component mounts
  initialCall(){
    this.setState((prevState)=>({fetching:true}))

    getResult(0)
    .then((res)=>this.setState((prevState)=>(
      {
        fetching:false,
        result:res,
        page:0,
        end:false
      })))
  }

  //Gets product list when user scrolls 
  subsequentCalls(){
    this.setState((prevState)=>({fetching:true}))

    const page=this.state.page+1

    getResult(page)
    .then((res)=>{
      (res.length)?
      this.setState((prevState)=>(
      {
        fetching:false,
        result:[...this.state.result,...res],
        page
      })):
      this.setState((prevState)=>(
        {
          fetching:false,
          end:true
        }))
    })
    
  }

//sorts the product list by Id
  sortById(){
    const {result} = this.state

    result.sort((a,b)=>a.id-b.id)

    this.setState((prevState)=>
    ({result:[...result]}))
  }

  //sorts the product list by price
  sortByPrice(){
    const {result} = this.state

    result.sort((a,b)=>a.price-b.price)

    this.setState((prevState)=>
    ({result:[...result]}))
  }

  //sorts the product list by size
  sortBySize(){
    const {result} = this.state

    result.sort((a,b)=>a.size-b.size)
    
    this.setState((prevState)=>
    ({result:[...result]}))
  }

  //listens to scroll events to determine when to call the method that will update product list
  onScroll(){
    const scrollPosition = window.innerHeight + window.scrollY,
          wholeScreen = document.body.offsetHeight - 500

    if (scrollPosition >= wholeScreen) {
      if(!this.state.end){
        this.subsequentCalls()
      }
      }
  }

  componentWillMount(){
    this.initialCall()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }


  render() {
    return (
      <div className="App" >
        <div className="nav">
          <MyParticles/>
        </div>
        <div className="content">
          <Navigation size={this.sortBySize}
                      price={this.sortByPrice}
                      id={this.sortById}/>
          <Content  value={this.state.result}
                    activity={this.state.fetching}
                    condition={this.state.end}/>
        </div>
      </div>
    );
  }
}

export default App;

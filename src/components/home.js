import React from 'react';
import SearchInput from './SearchInput'
import ImageList from './ImageList'
import axios from 'axios'

class home extends React.Component {

constructor(props){
  super(props)
  this.state = {images: []}
  this.onSearchSubmit = this.onSearchSubmit.bind(this)
}

async onSearchSubmit(entry){
  const response = await axios.get(`https://pixabay.com/api/?key=26149356-da39a7b299aa9b0278885ce2e&q=${entry}&image_type=photo`)
  console.log(response.data.hits)
  this.setState({images:response.data.hits})
  console.log(entry)
}

  render(){
    return (

    <div className='ui container' style={{marginTop:'30px'}}>
    <SearchInput onSearchSubmit={this.onSearchSubmit}/>
    <ImageList images={this.state.images}/>
    </div>

  )
  }
}


export default home;
import './App.css';
import React, { Component } from 'react'
import Cards from './components/Cards/Cards';
import Country from './components/Country/Country';
import Charts from'./components/Charts/Charts';
import {fetchData} from './API/api';
import logo from './image.png';







class App extends Component {
  constructor(){
    super();
      this.state={
        data: {},
        country : ""
      }
    
  }
  async componentDidMount(){ 
    const fetchedData =await fetchData();
    console.log(this.data);
    this.setState({data : fetchedData});
  }
  


  handleCountryChange = async (country) => {
    const fetchedData =await fetchData(country);
    this.setState({data : fetchedData, country: country});
    console.log(fetchedData);
   
  }

  render() {
    const { data,country } = this.state;
    return (
      
      <div className="tc App"> 
      
        <img src={logo} className="image" alt="covid19"/>
        <Cards  data={data}/>
        <Country  handleCountryChange={this.handleCountryChange}/>
         <Charts  data={data} country={country}/>
      </div>
    )
  }
}



export default App;

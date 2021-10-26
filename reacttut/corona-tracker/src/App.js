import {Component} from 'react'
import {Box, withStyles, Typography} from '@material-ui/core';
import Cards from './Components/Cards'
import {fetchData} from './service/Api';
import Countries from './Components/Countries'
import Chart from "./Components/Chart"

const style = {
  container :{

  display : 'flex',
  alignItems : 'center',
  justifyContent : 'center',
  flexDirection : 'column'
},
header : {
    background: '#F5F5F5',
    width: 400,
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: '#777'

},
  lastUpdated: {
  color: '#777',
  fontSize: 12
}
}

class App extends Component{
  state = {
  data:{},
  country : ''
}
 async componentDidMount(){
   const fetchedData =  await fetchData();
   this.setState({data : fetchedData})
   console.log(fetchedData);
  }

  handleCountryChange  = async(country) =>{

    const fetchedData =  await fetchData(country);
    this.setState({data : fetchedData, country:country})
    console.log(fetchedData);
   }
  

  render(){
    const {data} = this.state;
    return(
      <>
      <Box className = {this.props.classes.container}>
      <Box className = {this.props.classes.header}>Covid-19 Tracker</Box>
      <Typography className = {this.props.classes.lastUpdate}> Last Updated : {data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
      <Cards data = {data}/>
      <Countries  handleCountryChange = {this.handleCountryChange}/>
      <Chart data = {data} />
      
      

      </Box>
      </>
    )
  }
}
export default withStyles(style)(App);
import React, { Component} from 'react';
// import './Block.css';
import './App.css'
import UserList from './components/UserList/UserList'
// import Car from './Car/Car.js';
import TopSide from './components/TopSide/TopSide';
import Footer from './components/Footer/Footer';

// class App extends Component {

//   state = {
   
//       cars: [
//           { name: 'Ford', year: 2018},
//           { name: 'Audi', year: 2016},
//           { name: 'BMW', year: 2017}

//       ],

//       block_visible: "display: block",
//       a: true
      
     
//   } 
//   changeTitleHandler = () => {
//     console.log(this.state.block_visible)
//     console.log(this.state.a)


    
//   }

//   handleInput = (event) => {
//     this.setState({
//       pageTitle: event.target.value
//     })
//   }

//   render() {
//     const cars = this.state.cars

//     this.state.a = !this.state.a
//     if (this.state.a) {
//       this.state.block_visible = "display: block" 
//     } else {
//       this.state.block_visible = "display: none"
//     }


const App = () => {
    return (
      <div className='App'>
              <TopSide/>
              <UserList/>
              <Footer/>
      </div>
    )


}
    

     

        {/* <h1>{this.state.pageTitle}</h1>
        <input type='text' onChange={this.handleInput}></input>


        <button onClick={this.render}>Change title</button>
          <div style={{display: `${this.state.block_visible}`}}>
            { this.state.cars.map((car,index) => {
                return(     
                  <Car key={index}
                  name = {car.name} 
                  year={car.year} 
                  />
                )
              }) }
          </div> */}






export default App;

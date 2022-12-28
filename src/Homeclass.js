import React, { Component } from 'react'
import AuthButton from './AuthButton';
import ProItem from './ProItem';
export default class Homeclass extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false,
            productData:[],
            count:10
        }
    }
    static getDerivedStateFromProps(){
      return {
        count:100
      }
    }
    componentDidMount(){
        this.setState({
          productData:[
            {id:1,name:"A",price:2345,description:"Bla bla"},
            {id:2,name:"B",price:3345,description:"Bla bla"},
            {id:3,name:"C",price:4345,description:"Bla bla"},
            {id:4,name:"D",price:5345,description:"Bla bla"}
        ]
        })
    }
    arr=[];
    xyz=()=>{
      return this.setState({isLoggedIn:this.state.isLoggedIn?false:true});
    }
    componentDidUpdate(prevProps,prevState){
      console.log("component Did Update");
      if(prevState.isLoggedIn!=this.state.isLoggedIn){
         alert("Value Changed")
      }
    }
    componentWillUnmount(){
      this.setState({productData:[]})
    }
  render() {
    return (
      <>
         <h2> Home Page</h2>
         <p> The score is {this.state.count}</p>
         <button onClick={this.xyz}> Click Here</button>
         <AuthButton isLoggedIn={this.state.isLoggedIn}/>
         <hr/>
         {this.state.productData.map(pro=>
                 <ProItem key={pro.id} proData={pro}/>
            )}
         {/* {this.arr.length>0 && 
         <>
           <h4> Courses</h4>
         <ul>
            {this.arr.map((val,ind)=>
              <li key={ind}>{val}</li>
            )}
         </ul>
         </>} */}
          {/* Ternary Example */}
         {/* {this.arr.length>0 ? 
         <>
           <h4> Courses</h4>
         <ul>
            {this.arr.map((val,ind)=>
              <li key={ind}>{val}</li>
            )}
         </ul>
         </>:<p> No Data Found</p>} */}
         
      </>
    )
  }
}

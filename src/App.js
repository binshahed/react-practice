import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const heros=['Tom Hangs', 'Leonardo DiCaprio', 'Robert Downey, Jr.', 'Will Smith', 'Tom Cruise','Johnny Depp']
  const products=[
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Pemmum Pro', price: '$150.99'},
    {name: 'Illoustrator', price: '$99.99'}
  ]




  return (
    <div className="App">
      <header className="App-header">
       <p>First React </p>
       <Counter></Counter>
       <Users></Users>
       <ul>
          {
            heros.map(nk => <li>{nk}</li>)
          }

      </ul>

{
  products.map(pd =><Product product={pd}></Product>)
}

      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount]=useState(0)
  const handelClick=()=>{setCount(count+1);
  }
  
  const decrease=()=>{setCount(count-1)}

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={handelClick}>Increase</button>
      <br/>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers]=useState([])
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then(data=>setUsers(data));
  })
  const spanColor={
    color:'yellow',
    marginLeft:'50px'
  }
  return(
    
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
          {
            users.map(user => <ol>name: {user.name} <span style={spanColor}>Email: {user.email}</span></ol>)
          }

      </ul>
    </div>
  )
}

function Product(props){
    const productStyle={
      border:'1px solid gray',
      borderRadius:'5px',
      backgroundColor:'lightgray',
      height:'200px',
      width:'200px',
      color:'black',
      margin:'30px'
    }

  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h4>{props.product.price}</h4>
      <button>Buy now</button>
    </div>
  )
}

export default App;

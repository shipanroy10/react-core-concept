import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const friendsName = [
  {name:'Shipan',address:'gazirhat',phone:'099999999'},
  {name:'Amit roy',address:'gazirhat',phone:'01995379074'},
{name:'sumon qa',address:'gazirhat',phone:'01714848260'},
];

const nameOfProduct=[
  {name:'camera',price:'$999.99'},
  {name:'Iphone',price:'$699.99'},
];

  return (
    <div className="App">
      <header className="App-header">
       <p>i am react lol</p>
      <Counter></Counter>
      <User></User>
    <ul>
        {friendsName.map(x=><li> {x.name} </li>)}
        {friendsName.map(x=><li> {x.address +" -- "+ x.phone} </li>)}
        {nameOfProduct.map(product=><ProductItem product={product} >  </ProductItem>)}
        {friendsName.map(fName=><Friend friend={fName}></Friend>)}
    </ul>
    
    
       <ProductItem product={nameOfProduct[0]} ></ProductItem>
        <Friend friend={friendsName[0]}></Friend>
      

    

      </header>
    </div>
  );
}

function User(){
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data=>setUsers(data))
  },[])
return (
<div>
<h3>Dynamic users : {users.length}  </h3>
{users.map(uName=> <li> {uName.name+" -- "+ uName.phone} </li>)}
</div>
)
};

function Counter(){
  const [count, setCount] = useState(0);

return (
<div>
<h2>count : {count} </h2>
<button onMouseDown={()=> setCount(count - 1)}>decrease</button>
<button onMouseUp={  () => setCount(count + 1)}>increase</button>
</div>
)
};

function ProductItem(props){
  const pStyle={
border:'2px solid black',
backgroundColor:'gray',
borderRadius: '10px',
height:'200px',
width:'200px',
float:'left'

};
  const btn ={
    backgroundColor:'green',
    borderRadius:'10px'
  };
  const {name,price} = props.product;
  console.log(name,price);
return (
<div style={pStyle}>
  <h3> {name} </h3>
<h2> {price} </h2>
<button style={btn}>Buy Now</button>
</div>
)
};

function Friend(props){
  const style={
    color:'green',
    border:'2px solid blue',
    borderRadius: '10px',
    margin:'5px',
    boxShadow:'1px 1px 1px 1px red',
    height:'300px',
    width:'350px',
    float:'left'
  };
const {name,address,phone} = props.friend;
return (<div style={style}>
  <h3>Name : {name} </h3>
  <h4>Address : {address} </h4>
  <h5>Hobby : {phone} </h5>
  <p>i am proud to be a Bangladeshi</p>
</div>)

};

export default App;

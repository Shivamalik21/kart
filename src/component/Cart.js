import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Cart = ({prop,setQuantity,quantity,value,setvalue}) => {
  const[data,setdata]=useState(prop)
  const[total,setTotal]=useState(0)
 
   
    function inecrease(e){
  const dt=data.map((arr,index)=>{
    if(index===e){
     arr.quantity+=1;
     setTotal(total + arr.price);
     setQuantity(quantity + 1);
    }
    return arr
  })
  setdata(dt)

    }
    function decrease(e){
      const dt=data.map((arr,index)=>{
        if(index===e){
          if(arr.quantity>=1){
         arr.quantity-=1;
         setTotal(total -arr.price);
         setQuantity(quantity - 1);
         }
    }
        return arr
      })
      setdata(dt)
    
        }

function remove(e){
 setdata(data.filter((arr,index)=>{
  if(e===index){
    setTotal(total -(arr.price)*arr.quantity);
    setQuantity(quantity - arr.quantity);
    
  }
 
    return index!== e;
  }))

}
function cleardata(){
  setvalue("false")
    setdata([]);
    setTotal(0);
    setQuantity(0);
  
}
if(value==="true"){
  return (
    
  <div>
    
      {data.map((e,index)=>{
        return(
     <div id="list" key={index}>
     <div id="kt"><div style={{width:"10vw",  overflow:"hidden", height:"10vw",marginRight:"1vw"}}><img src={e.Image} style={{width:"100%", height:"100%"}}></img></div>
     <div><p>{e.name}</p>
        <p>Price: {e.price}</p>
        <button onClick={()=>{
        remove(index)
      }}>remove</button> 
       </div>
      </div>
      <div id="btn">
      <KeyboardArrowUpIcon onClick={()=>{
        inecrease(index)
      }}
      
        style={{color:"blue",cursor:"pointer"}}  />
      <p>{e.quantity}</p>
      <ExpandMoreIcon onClick={()=>{
        decrease(index)
      }} style={{color:"blue", cursor:"pointer"}}/>
      </div>
     </div>
        )
    })}
    <hr></hr>
    <div id="last">
    <button onClick={()=>{
      cleardata()
    }}>clear</button>
    <div>Total:{total}</div>
    </div>
  </div>
 
  )
 
}else{
  return(
  <div style={{textAlign:"center", marginTop:"10%",}}>
    <h1 style={{fontSize:"50px"}}>Your Bag </h1>
    <p>is currently empty...</p>
  </div>
  )

}
}

export default Cart
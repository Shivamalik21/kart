import React, { useState } from 'react'

const Cart = ({prop,setQuantity,quantity}) => {
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
  
    setdata([]);
    setTotal(0);
    setQuantity(0);
  
}

  return (
  <div>
    
      {data.map((e,index)=>{
        return(
     <div id="list" key={index}>
     <div id="kt"><div style={{width:"10vw", border:"1px solid red", overflow:"hidden", height:"10vw",marginRight:"1vw"}}><img src={e.Image}></img></div>
     <div><p>{e.name}</p>
        <p>Price: {e.price}</p>
        <button onClick={()=>{
        remove(index)
      }}>remove</button> 
       </div>
      </div>
      <div id="btn">
      <button onClick={()=>{
        inecrease(index)
      }}>add</button>
      <p>{e.quantity}</p>
      <button onClick={()=>{
        decrease(index)
      }}>sub</button>
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
}

export default Cart
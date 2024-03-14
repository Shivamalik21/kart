
import { useState } from 'react';
import './App.css';
import Cart from './component/Cart';
import Navbar from './component/Navbar';

function App() {

let arr=[{
  Image:"data:image/jpeg;base64,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",
  name:"Samsung Galaxy S8",
  price:1000,
  quantity:0
},
{
  Image:"data:image/jpeg;base64,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",
  name:"Google Pixel",
  price:800,
  quantity:0
},
{
  Image:"data:image/jpeg;base64,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",
  name:"Xiaomi Redmi Note 2",
  price:600,
  quantity:0
},
]
const [quantity, setQuantity] = useState(0)


  return (
    <div className="App">
      <Navbar quantity={quantity}/>
      <Cart prop={arr} setQuantity={setQuantity}
        quantity={quantity}/>
    </div>
  );
}

export default App;

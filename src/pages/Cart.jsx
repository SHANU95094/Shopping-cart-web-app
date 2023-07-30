import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);  //aab iss totalamount variable ko upadate karana padega 

  useEffect( () => {   //humne useeffect hook ka use kar liya aur hum sum karna chahte hai 
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );   //tumne apne total amount ko set kar diya (yahaa se hum totalamiunt ki value nikal li ), [jab cart ke andar kuch add ya remove hoga tabhi totalamount ka value change hoga ]
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? //agar cart ki length >0 hai to iska mtlb cart me luch pada hai nhi to empty hai 
    (<div>


      <div>
        {
          cart.map( (item,index) => {  //cart non empty hai to saare ke sare data ko dikha do map fun ke dwara 
            //harek single item ke liye cartitem return karunga 
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

        <div>
          <div>Your Cart</div>
          <div>Summary</div>
          <p>
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          {/* par humne to total amount banaya hi nhi hai(agar nhi hai to banao bhai ) line no 14 me banaya hai [aab iss totalamount variable ko upadate karana padega ] */}
          <p>Total Amount: ${totalAmount}</p>
          <button>
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div>
      <h1>Cart Empty</h1>
      <Link to={"/"}>  
      {/* upar wali line me {"/"} iska mtlb hai home age par jane ka link set kiye hai*/}
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;

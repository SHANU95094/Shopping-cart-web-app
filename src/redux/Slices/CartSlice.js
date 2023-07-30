import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {  //reducers fun hamesh do chije input me lete hai wo do chije kya hoti hai (1.state, 2.action)
             //mai apni state me input parameter push karna chahta hu (input parameter tumhe kya mila hai to ans -> post hai(line no 12 ) )
            state.push(action.payload); //mai state ke andar push karna chahta hu to kya push karna chahta hu to jo bhi action.payload ke andar value padi hogi (action.payload kya darsata hai yaha par ->>to jo bhi tumne input parameter kiya hoga na usko action.payload darsata hai)
        },
        remove:(state,action) => {  //remove ke andar mai filtering karna chahta hu  --->> ren=move ke andar kisi item ko remove karna chahta hu par kya mai kah sakta hu ki filter wale fun ke dwara mai usse remove kar sakta hu to ji ha bikul kar sakte hai 
            return state.filter((item) => item.id !== action.payload);  //(product.jsx ke line no 13-15 bhi dekh lena) return kar do state.filter  aab filtering kis basis par karoge input me kya aya tha to input me id ayi thi to tumn esimple id comparison  karke filter kar di
            //iss state ke andar wahi wali items ko retain karna jo actions input parameter me id ayi uske equal na ho 
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;
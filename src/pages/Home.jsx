import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


//data aa raha hai API se [API kaise call hogi --> api call hogi aync fun se fetch api se ]  aync fun kon calll karta hai --> async fun apka useeffect call karega ,,(useeffect hoo banao async fun banao,useeffect wale ke andar async fun call karo ans ayega result me store karo result aa gaya json me convert karo jo bhi state variable bana rakhe hai unme ans insert karo )
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  //json format me ek array ke andar bahut sare object aa rahe hai 
  //kya mai ye kah sakta hu ((((const [posts, setPosts] = useState([]) )))) aur jaise hi data yaha se nikle to ye kar do -->  setPosts(data); (line no 21)  iske baad line no 21
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);  //aab post ek array ho gaya pahle wo emoty array tha aab array ke andar bahut saara data aa gaya 
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect( () => {  //iske andar data leke aana hai
    fetchProductData();
  },[])

  return (  //aab mere pass wo dta ready hai jiske andar  sari post ka data pada hua hai
  //jitna bhi data mere pass availavble hai un sabhike liye cardbanu uss card ka nam product rakha hua hai
    <div>
      {
        loading ? <Spinner />  :
        posts.length > 0 ?   //agar ye true hai to ye karunga nhi to no data found display kar dunga 
        //line no 41 me media query lagay hai
        (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (   //agar mere pass sari post aa gayi to post ke upar map wala function chalana hai
            //upar wali line(line no 42) se single post bann raha hai to uske liye product  create kar diya 
            //humne key yaha par use kar li key ke andar jo bhipost hai na uss post ke  andar id padi hogi to id use kar lenge auruske baad humne post (post={post}) pass kar di as a prop 
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      }
    </div>
  );
};

export default Home;

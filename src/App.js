import React,{ useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
import Home from './Home';
import Checkout from './Checkout';
import Orders from "./Orders";
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Footer from './Footer';







const promise = loadStripe("pk_test_51HQDohC0hVAZi3eZ4OM21m6yU26MiUr7QeVyl5K7gYoncOv15QqjqnzTpQGExRRtkxAB30It45PGDdRlEgPvkyun009jPpTSOU");



function App() {
  const[{user},dispatch] = useStateValue();
   // useEffect  powerful
  //code which runs based on given condition
   useEffect(() => {
     const unsubsribe = auth.onAuthStateChanged((authUser) => {
       if (authUser) {
         //user is logged in....
         dispatch({
           type:"SET_USER",
           user:authUser,
         });

       }else{
         //user is logged out...
         dispatch({
           type:"SET_USER",
           user:null,
         });
       }
     });

     return() => {
       // Any cleanup operation....go here.
       unsubsribe();
     }


     
   }, []);

   console.log("USER IS >>>>>",user);
   

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header></Header>
            <Orders></Orders>
          </Route>


          <Route path="/login">
            <Login></Login>
           </Route>

          <Route path="/checkout">
            <Header></Header> 
            <Checkout></Checkout> 
          </Route>


           <Route path="/payment">
             <Header></Header>
             <Elements stripe={promise}>
             <Payment></Payment>
             </Elements>
           </Route>
           
           <Route path="/">
             <Header >     
             </Header>
             <Home></Home> 
             <Footer></Footer>
          </Route>
         
        </Switch>
    </div>
    </Router> 
  );
}

{/* React-Router */}

{/* Local host.com */}
{/* Local host.com/checkout */}
{/* local host.com/login */}


     

export default App;

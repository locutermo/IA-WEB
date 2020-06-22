import React,{useEffect} from 'react';
import Home from './views/Home'
import * as firebase from 'firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const config = {
  apiKey: "AIzaSyCptahMINJFGLqN4PsUR0wnyx1fdp5HWJE",
  authDomain: "ia-2020-web.firebaseapp.com",
  databaseURL: "https://ia-2020-web.firebaseio.com",
  projectId: "ia-2020-web",
  storageBucket: "ia-2020-web.appspot.com",
  messagingSenderId: "602028045274",
  appId: "1:602028045274:web:21b46ca2ed060d6a9646e3",
  measurementId: "G-E46JMPJPGT"
}

firebase.initializeApp(config)
function App(props){

    useEffect(()=>{
      console.log("Mostrando: ",firebase)
    },[])
  
    return (
      <Router>        
          <Switch>
            <Route path="/">
              <Home firebase={firebase}/>
            </Route>
          </Switch>
      </Router>
    );  
}


  
export default App;

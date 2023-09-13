
import './App.css';
import React, { useEffect } from 'react';
import Message  from './message';
import Counter from './counterApp'
import Post from './components/Post'
import NewPost from './components/NewPost'
import NavBar from './components/NavBar';


function formatName(user){
  if(user){ 
    return user.firstName + " " + user.lastName;
  }
  return 'stranger';
}

const user = {
  firstName: 'Rashid',
  lastName: 'Hussain',
  titleColor: 'red',
  fontSize:'78px'
}

const element = ( 
  <h1 style={{color:user.titleColor, fontSize: user.fontSize}}> Hello, {formatName()}! </h1>
)

// Props
function Welcome(user){
  return <h1>Hello, {user.userName} !</h1>;
}


function hello(user){
  alert("Hello" + user);
}


// Main component starts here
function App() {
  const firstName = "Muhammad  ";
  const lastName = " Majid ";
  let fullName = <h1>Hello, {firstName}{lastName}  </h1>;


  // Rendering based on conditional statements
    let isLoggedIn = true;
    const RenderButton = () =>{
      if(isLoggedIn){
        return <button>Log out</button>
      }
      else{
        return <button>Log In</button>
      }

        // Achieve same as above using turnary operater
        //return isLoggedIn ? <button>Log Out</button> : <button>Log In</button>
    }


    // Using lists and key with map function
    let number = [1, 2, 3, 4, 5];
    const res = number.map((num) => num * 2);
    //console.log(res)




  return (
    <section>
      
      <div className="container-fluid">
        <NavBar />
      </div>

      <div className="container">
        {fullName}  
        {element}
        <Welcome userName="BOB" />
        <button onClick = {() => hello(" BOB ")}>Click Me</button>

        {<RenderButton />}
          
          <p>Number using map function are: {res}</p>
          
          <Message />
          <Counter />
          <Post />
          <NewPost />
        
      </div>
    </section>
  );
}

export default App;

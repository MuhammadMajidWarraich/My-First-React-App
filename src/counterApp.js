import React, { Component } from 'react';
//import react from 'react';

 class Counter extends Component{
   render(){

      const  state = {
            count:10
        };
        
        const hello = "World Info";
        const imgUrl = "https://picsum.photos/200";

        return(
            <>
                <h1>Hello {hello} {state.count}</h1>
                <img src = {imgUrl} />
                <button>Increment</button>
            </>
        );

    }
 }

export default Counter
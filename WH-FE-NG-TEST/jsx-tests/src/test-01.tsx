/**
 * In the following React template, display an unordered list (UL) with list items (LI) within it. 
 * The content of each list item should contain two spans (SPAN), one with the name and the other with the age passed in to the DataList function. 
 * The span elements should be separated by a single space.
 */

 import React, { useState } from 'react';
 import ReactDOM from 'react-dom';
 
 function DataList(props) {
   return (
     <h2>
        <ul>
        {props.data.map((list,i)=>{
          return (
            <li key={i}>
              <span>{list.name}</span>
              <span>{' '}</span>
              <span>{list.age}</span>
            </li>
          );
  
        })}
        </ul>
     </h2>
   );
 }
 
 const data = [
   { name: 'Daniel', age: 25 },
   { name: 'John', age: 24 },
   { name: 'Jen', age: 31 },
 ];
 
 ReactDOM.render(
   <DataList data={ data } />,
   document.getElementById('test-01')
 );
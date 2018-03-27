import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';


export default function Menu(props) {
    console.log(props);
    let titles = Object.keys(props.data[0]);
    
    function Title(titles){
       return (
            titles.map((item, index)=>{
              <th key={index}>{item}</th>})
       )
    }

    function list (props) {
        const products = props.data;
        return(
            products.map((element, index) =>{
              return (<tr key={index}>
                        <td>{element.item}</td>
                        <td>{element.price}</td>
                        <td><Button bsStyle="warning">Order here</Button></td>
                    </tr>)
            }) 
        )    
    }
    return(
        <table>
            <thead>
             <tr>
              {Title(titles)}
              <th>Order</th>
             </tr>
            </thead>
            <tbody>
             {list(props)}
            </tbody>
        </table>
    )
};
// import React from 'react'
// import ReactDOM from 'react-dom'

// export default function Menu() {
// 	return (
// 		<ul>
// 		<li>Hola</li>
// 		</ul>)
// }

// function Items() {
// 	return(
// 		<li>>)
// }
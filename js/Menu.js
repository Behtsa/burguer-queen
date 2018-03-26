import React from 'react';
import ReactDOM from 'react-dom';


export default function Menu(props) {
    console.log(props);
    let titulos = Object.keys(props.data[0]);
    
    function Title(titulos){
       return (
            titulos.map((item, index)=>{
              <th key={index}>{item}</th>})
       )
    }

    function list (props) {
        const cosas = props.data;
        return(
            cosas.map((element, index) =>{
              return (<tr key={index}>
                        <td>{element.item}</td>
                        <td>{element.price}</td>
                        <td><button>Order here</button></td>
                    </tr>)
            }) 
        )    
    }
    return(
        <table>
            <thead>
             <tr>
              {Title(titulos)}
              <th>Orden</th>
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
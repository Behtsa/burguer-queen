import React from 'react';
import ReactDOM from 'react-dom';
//import Bootstrap
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';



//Elements
import Menu from './Menu';

//Data 
import data from './data';

function App(){
    return(
        <div>
            <Menu data={data.breakfast} />       
            <Menu data={data.food[0].burguers} />       
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('react-container'))
// import React from 'react'
// import ReactDOM from 'react-dom'
// import Menu from './Menu.js'
// import data from './data.js'

// function App() {
// 	return(
// 		<div>
// 			<Menu />
// 		</div>)
// }

// ReactDOM.render(<App />, document.getElementById('react-container'));
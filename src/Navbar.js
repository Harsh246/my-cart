//import { findByLabelText } from '@testing-library/dom';
import React from 'react';
import './Navbar.css';

const Navbar= (props)=> {
   
 return (

    <div className="header">
       <div style={styles.iconcontainer}>
        <img style={styles.image} src="https://www.svgrepo.com/show/57074/cart.svg" />
        <span style={styles.span}>{props.count}</span>
        </div>
     
        </div>
          
        );
    }


const styles = {

    iconcontainer:{
        position: 'relative',
    },

   image: {
            width: 30,
            height: 30,
           marginRight: '2rem',
           

          },
          span:{
borderRadius: '50%',
backgroundColor: 'orange',
marginRight: '2rem',
width:20,
height:20,
textAlign: 'center',
position: 'absolute',
    right: 0,
    top: -9
          }
}

export default Navbar;


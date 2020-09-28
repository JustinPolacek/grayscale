import React, { Component } from 'react';



class Header extends Component {
    render(){
        return(
            <div>
            <header>
               <nav> 
                  <h1>Start Bootstrap</h1>
                     <ul>
                        <a href="#"> <li>Home</li></a>
                        <a href="#"> <li>About</li></a>
                        <a href="#"> <li>Shop</li></a>
                     </ul>
               </nav>
                 <section className="hero">
                  <h1 className="scale">GRAYSCALE </h1>
                     <p> Welcome to the beginning of your life</p>
                        <button>Get Started</button>
                 </section>
            </header>
            </div>
        )
    }
    
}

export default Header;
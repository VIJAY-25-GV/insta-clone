import React from 'react'
import './home.css'
function Home(){
    return(
        <div id="home" className='container-fluid' >
            <div className='row'>
            <img src="./img/leaf.png" className="leaf1 col-lg-1 col-4"/> 
            <img src="./img/leaf1.png" className="leaf2 col-lg-2 col-5"/>
            <div className="home-outter col-lg-6">
                <div className="home-inner">
                    <h1>
                        Flower <br/>Arrangements
                    </h1>
                    <h2> . for all special occasion .</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aliquam omnis deleniti molestias aut delectus velit qui, sint eligendi consequuntur aspernatur, totam magnam eum blanditiis optio doloribus assumenda. Dicta, vero.
                    </p>
                    <div>
                        <button class="shopbtn">SHOP</button>
                        <button  class="readbtn">READ MORE</button>
                    </div>
                </div>
            </div>
            <img src="./img/homestill.png" class=" home-img col-lg-6 "/>
            <div class="homefooter">
                <p>3000+<br/><span>packages</span></p>
                <p>5000+<br/><span>bouquet sold</span></p>
                <p>7000+<br/><span>happy clients</span></p>
                <p>10+<br/><span>years of experience</span></p>
            </div>
                    </div>
        </div>
    );
}
export default Home;
import React from 'react';
import './Home.css';
import homeImage from '../../photos/landing_page_2.png'
import imageOfTom from '../../photos/skiing_photo_of_me.jpg'

function Home() {
    return(
        <>
            <div className='section'>
                <div className='sub-section'>
                    <img className='home-image' src={homeImage} alt={'no image'}/>
                </div>
                <div className='sub-section'>
                    <div className='left-image'>
                        {/* <img className='left-image-of-tom' src={imageOfTom} alt={'no image'}/> */}
                    </div>
                    <div>
                        <h2>About Nordic Up</h2>
                        <div>
                            <p>
                                Competing at an international level demands significant financial resources. Nordic Up, founded by Tom Stephen (me), aims to alleviate some of the costs associated with competition. Learn more about me and this initiative here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>Home Page</div>
        </>
    )
}

export default Home;
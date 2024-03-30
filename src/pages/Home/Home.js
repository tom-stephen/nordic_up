import React from 'react';
import './Home.css';
import homeImage from '../../photos/landing_page_2.png'
import imageOfTom from '../../photos/skiing_photo_of_me.jpg'
import skiStands from '../../photos/multiple_stands.jpg'
import Button from '../../components/button/Button.js'

function Home() {
    return(
        <>
            <div className='section'>
                <div className='home-section'>
                    <img className='home-image' src={homeImage} alt={''}/>
                </div>
                <div className='sub-section'>
                    <div className='about-nordic-up'>
                        <div className='left-image'>
                            <img className='home-image' src={imageOfTom} alt={''}/>
                        </div>
                        <div className='about-nordic-up-text'>
                            <h1>About Nordic Up</h1>
                            <p>
                                Competing at an international level demands significant financial resources. Nordic Up, founded by Tom Stephen (me), aims to alleviate some of the costs associated with competition. Learn more about me and this initiative here.
                            </p>
                            <Button innerText={'Learn More'} refPage={'about'}/>
                        </div>
                    </div>
                </div>
                <div className='sub-section'>
                    <div className='my-product'>
                        <div className='my-product-side' style={{'margin-left':'7.5%'}}>
                            <h1 className='my-product-header'>My<br/>Product</h1>
                            <img className='home-image' id='multiple-ski-stands' src={skiStands} alt={''}/>
                        </div>
                        <div className='my-product-side' style={{'margin':'7.5% 7.5% 0 0'}}>
                            <ul>
                                <li>
                                    <div className='top'>
                                        <h1 className='number-header'>01</h1>
                                        <h1 className='title-header'>High Quality Materials</h1>
                                    </div>
                                    <div className='list-paragraph'>All Ski stands are made out of the highest quality materials to ensure a long lasting product</div>
                                </li>
                                <li>
                                    <div className='top'>
                                        <h1 className='number-header'>02</h1>
                                        <h1 className='title-header'>Hand Made</h1>
                                    </div>
                                    <div className='list-paragraph'>All  ski stands are built by hand by me personally</div>
                                </li>
                                <li>
                                    <div className='top'>
                                        <h1 className='number-header'>03</h1>
                                        <h1 className='title-header'>Specialized Nordic Design</h1>
                                    </div>
                                    <div className='list-paragraph'>The stands have been designed and manufactured with nordic skiing as the primary focus.</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
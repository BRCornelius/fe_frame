import React, { useRef } from 'react';
import { Rerousel } from 'rerousel';
import {Wedge} from '../../components';
import './MockCarouselWidget.css';

export const MockCarouselWidget = () => {
    const initialRef = useRef(null);
    return <Wedge>
        <div className="carousel-container-label">
            <h1>Meet our Team</h1>
        </div>
        <div className="carousel-container">
            <Rerousel itemRef={initialRef} interval={1500} stop={false}>
                <img alt="first" src="http://placekitten.com/200/300" ref={initialRef} />
                <img alt="second" src="http://placekitten.com/200/300" />
                <img alt="third" src="http://placekitten.com/200/300" />
                <img alt="fourth" src="http://placekitten.com/200/300" />
            </Rerousel>
        </div>
    </Wedge>
}
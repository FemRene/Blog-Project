import React, { Component, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import CardItem from './card';

function Cards() {
    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch('http://blog-dev.femrene.de:8081/posts')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    })
    return (
        <>
            <Row className='justify-content-center'>
                {data.map((d,i) => (
                    <CardItem data={d}/>
                ))}
            </Row>
        </>
    )
}

class Cards2 extends Component {
    state = { } 
    render() { 
        return (
            <>
                <Row className='justify-content-center'>
                    <CardItem/><CardItem/><CardItem/><CardItem/>
                </Row>
            </>
        );
    }
}
 
export default Cards;
import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Cards from './cards';

class HomePage extends Component {
    state = { } 
    render() { 
        return (
            <>
                <section className='home'/>
                <Container>
                    <section className='cards'>
                        <Cards/>
                    </section>
                </Container>
            </>
        );
    }
}
 
export default HomePage;
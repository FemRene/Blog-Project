import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';

class ErrorPage extends Component {
    state = { } 
    render() { 
        return (
            <Container>
                <div className='text-center text-danger'>Page Not Found</div>
            </Container>
        );
    }
}

export default ErrorPage;
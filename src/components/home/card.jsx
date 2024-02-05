import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Moment from 'moment';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class CardItem extends Component {
    state = { } 
    render() { 
        return (
            <Card style={{ width: '18rem' }} className='card justify-content-center home-cards'>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{this.props.data.title}</Card.Title>
                <Card.Text>
                {this.props.data.content}
                </Card.Text>
                <Link to={{ pathname: '/blog', state: { data:this.props.data } }}>Mehr Lesen</Link>
              </Card.Body>
              <Card.Footer className="text-muted text-center">{Moment(this.props.data.date).format('DD.MM.YYYY hh:mm:ss')}</Card.Footer>
            </Card>
        );
    }
}

export default CardItem;
import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import './singleBook.css';

const SingleBook = ({ asin, title, img, price, category, selected, onClick}) => {


    return (
      <Card key={asin} style={{ width: '18rem' }} className={selected ? 'red-border-with-shadow' : null}
      onClick={onClick}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{category}</Card.Text>
          <Card.Text>{asin}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  
  export default SingleBook;
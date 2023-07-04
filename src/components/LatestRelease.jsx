import React, {useState} from "react";
import HistoryBooks from '../data/history.json';
import SingleBook from "./SingleBook";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LatestRelease = ({query, selectedAsin, setSelectedAsin}) => {


    const filteredBooks = HistoryBooks.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase()));

    

  const handleCardClick = (asin) => {
    setSelectedAsin(asin);
  };
    return(
        <>
        <Container>
            <Row>
                <Col className='d-flex flex-wrap gap-5 mt-5'>
                    {query !== ''? (
                        filteredBooks.map((book) => (
                            <SingleBook
                            selected={selectedAsin === book.asin}
                            onClick={() => handleCardClick(book.asin)}
                            asin = {book.asin}
                            title = {book.title}
                            price = {book.price}
                            category = {book.category}
                            img = {book.img}
                            key = {book.asin}
                            />
                        ))
                    ) :(
                        HistoryBooks.map((book) => (
                            <SingleBook
                            selected={selectedAsin === book.asin}
                            onClick={() => handleCardClick(book.asin)}
                            asin = {book.asin}
                            title = {book.title}
                            price = {book.price}
                            category = {book.category}
                            img = {book.img}
                            key = {book.asin}
                            />
                        ))
                    )}
                </Col>
            </Row>
        </Container>
        </>

    )
}

export default LatestRelease;
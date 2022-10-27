import React from "react";
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

class Movie extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          {this.props.movieData.map((element, idx) =>
            // <li key={idx}>{element.title}</li>
            <Card.Body key={idx}>
            <Card.Title>{element.title}</Card.Title>
            <Card.Text>
              {element.overview}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
          )}
        </Card>

        


      </>
    )
  }

}

export default Movie

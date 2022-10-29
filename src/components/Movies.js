import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

class Movies extends React.Component {
  render() {
    return (
      <>
        <Row className="row" xs={1} sm={2} md={3} lg={4}>
          <Card key={this.props.idx} className="bg-light border reactCard" style={{ width: '18rem', color: '#873434' }}>
            <Card.Body>
              <Card.Title className="cardTitle">{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.overview}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Row>

      </>

    )
  }

}

export default Movies;
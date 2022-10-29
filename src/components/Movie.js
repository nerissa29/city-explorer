import React from "react";
import Movies from "./Movies";

class Movie extends React.Component {
  render() {
    let moviesInfo = this.props.movieData.map((element, idx) => {
      return <Movies
        title={element.title}
        overview={element.overview}
        key={idx}
      />
    })

    return (
      <>
        <main>
          {moviesInfo}
        </main>
      </>
    )
  }

}

export default Movie




// ...............................................................................
//               LAB 07 CODE (this part been move to Movie parent component)
// ...............................................................................
// return (
//   <>
//     <main>
//       <Row className="row" xs={1} sm={2} md={3} lg={4}>

      
//         {this.props.movieData.map((element, idx) =>
//           // <li key={idx}>{element.title}</li>
//           <Card key={idx} className="bg-light border reactCard" style={{ width: '18rem', color:'#873434' }}>
//             <Card.Body>
//               <Card.Title className="cardTitle">{element.title}</Card.Title>
//               <Card.Text>
//                 {element.overview}
//               </Card.Text>
//               {/* <Button variant="primary">Go somewhere</Button> */}
//             </Card.Body>
//           </Card>
//         )}
//         </Row>
//     </main>
//   </>
// ...............................................................................
// ...............................................................................



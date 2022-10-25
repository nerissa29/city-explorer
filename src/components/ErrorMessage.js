// import
import React from "react";
import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';


class ErrorMessage extends React.Component {
  render() {
    return (
      <Alert variant="danger" className="alertMessage">
        <Alert.Heading>{this.props.errorMessage}</Alert.Heading>
      </Alert>
    )
  }


}

export default ErrorMessage;

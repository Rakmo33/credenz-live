import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
// import jwt_decode from "jwt-decode";

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: "",
      info: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    //console.log("Inputchange");

    const target = event.target;
    if (target) {
      //console.log("Inside if");
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    } else {
      //console.log("event is null");
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    //console.log("Current state is : " + JSON.stringify(this.state));
    // alert("Current state is : " + JSON.stringify(this.state));

    const token = localStorage.getItem("user");
    //console.log(JSON.parse(token));
    // var decoded = jwt_decode(token);

    const accessToken = JSON.parse(token).accessToken;

    //const token = localStorage.getItem("token")
    //console.log(accessToken);
    try {
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/addupdate`,
          {
            event: "update testing",
            headline: this.state.headline,
            info: this.state.info,
          },
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((response) => {
          //console.log("updates stored" + JSON.stringify(response.data));
        })
        .catch((error) => {
          //console.log(error);
        });
    } catch (e) {
      // alert("Axios error!" + e);
    }
  }

  addUpdate = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Update headline</Form.Label>
          <Form.Control
            id='headline'
            type='text'
            placeholder='Enter Event Name'
            name='headline'
            onChange={this.handleInputChange}
            value={this.state.headline}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Update info</Form.Label>
          <Form.Control
            id='info'
            onChange={this.handleInputChange}
            value={this.state.info}
            name='info'
            as='textarea'
            rows={3}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  };

  editUpdate = () => {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            id='headline'
            type='text'
            placeholder='Enter Event Name'
            name='headline'
            onChange={this.handleInputChange}
            value={this.state.headline}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Event details </Form.Label>
          <Form.Control
            id='info'
            onChange={this.handleInputChange}
            value={this.state.info}
            name='info'
            as='textarea'
            rows={3}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  };

  render() {
    let form = null;

    if (this.props.choice === "1") {
      form = this.addUpdate();
    } else {
      form = this.editUpdate();
    }
    return <Container>{form}</Container>;
  }
}

export default Update;

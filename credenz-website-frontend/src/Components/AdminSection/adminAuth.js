import React, { Component } from "react";
import { Row, Container } from "react-bootstrap";
import Admin from "./Admin";
import Alert from "../Alert/alert";

class AdminAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdmin: false,
      adminPass: "secretpassword",
      userpass: "",
      showAlert: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeHandler = (event) => {
    const target = event.target;
    if (target.id === "adminpass") {
      this.setState((prevState) => ({
        ...prevState.userpass,
        userpass: target.value,
      }));
    }
  };

  setShow = (value) => {
    let tempState = { ...this.state };
    tempState.showAlert = value;

    this.setState(tempState);
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.userpass === this.state.adminPass) {
      let tempState = { ...this.state };
      tempState.showAdmin = true;
      tempState.showAlert = false;

      this.setState(tempState);
    } else {
      let tempState = { ...this.state };
      tempState.showAlert = true;

      this.setState(tempState);
    }
  };

  render() {
    return (
      <div style={{ marginTop: "20vh", padding: "20px" }}>
        <Container>
          {this.state.showAlert ? (
            <Alert
              show={this.state.showAlert}
              setShow={this.setShow}
              var={"danger"}>
              {" "}
              Authentication Failed! Please Contact Admin Team or Webmasters for
              Further Instructions.{" "}
            </Alert>
          ) : null}
        </Container>
        {this.state.showAdmin ? (
          <Admin />
        ) : (
          <Container>
            <Row>
              <form method='post'>
                <div className='form-group'>
                  <h2>Enter Password to Proceed</h2>
                  <div className='input-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='adminpass'
                      name='password'
                      placeholder='Password'
                      required='required'
                      onChange={this.onChangeHandler}
                    />
                  </div>
                </div>

                {/* <div className='form-group'> */}
                <div>
                  <button
                    type='submit'
                    className='btn btn-success btn-lg'
                    onClick={(e) => this.onSubmit(e)}>
                    Submit
                  </button>
                  <span></span>
                </div>
              </form>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

export default AdminAuth;

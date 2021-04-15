import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertDismissibleExample = (props) => {
  if (props.show) {
    return (
      <Alert
        variant={props.var}
        onClose={() => props.setShow(false)}
        dismissible>
        <p>{props.children}</p>
      </Alert>
    );
  }
  return null;
};

export default AlertDismissibleExample;

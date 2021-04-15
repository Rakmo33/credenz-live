import { useState, useEffect } from "react";
import axios from "axios";

export const AllEvents = () => {
  const [eventDesc, setEventDesc] = useState("");
  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_API_URL}/allevents`)
        .then(function (response) {
          //alert(JSON.stringify(response.data[0]["event_name"]));
          setEventDesc(response.data);
        });
    } catch (e) {
      // alert("Axios error!" + e);
    }
  }, []);

  return eventDesc;
};

export const EVENTS = AllEvents;

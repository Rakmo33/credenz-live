import React, { useState, useEffect } from "react";
import Table from "./table";
import Social from "../sideEventButton/sideEvent";

//import Footer from "../Footer/footer";
import axios from "axios";

const Leaderboard = () => {
  const [input, setInput] = useState("");
  const [default_op, setDefault] = useState("Username");
  const [classes, setClasses] = useState("");
  const [Score, setScore] = useState([]);
  let users = [];

  /*{
      rank: 1,
      name: "abc",
      college: "pict",
      score: 200,
    },

    */

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/leaderboard`,
    })
      .then((response) => {
        /*//console.log(
              response.data.map((obj) => {
                return obj.event_username;
              })
            );*/
        //users= response.data;
        setScore(response.data);
      })
      .catch((error) => {
        //console.log(error);
      });
  }, []);

  users = Score;
  let rank = [];
  var i;
  for (i = 0; i < users.length; i++) {
    rank[i] = i + 1;
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    if (classes === "") setClasses("active");
    else setClasses("");
  };

  const handleSelect = (e) => {
    var text = e.target.innerHTML;

    setDefault(text);
    setClasses("");
  };

  if (input.length > 0) {
    try {
      switch (default_op) {
        case "Username":
          users = users.filter((u) => {
            return u.username.match(input);
          });
          break;
        case "Institution":
          users = users.filter((u) => {
            return u.college.match(input);
          });
          break;
        case "Score":
          users = users.filter((u) => {
            return u.score.match(input);
          });
          break;
        default:
          return "Invalid!";
      }
    } catch (e) {
      setInput("");
      // alert("invalid text");
    }
  }

  return null;

  // return (
  //   <div className='leaderBoardTab' style={{ minHeight: "100vh" }}>
  //     <Social />
  //     <div
  //       className='row'
  //       style={{
  //         justifyContent: "center",
  //         marginBottom: "20px",
  //         marginTop: "20px",
  //       }}>
  //       <div className='col-xl-9 col-md-9  mt-4'>
  //         <div className='row leaderboard-head'>
  //           <div className='search-box'>
  //             <input
  //               type='text'
  //               id='search'
  //               placeholder='Search..'
  //               onChange={handleSearch}
  //               value={input}
  //               autoComplete='off'></input>
  //             <div className='dropdown'>
  //               <div className='default' onClick={handleClick}>
  //                 {default_op}
  //               </div>
  //               <ul className={classes}>
  //                 <li onClick={handleSelect}>Username</li>
  //                 <li onClick={handleSelect}>Institution</li>
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //         <div className='row body'>
  //           <Table users={users} rank={rank}/>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Leaderboard;

import React from "react";
import "./leaderboard.css";

const Table = ({users, rank}) => {
 
  var i=0;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Username</th>
          <th scope="col">Institution</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        {/*users.map((user,index) => (

          //user.username===localStorage.getItem('user')?localStorage.setItem("Rank"): 

          <tr key={index}>
            <td>{rank[i++]}</td>
            <td>{user.username}</td>
            <td>{user.college}</td>
            <td>{user.score}</td>
          </tr>
        ))*/}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        Track your score against your peers.
      </tbody>
      
    </table>
  );
};

export default Table;

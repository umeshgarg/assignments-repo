import React, { useState, useEffect } from "react";

function Test(props) {
  const [count, setCount] = useState(0);
  const [currentResource, setCurrentResource] = useState('posts');
  const [row, setRow] = useState({});
  
  function changeResource(newResource) {
    console.log(newResource);
    setCurrentResource(newResource);
  }

  function increaseCount() {
    setCount(count + 1);
  }
  function decreaseCount() {
    setCount(count - 1);
  }

  useEffect(() => {
    if (count !== 0){
    fetch(`https://jsonplaceholder.typicode.com/${currentResource}/${Math.abs(count)}`)
    .then(response => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      setRow(jsonData);
    })
    }
  }, [count, currentResource]);

  // const dataTypes = ["posts", "todos", "comments", "users", "photos"];
  const heading = {
    "posts": ["userId","id","title","body"],
    "todos": ["userId","id","title","completed"],
    "comments": ["postId","id","name","email","body"],
    "users": ["address","company","email","id","name","phone","username","website"],
    "photos": ["albumId","id","thumbnailUrl","title","url"],
  }

  return (
    <>
      <h1>{count}</h1>
      <select
        onChange={(event) => changeResource(event.target.value)}
        value={currentResource}
      >
        <option value="posts">Posts</option>
        <option value="todos">To-Do</option>
        <option value="comments">Comments</option>
        <option value="users">Users</option>
        <option value="photos">Photos</option>
      </select>
      <br></br>
      <br></br>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <br></br>
      {
      <div>
      <h3 align="center">{currentResource.charAt(0).toUpperCase() + currentResource.slice(1)} Table </h3>
      <table align='center' border='1' cellSpacing='2' cellPadding='5' id="table">
        <thead>
            <tr>
              {heading[currentResource].map((item) => {return <th>{item}</th>})}
            </tr>
        </thead>
        <tbody>
            {
              Object.values(row)
              .map(value => <td>{value}</td>)
            }
        </tbody>
      </table>
      </div>}
    </>
  );
}
export default Test;
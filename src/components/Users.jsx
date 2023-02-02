import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
`;

function Users() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=4")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return posts.map((users) => {
    return (
      <>
        <ul>
          <StyledLi>{users.name}</StyledLi>
        </ul>
      </>
    );
  });
}

export default Users;

import React from 'react';



function getUsers() {
  fetch(`/api/user`)
  .then((response) => response.json())
  .then(users => console.log(users));
}

function User() {
  return (
    <div>
      This lists all the users:
      {getUsers()}
    </div>
  );
}

export default User;
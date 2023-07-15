import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions/actions';
import './App.css';
import Try from './reducers/Try';

const App = () => {
  // const dispatch = useDispatch();
  // const { users, isLoading, error } = useSelector((state) => state);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  // if (isLoading) {
  //   return <p className="loading">Loading...</p>;
  // }

  // if (error) {
  //   return <p className="error">Error: {error}</p>;
  // }

  return (
    <div className="container">
      {/* <h1>Users</h1>
      {users.map((user) => (
        <div key={user.login.uuid} className="user">
          <img src={user.picture.medium} alt={user.name.first} />
          <h2>{user.name.first} {user.name.last}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      ))} */}
      <Try/>
    </div>
  );
};

export default App;

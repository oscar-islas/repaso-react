import React, { useState } from 'react';
import { fetchUser } from '../features/userSlice';
import { useDispatch } from 'react-redux';
const Form = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const searchUser = (e) => {
    e.preventDefault();
    //Action
    dispatch(fetchUser(searchTerm));
  };

  return (
    <div>
      <form onSubmit={searchUser}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};

export default Form;

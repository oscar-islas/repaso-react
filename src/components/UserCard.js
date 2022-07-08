import React from 'react';
import { useSelector } from 'react-redux';

const UserCard = () => {
  const { avatar_url, name, repos_url, followers, following, public_repos } =
    useSelector((state) => state.user.value);
  return (
    <div>
      <img src={avatar_url} alt="profile" />
      <h3>{name}</h3>
      <a href={repos_url}>Repositorios: {public_repos} </a>
      <h4>Seguidores: {followers}</h4>
      <h4>Siguiendo: {following}</h4>
    </div>
  );
};

export default UserCard;

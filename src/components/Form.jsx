import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [email, setEmail] = useState("");
  const { getUserInfo } = props;

  const addUser = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      live.trim().length === 0 ||
      email.trim().length === 0
    ) {
      alert("Please fill a valid value for all input.");
      return null;
    }

    const userInfo = {
      name,
      live,
      email,
    };
    getUserInfo(userInfo);
    setName("");
    setLive("");
    setEmail("");
  };

  return (
    <div className='form-container'>
      <h1>Add a new list.</h1>
      <form onSubmit={addUser}>
        <div className='row'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='row'>
          <label htmlFor='live'>Live</label>
          <input
            type='text'
            name='live'
            id='live'
            value={live}
            onChange={(e) => setLive(e.target.value)}
          />
        </div>
        <div className='row'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default Form;

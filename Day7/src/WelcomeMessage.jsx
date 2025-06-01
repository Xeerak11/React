import React, { useContext } from 'react';
import { UserContext } from './UserContext';

function WelcomeMessage() {
  const { user, email, changeUser, changeEmail } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome, {user}!</h1>
      <p>Your email is: {email}</p>

      <button onClick={() => changeUser("Zara")}>Change User to Zara</button>
      <button onClick={() => changeEmail("zara@example.com")}>Change Email</button>
    </div>
  );
}

export default WelcomeMessage;

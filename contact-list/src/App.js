import React from 'react';
import ContactList from './ContactList' ;

function App() {
  return (
    <div>
      <ContactList contact={{name:"Mr. NandhaKumar",Phone:"+91 9876543210", email:"nandhakumar@rently.com"}} />
      <ContactList contact={{name:"Mr. NandhaKumar",Phone:"+91 9876543210", email:"nandhakumar@rently.com"}} />
      <ContactList contact={{name:"Mr. NandhaKumar",Phone:"+91 9876543210", email:"nandhakumar@rently.com"}} />
      <ContactList contact={{name:"Mr. NandhaKumar",Phone:"+91 9876543210", email:"nandhakumar@rently.com"}} />
    </div>
  );
}

export default App;

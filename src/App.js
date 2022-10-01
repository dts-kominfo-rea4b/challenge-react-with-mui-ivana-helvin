import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Grid from '@mui/material/Grid';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state

  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  const clickHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <Header />
      <br></br>
      <Grid container>
        <Grid item xs>
          <ContactForm clickHandler={clickHandler} />
        </Grid>
        <Grid item xs>
          {contacts.map((d) => (
              <Contact data={d} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

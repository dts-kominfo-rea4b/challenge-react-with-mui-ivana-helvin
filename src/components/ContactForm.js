// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card


import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const ContactForm = ({ clickHandler }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [photo, setPhoto] = useState('');
    const [newContact, setNewContact] = useState([]);

    useEffect(() => {
        setNewContact({name: name, phone: phone, email: email, photo: photo});
    }, [name, phone, email, photo]);

    return (
        <Card sx={{ width: 350 }}>
            <CardContent>
                <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField required id="name" label="Name" variant="filled" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField required id="phone" label="Phone" variant="filled" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <TextField required id="email" label="Email" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField required id="photo" label="Photo URL" variant="filled" value={photo} onChange={(e) => setPhoto(e.target.value)} />
                </Box>
            </CardContent>
            <CardActions>
                <Button variant="text" onClick={() => {
                    clickHandler(newContact);
                    setName('');
                    setPhone('');
                    setEmail('');
                    setPhoto('');
                }}>Add New</Button>
            </CardActions>
        </Card>
            /* <div className="todo-form">
            <span>
                    
                
            </span>
        </div> */
    );
}

export default ContactForm;
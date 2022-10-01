// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            
                {data.map((d, index) => (
                    <div>
                    <ListItem key={index} alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={d.photo} />
                        </ListItemAvatar>

                        <ListItemText
                            primary={d.name}
                            secondary={
                                <React.Fragment>
                                    {d.phone}
                                    <br></br>
                                    {d.email}
                                </React.Fragment>
                            }
                        />
                    </ListItem>

                    <Divider variant="inset" component="li" />
                    </div>
                ))}
                
        </List>
    );
};

export default Contact;

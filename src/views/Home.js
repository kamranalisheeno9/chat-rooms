import React, { useEffect, useState } from 'react'
import Item from '@mui/material/ListItem';
import './home.css'
import { Typography, TextField, Button, Card, Grid, CardActions, CardContent } from '@mui/material';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function Home() {

    const [lobbies, setLobbies] = useState([])
    const [room, setRoom] = useState("")


    useEffect(() => {
        setLobbies(lobbies)

    }, [room])

    const addRoom = () => {
        {
            room != "" ?
                lobbies.push(room) ||
                setLobbies([...lobbies])
                :
                setRoom("")

        }
        setRoom("")
    }

    return (

        <div id="message container">


            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4} md={4} lg={3} >
                    <Typography variant="h5" sx={{ marginTop: 2, }} component="h5">
                        Chat Rooms
                    </Typography>

                    {lobbies.map((lobby, index) => {
                        return (
                            <Item key={index}>
                                <Card variant="outlined" className="card-body">
                                    <CardContent>

                                        <Typography variant="h5" component="div">
                                            {lobby}
                                        </Typography>

                                    </CardContent>
                                    <CardActions sx={{justifyContent: 'center'}} >
                                        <Link to="/covid" className="join-link">  <Button size="small" variant="contained">Join Room</Button></Link>
                                    </CardActions>
                                </Card>
                            </Item>
                        )
                    })}

                </Grid>
                <Grid item xs={8} md={8} lg={6} >
                    <Item>
                        <Typography variant="h5" component="h5">
                            Create A Room
                        </Typography>
                    </Item>
                    <Item>
                        <TextField className="search-bar" id="outlined-basic" value={room} onChange={(e) => setRoom(e.target.value)} label="Room Name" variant="outlined" />
                        <Button variant="text" sx={{ marginLeft: 2 }} onClick={() => addRoom()}>New Room</Button>
                    </Item>
                </Grid>

            </Grid>

        </div>





    )
}

export default Home;

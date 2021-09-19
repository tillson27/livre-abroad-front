import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import ChipInput from 'material-ui-chip-input';
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Box from '@mui/material/Box';
import Popup from 'react-popup';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';



export default function BookSubmission() {
    const [yourChips, setYourChips] = useState([])
    const [disableButton, setDisableButton] = useState(true)
 
    function handleAddChip(chip) {
        setYourChips(oldArray => [...oldArray, chip]);
        if (disableButton == true) {
            setDisableButton(false)
        }
    }

    function handleDeleteChip(chip, index) {
        setYourChips(yourChips.filter(item => item !== chip));
            if (yourChips.length == 1) {
                setDisableButton(true)
            }
    }

    function doSomethingThenCall(next) { // Post the books in the DB
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                book_name: yourChips,
                id: 'be451d2b-f5e1-4786-9846-7112870677c3',
                user_id: '97763bfb-026b-4053-b471-156098212576'
            })
        };
        fetch('http://localhost:8000/books/', requestOptions)
            .then(response => response)
            .then(data => {
                fetch('http://localhost:8000/books/97763bfb-026b-4053-b471-156098212576/')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    localStorage.setItem('location', data);
                    next();
                });
            });
    }
    return (
        <div style={{ display: 'flex', width: '70%', flexDirection: 'column', height: '100%' }}>
            <ChipInput
                value={yourChips}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
                placeholder="Book Title"
            />
            <div style = {{ marginTop: '20%', display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                <AwesomeButtonProgress
                    disabled={disableButton}
                    type="secondary"
                    size="medium"
                    button-secondary-border="red"
                    action={(element, next) => doSomethingThenCall(next)}
                >
                    Plan my Trip
            </AwesomeButtonProgress>
            </div>

        </div>
    );
}



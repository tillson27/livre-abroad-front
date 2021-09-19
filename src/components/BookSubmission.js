import React, { useState } from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import ChipInput from 'material-ui-chip-input';
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

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
                id: '',
                user_id: '4175c756-1fcc-4b13-8755-6fd7e48d323c'
            })
        };
        fetch('http://localhost:8000/books/', requestOptions)
            .then(response => response)
            .then(data => next());
    }
    return (
        <div style={{ display: 'flex', width: '50%', flexDirection: 'column' }}>
            <ChipInput
                value={yourChips}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip, index) => handleDeleteChip(chip, index)}
            />
            <div style = {{ marginTop: '10%', display: 'flex',  justifyContent:'center', alignItems:'center' }}>
            <AwesomeButtonProgress
                disabled={disableButton}
                type="secondary"
                size="medium"
                action={(element, next) => doSomethingThenCall(next)}
            >
                Plan my Trip
            </AwesomeButtonProgress>
            </div>
        </div>
    );
}



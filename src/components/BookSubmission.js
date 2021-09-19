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
    function handleAddChip(chip) {
        setYourChips(oldArray => [...oldArray, chip]);
    }

    function handleDeleteChip(chip, index) {
        setYourChips(yourChips.filter(item => item !== chip));
    }

    function doSomethingThenCall(next) {
        fetch('http://localhost:8000/customer/')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            next();
        });
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



import { useState } from 'react';
import { useSelector } from 'react-redux';
// import * as React from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';
// import { TextField } from '@mui/material';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';

const decide1 = [
    {
        value: 'Short',
        label: 'Short'
    },
    {
        value: 'Long',
        label: 'Long'
    }
];
const decide2 = [
    {
        value: 'Yes',
        label: 'Yes'
    },
    {
        value: 'No',
        label: 'No'
    }
];

function Input() {
    let message = `Fill out the options from below to help us find the correct government investment schemes for you according to your preferences.`;

    return (
        <section class="section-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h2 class="section-title">Government Investment Schemes</h2>

                        <p class="section-subtitle">{message}</p>
                    </div>

                    <div class="col-sm-6 col-md-4">
                        <div class="team-item">
                            <h3> Lock In Period</h3>
                            <div class="team-info">
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' }
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Select"
                                            defaultValue="Small"
                                            helperText="Your comfortable lock-in period"
                                        >
                                            {decide1.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4">
                        <div class="team-item">
                            <h3> Tax benefits</h3>
                            <div class="team-info">
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' }
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Select"
                                            defaultValue="Yes"
                                            helperText="Are you looking for tax benefits?"
                                        >
                                            {decide2.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4">
                        <div class="team-item">
                            <h3> Aggresive approach</h3>
                            <div class="team-info">
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' }
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Select"
                                            defaultValue="No"
                                            helperText="Understand your risk appetite"
                                        >
                                            {decide2.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-12">
                        <div class="output-item">
                            <h3>Investment schemes chosen for you </h3>
                            <div class="team-info">
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': { m: 1, width: '25ch' }
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div class="out">
                                        <button class="btn-button" type="text">
                                            hello
                                        </button>
                                    </div>

                                    <div class="out">
                                        <button class="btn-button" type="text">
                                            hello
                                        </button>
                                    </div>

                                    <div class="out">
                                        <button class="btn-button" type="text">
                                            hello
                                        </button>
                                    </div>

                                    <div class="out">
                                        <button class="btn-button" type="text">
                                            hello
                                        </button>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Input;

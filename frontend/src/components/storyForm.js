import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { createStory } from '../services/storyServices';

export default function StoryForm({sessionId}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddStory = () => {
        if (inputValue.trim() !== '') {
            createStory(inputValue,sessionId);
            setInputValue('');
        }
    };

    const handleClearInput = () => {
        setInputValue('');
    };

    const isInputEmpty = inputValue.trim() === '';
    const isAddButtonDisabled = isInputEmpty;

    return (
        <Box display="flex" alignItems="center" margin='10'>
            <TextField
                label="Story"
                multiline
                rows={3}
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                inputProps={{ maxLength: 255 }}
                sx={{ marginBottom: '16px', width: '100%', overflowY: 'auto' }}
            />
            <Box sx={{ marginLeft: '8px' }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddStory}
                    disabled={isAddButtonDisabled}
                    sx={{ marginBottom: '8px', width: '100%' }}
                >
                    Add Story
                </Button>
                <Button
                    variant="contained"
                    onClick={handleClearInput}
                    disabled={isInputEmpty}
                    sx={{ width: '100%' }}
                >
                    Clear
                </Button>
            </Box>
        </Box>
    );
}

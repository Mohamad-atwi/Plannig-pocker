import * as React from 'react';
import Box from '@mui/material/Box';
import "./DeckCard.css";
export default function Overflow() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (

        <div className='Deck'>
            <Box
                component="div"
                sx={{
                    overflow: 'auto',
                    my: 2,
                    p: 1,
                    bgcolor: (theme) =>
                        theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                    color: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                        theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    borderRadius: 2
                }}
            >
                <div class="deckcard">
                    {numbers.map((number) => <div style={{ width: '100px', height: '10rem', backgroundColor: 'red', marginRight: '1rem' }} >{number}</div>)}
                </div>

            </Box>
        </div>
    );
}

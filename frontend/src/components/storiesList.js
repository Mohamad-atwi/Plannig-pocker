import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StorieCard from './storie';
import { IconButton, Box } from '@mui/material';
import IosShareIcon from '@mui/icons-material/IosShare';
import { CSVLink } from 'react-csv';

export default function StoriesList({ stories, setStoryId, story, setStory }) {
    const handleChange = (event, value) => {
        event.preventDefault();
        setStory(stories[value - 1]);
        setStoryId(stories[value - 1].id);
    };

    const handleExport = () => { 
        const csvData = [
            ['Description'], // Header row
            ...stories.map(description => [description.text]) // Data rows
        ];
        return csvData;
    }

    return (
        <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: '100%', display: "flex", justifyContent: "center", alignContent: "initial" }}>

                <StorieCard story={story} />
                <CSVLink data={handleExport()} filename="issues.csv">
                    <IconButton color="primary" aria-label="export" onClick={handleExport}>
                        <IosShareIcon />
                    </IconButton>
                </CSVLink>

            </Box>
            <Pagination count={stories.length} onChange={handleChange} />

        </Stack>
    );
}

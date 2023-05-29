import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StorieCard from './storie';

export default function StoriesList({stories,setStoryId, story, setStory}) {
    const handleChange = (event, value) => {
        event.preventDefault();
        setStory(stories[value-1]);
        setStoryId(stories[value - 1].id);
    };

    return (
        <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <StorieCard story={story} />
            <Pagination count={stories.length} onChange={handleChange} />
        </Stack>
    );
}

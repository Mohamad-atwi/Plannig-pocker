import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import StorieCard from './storie';

export default function StoriesList({stories,setStoryId}) {
    const [story, setStory] = useState(stories[0]);
    const handleChange = (event, value) => {
        console.log(value);
        setStory(stories[value-1]);
        setStoryId(value);
    };
    useEffect(() => { console.log(stories[0]);console.log(story)},[])
    return (
        <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <StorieCard story={story} />
            <Pagination count={stories.length} onChange={handleChange} />
        </Stack>
    );
}

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
    username,
    card
) {
    return { username, card };
}

const rows = [
    createData('Frozen yoghurt1', 159),
    createData('Frozen yoghurt2', 159),
    createData('Frozen yoghurt3', 159),
    createData('Frozen yoghurt4', 159),
    createData('Frozen yoghurt55', 159),
    createData('Frozen yoghurt6', 159),
    createData('Frozen yoghurt87', 159),
    createData('Frozen yoghurt8', 159),
    createData('Frozen yoghurt9', 159),
    createData('Frozen yoghurt99', 159),
    createData('Frozen yoghurt999', 159),
    createData('Frozen yoghurt7', 159),
    createData('Frozen yoghurt54', 159),
    createData('Frozen yoghurt43', 159),
    createData('Frozen yoghurt22', 159),
    createData('Frozen yoghurt12', 159),
    createData('Frozen yoghurt11', 159),
    createData('Frozen yoghurt123', 159),
    createData('Frozen yoghurt5', 159),
    createData('Frozen yoghurt', 159),
];

export default function EstimationTable() {

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: '90vh' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Username</TableCell>
                            <TableCell >Card</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.username}
                            >
                                <TableCell component="th" scope="row">
                                    {row.username}
                                </TableCell>
                                <TableCell>{row.card}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

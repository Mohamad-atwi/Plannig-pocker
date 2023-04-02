import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function EstimationTable({estimations, hasVoted}) {

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: '90vh' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell ><b>Username</b></TableCell>
                            <TableCell ><b>Card</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {estimations.map((estimation) => (
                            <TableRow
                                key={estimation.id}
                            >
                                <TableCell component="th" scope="row">
                                    {estimation.username}
                                </TableCell>
                                <TableCell>{hasVoted ? estimation.card : ''}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

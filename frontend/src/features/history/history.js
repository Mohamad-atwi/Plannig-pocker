import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import './history.css';

import * as sessionServices from "../../services/sessionServices";
import { useNavigate } from 'react-router-dom';
function History() {
    const navigate = useNavigate();
    const [session, setSession] = useState([]);
    const [sessionStatus, setSessionStatus] = useState(false);
    const fetchSession = async () => {
        const userId = JSON.parse(sessionStorage.getItem("user")).id;
        await sessionServices.getSessionsByUser(userId).then((data) => {
            setSession(Object.values(data));
            console.log();

        });
    };

    useEffect(() => {
        fetchSession()
    }, []);

    const go = (id) => {
        navigate(`/session/history/${id}`);
    }

    return (
        <div className='table'>
            <h1>Session History</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Session Name</TableCell>
                            <TableCell>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {session.map((session) => (
                            <TableRow key={session.id}>
                                <TableCell>{session.title}</TableCell>
                                <TableCell>{new Date(session.created_at).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <Button
                                    onClick={() => go(session.id)}
                                    >Go</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default History;

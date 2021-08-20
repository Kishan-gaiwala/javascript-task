import { Grid, Table, TableCell, TableHead, TableRow, Typography, Paper } from '@material-ui/core';
import React from 'react';
import { getDataAPI } from '../api/DataAPI';

const User = () => {

    const [info, setInfo] = React.useState([]);

    React.useEffect(() => {
        loadData();
    }, [])

    const loadData = () => {
        getDataAPI().then(response => { //Api is in different file called DataAPI
            if (response) {
                setInfo(response)
                return
            }
            setInfo([])
        })
    }

    // Output takes some time beacuse of more data
    return (
        <Grid container justify="center" alignItems="center">
            <Grid item>
                <Paper style={{ marginTop: 100 }}>
                    <Typography>This takes some second beacuse of more data</Typography>
                    <Table>
                        <TableHead>
                            <TableCell>UserID</TableCell>
                            <TableCell>Id</TableCell>
                            <TableCell>Title</TableCell>
                        </TableHead>
                        {
                            info.map((obj) => (
                                <TableRow>
                                    <TableCell>
                                        <Typography>
                                            {obj.userId}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            {obj.id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography>
                                            {obj.title}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </Table>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default User;
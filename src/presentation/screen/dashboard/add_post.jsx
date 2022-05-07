import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {render} from "react-dom";
import {styled} from "@mui/material/styles";

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export default function AddPost() {
    return(
        <>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
    <h1>Add post here</h1>
            </Box>

        </>
    )

}
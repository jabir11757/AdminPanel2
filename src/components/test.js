import { Box, Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import React from 'react';


const Test = (props) => {
    return ( 

        <Box style={{height:200, width:200}}>
            <Typography variant='h3' style={{color:grey[700]}}>
                {props.intro}
                
            </Typography>
        </Box>
     );
}
 
export default Test;
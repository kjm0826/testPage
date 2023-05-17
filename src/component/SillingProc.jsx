import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function SillingProc() {
  return (
    <div>
      <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                width: 110,
                height: 50,
                },
            }}
            >
            <Button ><b>보관택번호: </b></Button>
            <TextField id="outlined-basic" label="보관택번호" variant="outlined" />
        </Box>

    </div>
  )
}

import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function InOutProc() {

  const [alignment, setAlignment] = React.useState('');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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
            text: "123",
            },
        }}
        >
        <Button aria-label='left'><b>입/출고구분 : </b></Button>

        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            >
                
        <ToggleButton value="IN">입고</ToggleButton>
        <ToggleButton value="OUT">출고</ToggleButton>
        </ToggleButtonGroup>

    </Box>

    </div>
  )
}

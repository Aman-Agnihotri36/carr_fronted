import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

export default function Sli({ formData: handleSliderChange }: any) {
    return (
        <Box sx={{ width: 300, spaceY: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 'medium' }}>
                    Operating Systems
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                    6%
                </Typography>
            </Box>
            <Slider
                size="medium"
                value={6}
                onChange={(event: any, value: any) => handleSliderChange(value)}
                min={60}
                max={100}
                step={1}
                aria-label="Operating Systems Percentage"
                valueLabelDisplay="auto"
                sx={{
                    '& .MuiSlider-thumb': {
                        backgroundColor: '#e11d48', // Red thumb
                    },
                    '& .MuiSlider-track': {
                        backgroundColor: '#8b5cf6', // Purple track
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: '#4b5563', // Darker gray rail
                    },
                }}
            />
        </Box>
    );
}
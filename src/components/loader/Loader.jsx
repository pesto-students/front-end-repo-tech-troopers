import React from 'react';
import { Spinner, Box } from '@chakra-ui/react';

const LoadingOverlay = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            zIndex="9999"
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="rgba(0, 0, 0, 0.5)"
        >
            <Spinner size="xl" color="white" />
        </Box>
    );
};

export default LoadingOverlay;

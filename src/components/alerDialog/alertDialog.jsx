import React from 'react';
import {
  AlertDialog as ChakraAlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';

const AlertDialog = ({ isOpen, onClose, errorMessage }) => {
  return (
    <ChakraAlertDialog isOpen={isOpen} onClose={onClose}>
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogBody>{errorMessage}</AlertDialogBody>
        <AlertDialogFooter>
          <Button colorScheme='gray' onClick={onClose}>
            Ok
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ChakraAlertDialog>
  );
};

export default AlertDialog;

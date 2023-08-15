import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const ModalComponent = ({ isOpen, onClose, title, body, buttons }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg='#f1eeec' maxW="90%">
        <ModalHeader align='center'>
          <div className='text-primary align-center font-ellen text-2xl md:text-4xl'>
            {' '}
            {title}
          </div>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowX="auto">
          {/* Your modal content here */}
          {body}
        </ModalBody>
        <ModalFooter>{buttons}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;

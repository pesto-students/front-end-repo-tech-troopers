import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const InterestedUsers = ({ participants }) => {
  return (
    <Table variant='striped' colorScheme='gray'>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Phone Number</Th>
          <Th>Email</Th>
        </Tr>
      </Thead>
      <Tbody>
        {participants.map((participant, index) => (
          <Tr key={index}>
            <Td>{participant.name}</Td>
            <Td>{participant.phoneNumber}</Td>
            <Td>{participant.email}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default InterestedUsers;

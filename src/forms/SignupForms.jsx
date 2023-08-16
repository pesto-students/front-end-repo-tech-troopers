import {
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  VStack,
  Button,
  Text,
} from '@chakra-ui/react';

const SignUpForm = ({ onSubmitStep1, errors, register, isSubmitting }) => {
  return (
    <form onSubmit={onSubmitStep1}>
      <VStack spacing='10rem'>
        <div className='self-stretch relative text-[1.25rem] leading-[130%] font-work text-gray-dark text-center'>
          Connecting hearts, sharing dreams, and building communities – one
          login at a time.
        </div>
      </VStack>
      <VStack spacing='10rem'>
        <FormControl
          id='name'
          isInvalid={!!errors.name}
          className='flex flex-col justify-center items-center mb-8 mt-8'
        >
          <Input
            type='text'
            placeholder='Name'
            h='4rem'
            w={['full', 'full', '50%']}
            size='sm'
            style={{ backgroundColor: 'white' }}
            autoFocus={true}
            {...register('name')}
          />
          <FormErrorMessage style={{ textAlign: 'center' }}>
            {errors.name?.message}
          </FormErrorMessage>
        </FormControl>
      </VStack>
      <FormControl
        id='email'
        isInvalid={!!errors.email}
        className='flex flex-col justify-center items-center mb-8 '
      >
        <Input
          placeholder='E-mail'
          type='email'
          h='4rem'
          w={['full', 'full', '50%']}
          size='sm'
          style={{ backgroundColor: 'white' }}
          autoFocus={true}
          {...register('email')}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        id='phoneNumber'
        isInvalid={!!errors.phoneNumber}
        className='flex flex-col justify-center items-center mb-8 '
      >
        <Input
          placeholder='Phone number'
          type='tel'
          h='4rem'
          w={['full', 'full', '50%']}
          size='sm'
          style={{ backgroundColor: 'white' }}
          autoFocus={true}
          {...register('phoneNumber')}
        />
        <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        id='role'
        isInvalid={!!errors.role}
        className='flex flex-col justify-center items-center mb-8 '
      >
        <Select
          id='role'
          size='lg'
          bg='white'
          autoFocus={true}
          h='4rem'
          w={['full', 'full', '50%']}
          {...register('role')}
        >
          {/* Add options for the Select dropdown here */}
          <option value='NGO_USER'>NGO Admin</option>
          <option value='USER'>User</option>
        </Select>
        <FormErrorMessage>{errors.role?.message}</FormErrorMessage>
      </FormControl>
      <VStack spacing={4}>
        <FormControl
          id='password'
          isInvalid={!!errors.password}
          className='flex flex-col justify-center items-center mb-8 '
        >
          <Input
            placeholder='Password'
            type='password'
            h='4rem'
            w={['full', 'full', '50%']}
            size='sm'
            style={{ backgroundColor: 'white' }}
            {...register('password')}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
      </VStack>
      <VStack spacing={4}>
        <FormControl
          id='confirmPassword'
          isInvalid={!!errors.password}
          className='flex flex-col justify-center items-center mb-8 '
        >
          <Input
            placeholder='Confirm Password'
            type='password'
            h='4rem'
            w={['full', 'full', '50%']}
            size='sm'
            style={{ backgroundColor: 'white' }}
            {...register('confirmPassword')}
          />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>
      </VStack>

      <VStack spacing={4}>
        <Button
          type='submit'
          borderRadius='50px'
          colorScheme='#2e4049'
          margin='1em'
          w='10rem'
          h='4rem'
          className='bg-dark '
          size='lg'
          isLoading={isSubmitting}
        >
          SIGN UP
        </Button>
      </VStack>
    </form>
  );
};

export default SignUpForm;

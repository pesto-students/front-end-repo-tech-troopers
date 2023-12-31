import {
    FormControl,
    FormErrorMessage,
    Input,
    Select,
    VStack,
    HStack,
    Button,
    Text,
} from '@chakra-ui/react';
import config from '../assets/config';

const NGODetails = ({ onSubmitStep2, errors, register, isSubmitting }) => {
    return (
        <form onSubmit={onSubmitStep2}>
            <VStack spacing={4} flexDirection={{ base: 'column', md: 'row' }}>
                <VStack flex={1} spacing={4} alignItems='stretch'>
                    {/* NGO Name */}
                    <FormControl id='name' isInvalid={!!errors.name}>
                        <Input
                            type='text'
                            placeholder='NGO Name'
                            h='4rem'
                            {...register('name')}
                            style={{ backgroundColor: 'white' }}
                        />
                        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                    </FormControl>

                    {/* Type of NGO */}
                    <FormControl id='typeOfNGO' isInvalid={!!errors.typeOfNGO} style={{ backgroundColor: 'white' }}>
                        <Select
                            placeholder='Type of NGO'
                            size='lg'
                            h='4rem'
                            {...register('typeOfNGO')}

                        >
                            <option value='nonprofit'>Nonprofit</option>
                            <option value='charity'>Charity</option>
                            <option value='community'>Community-based Organization</option>
                        </Select>
                        <FormErrorMessage>{errors.typeOfNGO?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl id='addressLine2' isInvalid={!!errors.addressLine2} style={{ backgroundColor: 'white' }}>
                        <Input
                            type='text'
                            placeholder='addressLine2'
                            h='4rem'
                            {...register('addressLine2')}
                            style={{ backgroundColor: 'white' }}
                        />
                        <FormErrorMessage>{errors.addressLine2?.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl id='state' isInvalid={!!errors.state} style={{ backgroundColor: 'white' }}>
                        <Select
                            placeholder='State'
                            size='lg'
                            h='4rem'
                            {...register('address.state')}
                        >
                            <option value="Andhra_Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal_Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal_Pradesh">Himachal Pradesh</option>
                            <option value="Jammu_Kashmir">Jammu and Kashmir</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka" selected>Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya_Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil_Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar_Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West_Bengal">West Bengal</option>
                        </Select>
                        <FormErrorMessage>{errors.state?.message}</FormErrorMessage>
                    </FormControl>
                </VStack>

                <VStack flex={1} spacing={4} alignItems='stretch'>
                    {/* Registration Number */}
                    <FormControl
                        id='registrationNumber'
                        isInvalid={!!errors.registrationNumber}
                        style={{ backgroundColor: 'white' }}
                    >
                        <Input
                            type='text'
                            placeholder='Registration Number'
                            h='4rem'
                            {...register('registrationNumber')}
                            style={{ backgroundColor: 'white' }}
                        />
                        <FormErrorMessage>
                            {errors.registrationNumber?.message}
                        </FormErrorMessage>
                    </FormControl>
                    {/* Address */}
                    <FormControl id='addressLine1' isInvalid={!!errors.addressLine1} style={{ backgroundColor: 'white' }}>
                        <Input
                            type='text'
                            placeholder='addressLine1'
                            h='4rem'
                            {...register('addressLine1')}
                            style={{ backgroundColor: 'white' }}
                        />
                        <FormErrorMessage>{errors.addressLine1?.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl id='city' isInvalid={!!errors.city} style={{ backgroundColor: 'white' }}>
                        <Input
                            type='text'
                            placeholder='city'
                            h='4rem'
                            {...register('city')}
                            style={{ backgroundColor: 'white' }}
                        />
                        <FormErrorMessage>{errors.city?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl id='pincode' isInvalid={!!errors.pincode} style={{ backgroundColor: 'white' }}>
                        <Input
                            type='text'
                            placeholder='pincode'
                            h='4rem'
                            {...register('pincode')}
                            style={{ backgroundColor: 'white' }}
                        />
                        <FormErrorMessage>{errors.pincode?.message}</FormErrorMessage>
                    </FormControl>
                </VStack>
            </VStack>
            <HStack className='flex justify-center items-center'>
                <Button
                    type='submit'
                    borderRadius='50px'
                    colorScheme='gray'
                    margin='1em'
                    w='10rem'
                    h='4rem'
                    className='bg-darkslategray-300'
                    size='lg'
                    isLoading={isSubmitting}
                >
                    SIGN UP
                </Button>
                <Button
                    type='button'
                    borderRadius='50px'
                    colorScheme='pink'
                    w='10rem'
                    h='4rem'
                    className='bg-pink-300'
                    size='lg'
                    onClick={() => setStep(0)} // Set the onClick handler as needed
                >
                    BACK
                </Button>
            </HStack>
        </form>
    );
};

export default NGODetails;

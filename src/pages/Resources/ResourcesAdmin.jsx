import Navbar from "../../components/navbar/Navbar";
import Wedo from "../../components/homepage-ui/Wedo";
import OurCauses from "../../components/homepage-ui/OurCauses";
import Aboutus from "../../components/homepage-ui/Aboutus";
import Goals from "../../components/homepage-ui/Goals";
import { Box, Flex, Text, Image } from '@chakra-ui/react';

const ResourcesAdmin = () => {
    return (
        <>
            <Box
                className="top-[25.39rem] left-[21.94rem] w-[75rem] h-[141.22rem] flex flex-col items-center justify-start gap-[2.19rem] text-[1.13rem] font-work-sans"
                p={8}
                bg="white"
                rounded="2xl"
            >
                <Flex
                    className="w-[74.44rem] flex-row items-center justify-start"
                    w="full"
                    justifyContent="space-between"
                >
                    <Image
                        className="relative w-[36.06rem] h-[27.22rem] object-cover"
                        src="/image2@2x.png"
                        alt=""
                    />
                    <Box
                        className="bg-base-white w-[38.94rem] flex flex-col py-[5.5rem] px-[2.44rem] box-border items-start justify-start"
                        w="full"
                        p={8}
                        rounded="2xl"
                    >
                        <Box className="w-[34.06rem] flex flex-col items-start justify-start gap-[1.88rem]">
                            <Box className="flex flex-col items-start justify-start gap-[1.06rem]">
                                <Box className="w-[28.75rem] flex flex-col items-start justify-start gap-[1.06rem]">
                                    <Text className="relative uppercase font-medium">
                                        August 18, 2022 | Minciya
                                    </Text>
                                    <Text className="relative text-[1.56rem] leading-[120%] font-extrabold font-shippori-mincho">
                                        Medical aid
                                    </Text>
                                </Box>
                                <Text className="relative text-[1.25rem] leading-[130%] text-dimgray inline-block w-[34.06rem]">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                    altera in some form, by injected randomised words.
                                </Text>
                            </Box>
                            <Box className="rounded-15xl bg-darkslategray-300 flex flex-row py-[1.38rem] px-[2.94rem] items-center justify-center text-whitesmoke-200">
                                <Text className="relative uppercase font-medium">Read More</Text>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </>
    );
};

export default ResourcesAdmin;

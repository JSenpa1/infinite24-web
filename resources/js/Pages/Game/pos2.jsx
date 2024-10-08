import { Stack, Image, Heading, Input, Box, Button } from "@chakra-ui/react";
import BoxToInputAnswer from "../../Components/Game/BoxToInputAnswer";

const Pos2 = () => {
    return (
        <>
            <Stack
                bgColor={"#003049"}
                bgImage={"/images/paperHeaderFooter.png"}
                className="bg-cover sm:bg-cover md:bg-cover lg:bg-contain"
                bgRepeat={"repeat-x"}
                bgPos={"center"}
                w={"100vw"}
                h={"100vh"}
                justifyContent={"center"}
                alignItems={"center"}
                overflow={"hidden"}
            >
                {/* START header paper */}

                {/* END  header paper */}

                {/* START card paper */}
                {/* <Stack
                    
                    bgColor={"white"}
                    bgSize={"contain"}
                    bgRepeat={"no-repeat"}
                    className="w-3/4 h-1/2 sm:w-3/4 sm:h-1/2 md:w-3/4 md:h-1/2 lg:w-1/2 lg:h-1/2"
                    bgPos={"center"}
                    justify={"center"}
                    align={"center"}
                    borderRadius={"0.5rem"}
                > */}
                {/* START judul */}
                {/* <Heading
                        color={"#003049"}
                        fontWeight={"bold"}
                        className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
                    >
                        MASUKAN JAWABAN
                    </Heading> */}
                {/* END judul */}

                {/* START input */}
                <Stack w={"100vw"} align={"center"} pos={"relative"}>
                    <BoxToInputAnswer
                        title="Kode Kelompok"
                        subtitle=""
                        action="/game/check-status"
                    />
                </Stack>
                {/* END input */}

                {/* START divider */}
                {/* <Box
                        
                        className="min-w-48 h-1 sm:w-1/2 sm:h-1 md:w-1/2 md:h-1 lg:w-1/2 lg:h-1 xl:w-1/2 xl:h-1 2xl:w-1/2 2xl:h-1"
                        bgColor={"#003049"}
                        borderRadius={"0.5rem"}
                    /> */}
                {/* END divider */}

                {/* Start button */}
                {/* <Button
                        bgColor={"#003049"}
                        color={"white"}
                        px={"5rem"}
                        py={"0.5rem"}
                        borderRadius={"0.5rem"}
                        mt={"2rem"}
                        pos={"relative"}
                        className="text-sm sm:text-md md:text-lg lg:text-2xl"
                    >
                        SUBMIT
                        <Image
                            src="/images/cursor.png"
                            pos={"absolute"}
                            boxSize={"4rem"}
                            bottom={"-1.5rem"}
                            right={"-2rem"}
                        />
                    </Button> */}
                {/* END button */}
                {/* </Stack> */}
                {/* END card paper */}

                {/* START footer paper */}
                {/* <Image
                    src="/images/FooterPaper.png"
                    bgRepeat={"repeat-x"}
                    w={"100vw"}
                    pos={"absolute"}
                    bottom={0}
                /> */}
                {/* END footer paper */}
            </Stack>
        </>
    );
};

export default Pos2;

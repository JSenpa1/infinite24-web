import NavbarIndex from "../../Components/Game/Navbar/NavbarIndex";
import PopUp from "../../Components/Game/PopUp";
import BoxToInputCode from "../../Components/Game/BoxToInputCode";
import BoxToInputAnswer from "../../Components/Game/BoxToInputAnswer";
import { Image, Stack } from "@chakra-ui/react";

export default function Index() {
    return (
        <div className="bg-dark-red">
            <Stack>
                <NavbarIndex />
                <div className="container flex justify-center items-center mx-auto min-h-screen">
                    <BoxToInputCode
                        title="Kode Kelompok"
                        subtitle="Masukkan kode yang diberikan PIC"
                        action="/game/check-status"
                    />
                </div>
                <Stack pos={"absolute"} h={"100vh"} overflow={"hidden"}>
                    <Image
                        pos={"absolute"}
                        src={"/images/Book.svg"}
                        className="size-48 bottom-0 -left-10  sm:size-48 md:size-48 md:left-12 lg:size-auto lg:left-12"
                        bgRepeat={"no-repeat"}
                        // w={"20rem"}
                        // h={"auto"}
                        overflow={"hidden"}
                        zIndex={1}
                        // bottom={"-3rem"}
                        // left={"5rem"}
                    />
                    <Image
                        pos={"absolute"}
                        src={"/images/Penyu.svg"}
                        className="size-60 bottom-0 -right-10  sm:size-60 md:size-60 md:right-0 lg:size-auto lg:right-0"
                        bgRepeat={"no-repeat"}
                        // w={"20rem"}
                        // h={"auto"}
                        overflow={"hidden"}
                        zIndex={1}
                        // bottom={"0"}
                        // right={"0"}
                    />
                    <Stack
                        bgImage={"/images/PaperFooter.svg"}
                        // className="bg-cover sm:bg-cover md:bg-cover lg:bg-contain"
                        bgSize={"contain"}
                        bgRepeat={"repeat-x"}
                        bgPos={"bottom"}
                        w={"100vw"}
                        h={"100vh"}
                        overflow={"hidden"}
                        zIndex={0}
                    />
                </Stack>
            </Stack>
        </div>
    );
}

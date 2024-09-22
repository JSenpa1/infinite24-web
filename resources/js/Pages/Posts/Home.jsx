import React from "react";
import { Head } from "@inertiajs/react";
import AboutUs from "@/Components/AboutUs/AboutUs"

function Home() {
  return (
    <div className="relative h-fit w-screen overflow-clip">
        <Head title="Home" />
        <AboutUs />
    </div>
  )
}
export default Home;

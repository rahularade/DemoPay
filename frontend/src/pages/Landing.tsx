import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export function Landing(){
    return <div>
        <Navbar />
        <Hero />
        <Features />
    </div>
}
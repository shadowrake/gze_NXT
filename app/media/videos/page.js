import Footer from "@components/footer";
import NavBar from "@components/nav";
import Video from "@components/videos";
import Spons from "@components/sponsors_top";
import {FadeIn} from "@components/FadeIn";

export default async function main_media() {
    return (
        <main className='bg-white'>
            <NavBar />
            <FadeIn>
            <Spons></Spons>
            <Video></Video>
            </FadeIn>
            <Footer />
        </main>
    )
  }
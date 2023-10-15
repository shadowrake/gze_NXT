import { FadeIn } from "@components/FadeIn";
import Footer from "@components/footer";
import NavBar from "@components/nav";
import Howto from "./howtocont";

export default function Example() {
  return (
    <main className="bg-white">
        <NavBar></NavBar>
        <FadeIn>
        <Howto></Howto>
        </FadeIn>
        <Footer></Footer>
    </main>
  )
}

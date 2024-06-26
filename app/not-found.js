import Footer from "../components/footer.js";
import NavBar from "../components/nav.js";

export default function notFound() {
  return (
    <>
      <main className="relative isolate min-h-full">
        <NavBar />
        <div className="bg-red-100 relative group">
        <img
          src="https://hermankristiansen.no/banner_gze_4k.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-32 text-center text-white font-bold sm:py-40 lg:px-8">
          <p className="text-base font-semibold leading-8 ">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base  sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex justify-center">
            <a href="/" className="text-sm font-semibold leading-7 ">
              <span aria-hidden="true">&larr;</span> Back to home
            </a>
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}

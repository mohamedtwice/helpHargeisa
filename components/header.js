import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 bg-[#DF0000] mb-4 md:mb-6 xl:mb-8 fixed top-0 left-0 right-0 w-full z-10" data-scroll data-scroll-sticky data-scroll-target="#scroll-container">
      <Container>
        <div className="flex flex-wrap">
          <Link href="/">
<a>
          <h1 className="text-white font-Inter mb-1 md:mb-0 no-underline font-black uppercase text-2xl hover:background-white">Help Hargeisa</h1>
</a>
          </Link>
          <nav className="ml-auto flex space-x-3 w-full text-sm md:text-base md:w-auto">
            <FancyLink destination="/" a11yText="Navigate to the home page" label="Home" extraClasses="text-lg text-gray-100 font-normal font-Inter no-underline hover:underline hover:text-white" />
            <FancyLink destination="/about" a11yText="Navigate to the about page" label="About" extraClasses="text-lg text-gray-100 font-normal font-Inter no-underline hover:underline hover:text-white" />
          </nav>
        </div>
      </Container>
    </header>
  )
}
import Container from '@/components/container'

export default function Footer() {
  return (
    <footer className="mb-4 bg-black text-white">
      <Container>
        {/*<div className="border-t border-black py-4">*/}
        <div className="py-4">
          <div className="flex flex-wrap text-xs">
            <div className="flex space-x-1 mb-1 md:mb-0">
              <a href="/about/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 focus:text-gray-500">Heal Hargeisa Committee</a>

              <span className="block">|</span>

              <span className="block"><a href="https://bsmg.co" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500 focus:text-gray-500">Powered by BSMG</a></span> </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
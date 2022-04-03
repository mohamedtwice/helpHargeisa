import { useRef, useEffect } from 'react'
import Link from "next/link";
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import PushScrollGlobal from '@/helpers/globalscroll'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import ScrollTriggerWrapper from '@/components/scrolltrigger.js'
import Image from "next/image";
import Script from 'next/script'


export default function Home() {
  const containerRef = useRef(null)
  const featureimg ="https://gdb.voanews.com/02870000-0aff-0242-b762-08da14d490b8_w1200_r1.jpg"
  const featureimg2 ="https://guardian.ng/wp-content/uploads/2022/04/images.jpeg-6-1424x802.jpg"

  const animationObj = {
    '(min-width: 751px)': [
      () => {
        const id = 'si01';
        const elem = '.scrollsection .line';

        const settings = {
          scrollTrigger: {
            id: id,
            trigger: '.scrollsection', // which page section will be tracked as the scroll trigger
            scroller: '#scroll-container', // id of scroll container
            scrub: true,
            start: 'top 0%',
            end: '+=100%',
            // onUpdate: (e) => { console.log('1', Math.round(e.progress * 100)) }
          }
        }
        const animation = [
          {
            "set": [elem, {
              background: "rgba(253, 230, 138, 1)"
            }]
          }, {
            "to": [elem, {
              scaleX: 0,
              transformOrigin: "left center",
              background: "rgba(253, 230, 138, 0)",
              ease: "none",
              duration: 1
            }, 0]
          }]
        return { id, elem, settings, animation }
      }],
    '(max-width: 750px)': [() => {
      const id = 'si02';
      const elem = '.scrollsection .line';

      const settings = {
        scrollTrigger: {
          id: id,
          trigger: '.scrollsection', // which page section will be tracked as the scroll trigger
          scroller: '#scroll-container', // id of scroll container
          scrub: true,
          start: 'top 0%',
          end: '+=100%',
          // onUpdate: (e) => { console.log('2', Math.round(e.progress * 100)) }
        }
      }
      const animation = [
        {
          "set": [elem, {
            background: "rgba(253, 230, 138, 0)"
          }]
        },
        {
          "to": [elem, {
            scaleX: 0,
            transformOrigin: "left center",
            background: "rgba(253, 230, 138, 1)",
            ease: "none",
            duration: 2
          }, 0]
        }]
      return { id, elem, settings, animation }
    }],
  }

  useEffect(() => {
    window.addEventListener("LocoCall", (e) => { console.log(' triggered', e.detail) });
    return () => {
    }
  }, [])

  return (
    <Layout>
      <NextSeo title="Help Hargeisa Heal" />

      {/*<Script src="https://www.gofundme.com/static/js/embed.js" strategy="beforeInteractive" />*/}

      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <PushScrollGlobal />
        <div data-scroll-container ref={containerRef} id="scroll-container" className="test test2 test3">
          <div data-scroll-section>
            <ScrollTriggerWrapper animation={animationObj}>
              <Header />
              <LazyMotion features={domAnimation}>
                <m.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <m.section variants={fade} className="bg-black scrollsection h-screen-1/2 min-h-[600px] w-full flex justify-center items-center py-10" style={{ backgroundImage: `url(${featureimg})`, backgroundSize: `cover` }}>
                    {/*<div className="w-full h-full line bg-yellow-200 bg-opacity-0 md:bg-opacity-100"></div>*/}
                    {/*<Image*/}
                    {/*    alt="Kerry Jo Felder for Minneapolis School Board"*/}
                    {/*    src={featureimg}*/}
                    {/*    layout="fill"*/}
                    {/*    objectFit="cover"*/}
                    {/*    objectPosition="bottom center"*/}
                    {/*/>*/}
                    <div className="px-6 max-w-screen-2xl mx-auto w-full md:px-8">
                    <h1 className="text-6xl text-white">Help Hargeisa heal</h1>
                    </div>
                  </m.section>
                  <m.main variants={fade} className="py-12 md:pt-20 md:pb-8">
                    <Container>
                      <article className="flex flex-col md:flex-row gap-4 md:gap-8">
                        {/*<h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">Next x Tailwind x Motion x Locomotive</h1>*/}
                        <div className="content max-w-4xl mb-4 flex-1">
                          <h2>Asc and Ramadan Kareem!</h2>
                          <p> On the eve of the first day of Ramadan, the people of Hargeisa have severed the worst economic calamity since the civil war: the burning to the ground of Waahen Market. This market was the largest and most significant in all of Hargeisa city. Thus, numerous business women and men have lost all of their assets. In addition, the market was the main sources of daily provisions for countless denizens.</p>

                          <p>Given the above, all of us should act PROMPTLY and donate generously.</p>

                          <hr className="my-8 md:my-12 lg:my-16 text-black border-orange-800 rounded-full border-4" />

                          <h2>Asc and Ramadaan Mubarak</h2>
                          <p>Maalintii ugu horeysay ee Ramadaan dadka reer Hargiesa waxay lakawsadeen Dhibaatadii ugu Weynayd ee Dhanka Dhaqaalaha Dagaaladii Civilwaarka. Suuqa Waaheen Wuxuu ahaa Xuduntii Ganacsiga ee Somaliland guud ahaan ugu weynaa. Ragg iyo Dumar ba waalagu Hanti Beelay, Suuqani Wuxuu ildhaqaale u ah Inta Jeebka Yar iyo inta Jeebka weynba.</p>

                          <p>Waa in aan Gurmanaa oo istaagna, Hadaa laynoo bahanyahay! Fadlan kutabaruc Waxkastood awoodo.</p>

                          {/*<h2>Some example content</h2>*/}
                          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                          {/*<p data-scroll data-scroll-repeat data-scroll-call="trigger" className="trigger">Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                          {/*<p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                          {/*<h2>Some example content</h2>*/}
                          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                          {/*<p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                          {/*<p data-scroll data-scroll-repeat data-scroll-call="trigger" className="trigger">Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                          {/*<h2>Some example content</h2>*/}
                          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                          {/*<p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                          {/*<p data-scroll data-scroll-repeat data-scroll-call="trigger" className="trigger">Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                          {/*<h2>Some example content</h2>*/}
                          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                          {/*<p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                          {/*<h2>Some example content</h2>*/}
                          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                          {/*<p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                          {/*<h2>Some example content</h2>*/}
                          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                          {/*<p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
                        </div>

                        <div className="flex-1 sticky">
                          <iframe className="sticky min-h-[530px]" src="https://www.gofundme.com/f/help-victims-of-the-hargeisa-market-fire/widget/large/" width="100%"/>
                          <Script
                              src="https://www.gofundme.com/static/js/embed.js"
                              strategy="lazyOnload"
                              />
                          <Script
                              src="https://www.gofundme.com/f/help-victims-of-the-hargeisa-market-fire/widget/large/"
                              strategy="lazyOnload"
                              onLoad={() =>
                                  console.log(`script loaded correctly, window.FB has been populated`)
                              }
                          />
                          {/*<div className="gfm-embed"*/}
                          {/*     data-url="https://www.gofundme.com/f/help-victims-of-the-hargeisa-market-fire/widget/large/" />*/}
                          {/*<script defer src="https://www.gofundme.com/static/js/embed.js"></script>*/}
                        </div>

                        {/*<FancyLink destination="/about" a11yText="Navigate to the about page" label="About Page" />*/}
                      </article>
                    </Container>
                  </m.main>

                  <m.div variants={fade}>
                    <Footer />
                  </m.div>
                </m.div>
              </LazyMotion>
            </ScrollTriggerWrapper>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}

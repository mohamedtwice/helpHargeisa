import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from "next/link";
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import PushScrollGlobal from '@/helpers/globalscroll'
import { useAppContext } from '../context/state.js';
import ScrollTriggerWrapper from '@/components/scrolltrigger.js'

export default function Landing() {
    const containerRef = useRef(null)
    const appContext = useAppContext();

    const featureimg =" https://i.guim.co.uk/img/media/4fb80e8ae4a8044085876fb2f124787ec285fe1d/0_215_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=2d249ee35cbded2d25f05c2f9360838c"
    // set animation variable to be pass to the scroll trigger component.
    // Input Animation without breakpoints
    const animationObj = [() => {
        const id = 'si01'
        const elem = '.scrollsection .line';
        const settings = {
            scrollTrigger: {
                id: id,
                trigger: '.scrollsection', // which page section will be tracked as the scroll trigger
                scroller: '#scroll-container', // id of scroll container
                scrub: true,
                start: 'top 0%',
                end: 'bottom 0%',
                // onUpdate: (e) => { console.log('1', Math.round(e.progress * 100)) }
            }
        }

        // Input Animation
        const animation = [
            {
                "to": [elem, {
                    scaleX: 0,
                    transformOrigin: "left center",
                    ease: "none"
                }]
            }]

        return { id, elem, settings, animation }
    }, () => {
        const id = 'si01'
        const elem = '.scrollsection2 .line2';
        const settings = {
            scrollTrigger: {
                id: id,
                trigger: '.scrollsection2', // which page section will be tracked as the scroll trigger
                scroller: '#scroll-container', // id of scroll container
                scrub: true,
                start: 'top 50%',
                end: '+=50%',
                // onUpdate: (e) => { console.log('1', Math.round(e.progress * 100)) }
            }
        }

        // Input Animation
        const animation = [{
            "set": [elem, {
                scaleX: 0,
                transformOrigin: "left center"
            }]
        },
            {
                "to": [elem, {
                    scaleX: 1,
                    ease: "none"
                }]
            }, {
                "set": [elem, {
                    background: 'rgba(250,240,10,1)',
                }]
            },
            { "call": () => { console.log('call') } }]

        return { id, elem, settings, animation }
    },]

    useEffect(() => {
        window.addEventListener("LocoCall", (e) => { console.log(e.detail) });
        return () => {
            window.removeEventListener("LocoCall", (e) => { console.log(e.detail) });
        }
    }, [appContext])

    return (
        <Layout>
            <NextSeo title="About" />

            <LocomotiveScrollProvider
                options={{ smooth: true, lerp: 0.05 }}
                containerRef={containerRef}
                watch={[]}
            >
                <PushScrollGlobal />
                <div data-scroll-container ref={containerRef} id="scroll-container">
                    <div data-scroll-section>
                        <ScrollTriggerWrapper animation={animationObj}>
                            {/*<Header />*/}
                            <LazyMotion features={domAnimation}>
                                <m.div
                                    initial="initial"
                                    animate="enter"
                                    exit="exit"
                                >
                                    <section className="relative flex flex-col md:flex-row flex-wrap h-auto">
                                        <div className="flex order-last lg:order-first items-center w-full px-4 py-12  lg:w-1/2 sm:px-6 lg:px-8 sm:pt-10 sm:pb-4 overflow-auto">
                                            <div className="max-w-2xl md:max-w-3xl mx-auto text-left lg:pr-12">
                                                {/*<Image*/}
                                                {/*    alt="Kerry Jo Felder for Minneapolis School Board"*/}
                                                {/*    src={featureimg}*/}
                                                {/*    layout="intrinsic"*/}
                                                {/*    width={600}*/}
                                                {/*    height={86}*/}
                                                {/*/>*/}

                                                <p className="text-base sm:text-xl md:text-2xl font-black mt-4 text-gray-800">
                                                    Asc Ramadaan Mubarak
                                                </p>
                                                <p className="text-base sm:text-xl md:text-2xl font-light mt-4 text-gray-800">
                                                    Maalintii ugu horeysay ee Ramadaan dadka reer Hargiesa waxay lakawsadeen Dhibaatadii ugu Weynayd ee Dhanka Dhaqaalaha Dagaaladii Civilwaarka. Suuqa Waaheen Wuxuu ahaa Xuduntii Ganacsiga ee Somaliland guud ahaan ugu weynaa. Ragg iyo Dumar ba waalagu Hanti Beelay, Suuqani Wuxuu ildhaqaale u ah Inta Jeebka Yar iyo inta Jeebka weynba. Waa in aan Gurmanaa oo istaagna, Hadaa laynoo bahanyahay! Fadlan kutabaruc Waxkastood awoodo.
                                                </p>

                                                <div className="grid grid-cols-1 gap-0 md:grid-cols-2	 my-6 ">
                                                    {/* <div className="font-black bg-[#66359A] hover:bg-gray-800 inline-block py-3 px-6 text-base sm:text-xl md:text-2xl mt-6 text-gray-100"> */}
                                                    <Link href="https://givebutter.com/sJ2psY">
                                                        <a className="font-black bg-[#66359A] hover:bg-[#eee] inline-block py-3 px-6 text-xl sm:text-2xl md:text-3xl text-gray-100 hover:text-[#66359A] text-center">
                                                            Donate &#8594;
                                                        </a>
                                                    </Link>
                                                    {/* </div> */}

                                                    {/* <div className="font-black bg-[#FACA06] hover:[#66359A] inline-block py-3 px-6 text-base sm:text-xl md:text-2xl mt-6 text-gray-800"> */}
                                                    {/* <Link href="/volunteer-form"> */}
                                                    <a
                                                        href="/volunteer-form"
                                                        className="font-black bg-gray-900 hover:bg-[#FACA06] inline-block py-3 px-6 text-xl sm:text-2xl md:text-3xl text-white hover:text-gray-900 text-center"
                                                    >
                                                        Volunteer &#8594;
                                                    </a>
                                                    {/* </Link> */}
                                                    {/* </div> */}
                                                </div>

                                                <div className="bg-[#FACA06] p-6 mt-8">
                                                    <h2 className="text-3xl md:text-4xl font-black pb-2 border-[#FACA06] border-b-4 border-x-4 inline-block mb-0">
                                                        Join the Campaign
                                                    </h2>
                                                    <iframe
                                                        src="https://www.cognitoforms.com/f/2Aj1DPpYz0mcAxrI7pi61g/12"
                                                        style={{ border: "0", width: "100%" }}
                                                        height="410"
                                                    />
                                                    <script src="https://www.cognitoforms.com/f/iframe.js" />
                                                </div>
                                                <div className="flex flex-row justify=center">
              <span className="inline-block mx-auto mt-6 px-2 py-1 text-sm text-gray-700 border-gray-700 border-2 text-center">
                Prepared and paid for by the KerryJo 4 School Board Campaign
              </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-screen">
                                            <Image
                                                alt="Kerry Jo Felder for Minneapolis School Board"
                                                src={featureimg}
                                                layout="fill"
                                                objectFit="cover"
                                                objectPosition="bottom center"
                                                quality={100}
                                                height={2000}
                                                width={3000}
                                            />
                                        </div>
                                    </section>

                                    {/*<m.main*/}
                                    {/*    initial="initial"*/}
                                    {/*    animate="enter"*/}
                                    {/*    exit="exit" variants={fade} className="mb-12 md:mb-16 xl:mb-24 pt-24 md:pt-20" onAnimationStart={() => { console.log(' enter') }}*/}
                                    {/*    onAnimationComplete={definition => {*/}
                                    {/*        console.log('Completed animating', definition)*/}
                                    {/*    }}>*/}
                                    {/*    <Container>*/}
                                    {/*        <section className="scrollsection h-screen-1/2 w-full bg-blue-100 flex justify-center items-center p-10">*/}
                                    {/*            <div className="w-full h-full bg-white line"></div>*/}
                                    {/*        </section>*/}
                                    {/*        <section className="scrollsection2 h-screen-1/2 w-full bg-red-100 flex justify-center items-center mb-10 p-10">*/}
                                    {/*            <div className="w-full h-full bg-white line2 scale-x-0"></div>*/}
                                    {/*        </section>*/}
                                    {/*        <article>*/}
                                    {/*            <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl mb-4">Next x Tailwind x Motion x Locomotive</h1>*/}
                                    {/*            <div className="content max-w-3xl mb-4">*/}
                                    {/*                <h2>Some example content</h2>*/}
                                    {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                                    {/*                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                                    {/*                <h2>Some example content</h2>*/}
                                    {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                                    {/*                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                                    {/*                <h2>Some example content</h2>*/}
                                    {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                                    {/*                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                                    {/*                <h2>Some example content</h2>*/}
                                    {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                                    {/*                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                                    {/*                <h2>Some example content</h2>*/}
                                    {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                                    {/*                <h2>Some example content</h2>*/}
                                    {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                                    {/*                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                                    {/*                <h2>Some example content</h2>*/}
                                    {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                                    {/*                <p data-scroll data-scroll-repeat data-scroll-call="trigger" className="trigger">Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                                    {/*                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                                    {/*                <h2>Some example content</h2>*/}
                                    {/*                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>*/}

                                    {/*                <p data-scroll data-scroll-repeat data-scroll-call="trigger" className="trigger">Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}

                                    {/*                <p>Velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>*/}
                                    {/*            </div>*/}

                                    {/*            <FancyLink destination="/" a11yText="Navigate to the home page" label="Home Page" />*/}
                                    {/*        </article>*/}
                                    {/*    </Container>*/}
                                    {/*</m.main>*/}

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

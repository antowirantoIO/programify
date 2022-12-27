import React from 'react';
import {Tooltip} from "@material-tailwind/react";
import Tooltips from './Tooltips';

export default function Testimonials() {
    return (
        <section className="hidden !max-w-none p-0 md:block md:pt-[20px] md:pb-[35px]">
            <div>
                <div className="mb-8 flex justify-center text-center lg:mx-auto lg:w-2/3 xl:w-1/2">
                    <div className="container">
                        <h3 className="centered-heading">Follow in the footsteps of thousands of developers before you.</h3>
                    </div>
                </div>
                <div className="relative flex">
                    <div id="testimonials" className="mx-auto mt-[-50px] flex items-center justify-start px-8 lg:mt-[-80px]">
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <Tooltips
                                content={(
                                    <div className="tippy-box" tabIndex={-1} role="tooltip" style={{maxWidth: '300px'}}>
                                        <div className="tippy-content">
                                            <div className="py-2 px-6 text-center">
                                                <h4 className="text-xl font-bold"><a className="link inherits-color" href="http://calebporzio.com/">Caleb Porzio</a></h4>
                                                <div className="mt-3 text-sm">
                                                    <p>You get a window into a seasoned developer's mind and workflow for the price of an Uber. I can't overstate the value of a Laracasts subscription.</p>
                                                </div>
                                                <div className="mt-5">
                                                    <a className="btn flex-center btn-blue" href="/?modal=testimonials-modal">
                                                        {/**/}{/**/}{/**/}<span className="text-wrap inline-block flex-shrink-0">See All Testimonials</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tippy-arrow" style={{position: 'absolute', left: '0px', transform: 'translate(88px)'}} />
                                    </div>
                                )}
                            >
                                <div className="relative my-2 mx-1 text-center lg:m-2">
                                    <button id="testimonial-7" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                        <img src="https://ik.imagekit.io/laracasts/reviews/caleb-porzio.jpg" alt="Caleb Porzio" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                    </button>
                                </div>
                            </Tooltips>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-13" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/michael-watts.jpg" alt="Michael Watts" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-22" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/selene-arzola.jpg" alt="Selene Arzola" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-26" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/toby-steward.jpg" alt="Toby Steward" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-42" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/adam-engebretson.jpg" alt="Adam Engebretson" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-60" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/chris-gooding.jpg" alt="Chris Gooding" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-66" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/jess-archer.jpg" alt="Jess Archer" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-72" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/robb-lewis.jpg" alt="Robb Lewis" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-1" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/taylor-otwell.jpg" alt="Taylor Otwell" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-3" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/ian-landsman.jpg" alt="Ian Landsman" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-4" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/dries-vints.jpg" alt="Dries Vints" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-5" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/eric-barnes.jpg" alt="Eric Barnes" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-6" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/chris-fidao.jpg" alt="Chris Fidao" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-8" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/ionut-tanasa.jpg" alt="Ionut Tanasa" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-9" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/tolu-olowu.jpg" alt="Tolu Olowu" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-10" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(13, 19, 29) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/alejandro-sanabria.jpg" alt="Alejandro Sanabria" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-11" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/joe-dawson.jpg" alt="Joe Dawson" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-12" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/sam-jordan.jpg" alt="Sam Jordan" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-15" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/brian-gallagher.jpg" alt="Brian Gallagher" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-16" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/michael-deol.jpg" alt="Michael Deol" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-17" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/tambi-jalouqa.jpg" alt="Tambi Jalouqa" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-18" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/pablo-acuna.jpg" alt="Pablo Acuña" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-19" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/kelby-garside.jpg" alt="Kelby Garside" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-20" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/toni-peric.jpg" alt="Toni Perić" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-21" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/duncan-heal.jpg" alt="Duncan Heal" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-23" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/kofi-cypher.png" alt="Kofi Cypher" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-24" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/syntax-seed.jpg?v=2" alt="Sherri W." className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-27" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/radoslaw-kosinski.jpg" alt="Radoslaw Kosinski" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-28" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/robin-malfait.jpg" alt="Robin Malfait" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-29" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/amanda-rose.jpg" alt="Amanda Rose" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-30" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/j-t-grimes.jpg" alt="J.T. Grimes" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-31" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/garrett-st-john.jpg" alt="Garrett St. John" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-32" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/orphaned-record.jpg" alt="OrphanedRecord" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-33" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/mary-ann-zykin.jpeg" alt="Mary-Ann Zykin" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-34" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/matthew-robitaille.jpg" alt="Matthew Robitaille" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-35" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/lee-nugent.jpg" alt="Lee Nugent" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-36" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/rafael-antonio.jpg" alt="Rafael Antonio" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-37" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/darren-benney.jpg" alt="Darren Benney" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-38" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/mike-rogne.jpg" alt="Mike Rogne" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-39" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/mark-campbell.jpg" alt="Mark Campbell" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-40" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/dayo-akinkuowo.jpg" alt="Dayo Akinkuowo" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-41" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/todd-smith-salter.jpg" alt="Todd Smith-Salter" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-43" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/jake-chapman.jpg" alt="Jake Chapman" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-44" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}} aria-expanded="false">
                                    <img src="https://ik.imagekit.io/laracasts/reviews/jeff-claeson.jpg" alt="Jeff Claeson" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-45" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/chris-southam.jpg" alt="Chris Southam" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-46" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/bastian-hofmann.jpg" alt="Bastian Hofmann" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-47" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/mark-hanson.jpg" alt="Mark Hanson" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-48" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/jocahdj.jpg" alt="Jovan Haji-Djurich" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                        <div className="relative flex w-full flex-col justify-between gap-y-[5.5rem]">
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-49" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/kbir-mhrjn.jpg" alt="Kbir Mhrjn" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-50" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/donald-allen.jpg" alt="Donald Allen" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-51" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/sean-mumford.jpg" alt="Sean Mumford" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                            <div className="relative my-2 mx-1 text-center lg:m-2">
                                <button id="testimonial-53" className="flex rounded-full transition-colors duration-300" data-tooltip-template="testimonial-tooltip-template" style={{boxShadow: 'rgb(24, 42, 69) 0px 0px 0px 8px'}}>
                                    <img src="https://ik.imagekit.io/laracasts/reviews/ben-sampson.jpg" alt="Ben Sampson" className="rounded-full border-solid hover:border-blue" loading="lazy" width={82} height={82} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id="testimonial-tooltip-template" style={{display: 'none'}}>
                        <div className="py-2 px-6 text-center">
                            <h4 className="text-xl font-bold"><a className="link inherits-color" href="https://github.com/alesanvil">Alejandro Sanabria</a></h4>
                            <div className="mt-3 text-sm">
                                <p>The next level for learning Laravel!</p>
                            </div>
                            <div className="mt-5">
                                <a className="btn flex-center btn-blue" href="/?modal=testimonials-modal">
                                    {/**/}{/**/}{/**/}<span className="text-wrap inline-block flex-shrink-0">See All Testimonials</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

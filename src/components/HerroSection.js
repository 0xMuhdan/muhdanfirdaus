import Link from 'next/link'
import React from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import TiltedCard from './ui/TiltedCard'

const HerroSection = () => {
    return (
        <div className='flex items-center justify-between min-h-[60vh] md:min-h-[60vh] flex-col-reverse md:flex-row gap-8 animate-move-up'>
            <div className='space-y-10 text-center md:text-start'>
                <h1 className='text-3xl lg:text-6xl md:text-4xl font-bold mt-4'>Hi, <span className='hand'>👋</span><br />
                    <span className='underline underline-offset-[3px] md:underline-offset-[4px] lg:underline-offset-[6px] decoration-purple-300 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400 '>I'm Muhdan Firdaus Salam</span>
                </h1>
                <p className='md:pr-6 lg:max-w-xl max-w-lg text-lg text-gray-400 px-5  text-justify md:px-0'>
                    Hello! I'm Muhdan Firdaus Salam from Tasikmalaya, West Java, Indonesia. As a passionate <span className='text-xl font-bold text-white/80'>Full-Stack Web2</span> and <span className='text-xl font-bold text-white/80'>Fullstack Web3 Developer</span>, I specialize in building scalable web applications and secure blockchain solutions. My expertise spans across Web2 and Web3 technologies, where I constantly innovate, solve complex problems, and embrace the latest tech trends.

                </p>
                <div className='flex flex-col md:flex-row gap-4 items-center md:items-start'>
                    <Link href="mailto:muhdanfirdaus8@gmail.com" className='inline-block'>
                        <div>
                            <div className='md:text-3xl text-xl flex gap-2'>
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                >
                                    <h1 className=' font-bold hover:scale-[1.02] '>Contact Me</h1>📭
                                </HoverBorderGradient>
                            </div>
                        </div>
                    </Link>
                    <Link href="/tugas" className='inline-block'>
                        <div>
                            <div className='md:text-3xl text-xl flex gap-2'>
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                >
                                    <h1 className=' font-bold hover:scale-[1.02] '>Tugas Kuliah</h1>📝
                                </HoverBorderGradient>
                            </div>
                        </div>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1qmm_XxNLficR0w8VWInL1xxdjD4-X2Oe/view?usp=sharing" className='inline-block'>
                        <div>
                            <div className='md:text-3xl text-xl flex gap-2'>
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as="button"
                                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                >
                                    <h1 className=' font-bold hover:scale-[1.02] '>View My CV</h1>💼
                                </HoverBorderGradient>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='relative flex flex-col items-center gap-4 w-full md:w-auto'>
                <TiltedCard
                    imageSrc="/myfoto.webp"
                    altText="Muhdan Firdaus Salam"
                    captionText="Muhdan Firdaus Salam - Full-Stack Developer"
                    containerHeight="400px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={false}
                />
            </div>
        </div>
    )
}

export default HerroSection
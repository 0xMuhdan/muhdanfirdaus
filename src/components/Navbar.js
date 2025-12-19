import Link from 'next/link'
import React from 'react'
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si"

const Navbar = () => {
    const sosials = [{
        link: "https://www.linkedin.com/in/muhdan-firdaus-salam-3453b1375",
        label: "LinkedIn",
        icon: SiLinkedin,
    },
    {
        link: "https://github.com/0xMuhdan",
        label: "Github",
        icon: SiGithub,
    },
    {
        link: "https://m.facebook.com/muhdan.firdaus.3/",
        label: "Facebook",
        icon: SiFacebook,
    }
    ]

    return (
        <nav className='py-10 flex justify-between items-center'>
            <h1 className="text-2xl font-bold animate-move-down underline underline-offset-8 decoration-purple-400 -rotate-1">Muhdan.Dev <Link href="/">🤵🏽</Link></h1>
            <div className='flex items-center gap-5'>
                {
                    sosials.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={i}
                                href={item.link}
                                aria-label={item.label}>
                                <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                            </Link>
                        )
                    }
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar
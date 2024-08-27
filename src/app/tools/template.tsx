"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'
import { tools } from './list'
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()

    const toolSlug = pathname.split('/')[2]

    const tool = tools.find(({uri}) => toolSlug === uri.split('/')[2])

    console.log('pathname',tool)
    if(tool){

        const { name, icon } = tool
        
        return(<>
            <div className='flex p-4 bg-black'>
                <ul className='flex'>
                    <li>
                        <Link href="/#tools" className=''>
                            <HomeIcon className="size-6" />
                            {/* <ArrowLeftIcon className="size-6" /> */}
                        </Link>
                    </li>
                    <span className='px-2 text-xl'>
                        {'/'}
                    </span>
                    <li>
                        <Link href={tool.uri}>
                            <FontAwesomeIcon icon={icon} className="me-2" />
                            {name}
                        </Link>
                    </li>
                    {
                        pathname.split('/')[3] && <>
                            <span className='px-2 text-xl'>
                                {'/'}
                            </span>
                            <li>
                                {pathname.split('/')[3]}
                            </li>
                        </>
                    }
                </ul>
            </div>
            {children}
        </>)
    }

    return (
        children
    )
    
}
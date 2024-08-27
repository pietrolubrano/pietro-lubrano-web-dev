"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'
import { tools } from './list'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Template({ children }: { children: React.ReactNode }) {

    const pathname = usePathname()

    const tool = tools.find(({uri}) => pathname === uri)

    if(tool){
        const { name, icon } = tool
        return(<div className='bg-black'>
        <div className="grid grid-cols-3 p-4 items-center">
            <div>
                <Link href="/#tools">
                    <ArrowLeftIcon className="h-6 w-6" />
                </Link>
            </div>
            <div className='text-center items-center'>
                <FontAwesomeIcon icon={icon} className="me-2" />
                {name}
            </div>
        </div>
        {children}
        </div>
        )
    }
    
  }
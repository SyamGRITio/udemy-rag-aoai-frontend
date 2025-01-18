'use client';

import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col justfy-center items-center bg-slate-50 text-gray-900'>
            <h1 className='text-8xl font-hold'>Error</h1>
            <p className='text-4xl font-medium'>Unexpected Error Occurd</p>
            <Link href='/' className='mt-4 text-xl text-blue-600 hover:underline'>Go Back Page</Link>
        </div>
    )
}

export default ErrorPage;
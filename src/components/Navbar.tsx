import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { ArrowRight } from 'lucide-react';
import MobileNav from './MobileNav';
import UserAccountNav from './UserAccountNav';
import {
    LoginLink,
    RegisterLink,
    getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = () => {

    const { getUser } = getKindeServerSession();
    const user = getUser();

    return (
        <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 backdrop-blur-lg transition-all'>
            <MaxWidthWrapper>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link
                        href='/'
                        className='flex z-40 font-semibold'>
                        <span className='flex space-x-4 items-center justify-center'>
                            <img src="/logo.png" alt="logo" className='h-10 w-10' />
                            <p className='font-mono text-xl text-blue-600 font-semibold'>DocWhisperer</p>
                        </span>
                    </Link>

                    <MobileNav isAuth={!!user} />

                    <div className='hidden items-center space-x-4 sm:flex'>
                        {!user ? (
                            <>
                                <Link
                                    href='/pricing'
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}>
                                    Pricing
                                </Link>
                                <LoginLink
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}>
                                    Sign in
                                </LoginLink>
                                <RegisterLink
                                    className={buttonVariants({
                                        size: 'sm',
                                    })}>
                                    Get started{' '}
                                    <ArrowRight className='ml-1.5 h-5 w-5' />
                                </RegisterLink>
                            </>
                        ) : (
                            <>
                                <Link
                                    href='/pricing'
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}>
                                    Pricing
                                </Link>
                                <Link
                                    href='/dashboard'
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'sm',
                                    })}>
                                    Dashboard
                                </Link>

                                <UserAccountNav
                                    name={
                                        !user.given_name || !user.family_name
                                            ? 'Your Account'
                                            : `${user.given_name} ${user.family_name}`
                                    }
                                    email={user.email ?? ''}
                                    imageUrl={user.picture ?? ''}
                                />
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar

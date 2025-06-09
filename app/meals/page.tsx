import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";

export default function MealsPage() {
    return (
        <>
            <header
                className='flex flex-col gap-12 mx-auto my-12 mb-20 w-[90%] max-w-[75rem] text-[#ddd6cb] text-lg'
            >
                <h1 className='font-montserrat text-xl md:text-2xl'>
                    Delicious meals, created{' '}
                    <span
                        className='bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent'
                    >
                        by you
                    </span>
                </h1>
                <p className='m-0'>
                    Choose your favorite recipe and cook it yourself! It is easy and fun!
                </p>
                <p className='mt-4'>
                    <Link
                        href='/meals/share'
                        className='inline-block rounded-md px-4 py-2 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]'
                    >
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className='main'>
                <MealsGrid meals={[]}/>
            </main>
        </>
    );
}
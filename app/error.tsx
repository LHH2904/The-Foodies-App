'use client';

export default function Error() {
    return (
        <main className='text-center mt-[5rem]'>
            <h1 className='text-[5rem] m-0 font-black uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent font-montserrat'>
                An error occurred
            </h1>
            <p className='text-[1.5rem] font-medium text-[#ddd8d8]'>Failed to create meal.</p>
        </main>
    )
}
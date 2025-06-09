import Link from "next/link";
import Image from "next/image";

export interface MealItemProps {
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
}

export default function MealItem(
    {
        title,
        slug,
        image,
        summary,
        creator
    }: MealItemProps
) {
    return (
        <article
            className="flex flex-col justify-between h-full rounded-sm shadow-md shadow-black/30 overflow-hidden transition-all duration-300 ease-in-out text-[#ddd6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
            <header className='relative h-60'>
                <Image src={image} alt={title} fill/>
                <div
                    className="absolute bottom-0 left-0 right-0 p-2.5 pt-0 text-white bg-gradient-to-t from-black/70 to-transparent">
                    <h2 className='m-0 text-2xl font-montserrat'>{title}</h2>
                    <p className='text-xs italic text-[#cfa69b] m-0'>by {creator}</p>
                </div>
            </header>
            <div className="flex flex-col justify-between h-full">
                <p className='p-4 pt-0'>{summary}</p>
                <div className='p-4 text-right'>
                    <Link
                        href={`/meals/${slug}`}
                        className='inline-block mt-4 px-4 py-2 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242,100,18,0.8)]'
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    )
}
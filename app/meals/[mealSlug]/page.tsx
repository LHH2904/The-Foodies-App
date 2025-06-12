import Image from "next/image";
import {getMeal} from "@/lib/meals";
import {notFound} from "next/navigation";

export async function generateMetadata(props: { params: Promise<{ mealSlug: string }> }) {
    const {mealSlug} = await props.params;
    const meal = getMeal(mealSlug);

    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary
    }
}

export default async function MealsDetailsPage(props: { params: Promise<{ mealSlug: string }> }) {
    const {mealSlug} = await props.params;
    const meal = getMeal(mealSlug);

    if (!meal) {
        notFound();
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />')

    return (
        <>
            <header
                className='flex px-4 py-8 gap-12 mx-auto max-w-[80rem]'
            >
                <div className='relative w-[30rem] h-[20rem]'>
                    <Image
                        src={meal.image}
                        alt={meal.title}
                        fill
                        className='object-cover rounded-md shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] animate-fade-slide-in-left'
                    />
                </div>
                <div className='mt-2 px-4 text-[#ddd6cb] max-w-[40rem] animate-fade-slide-in-right'>
                    <h1
                        className=' m-0 text-[4.5rem] uppercase font-montserrat [text-shadow:0_0_0.5rem_rgba(0,0,0,0.5)]'
                    >
                        {meal.title}
                    </h1>
                    <p className='text-xl italic text-[#cfa69b]'>
                        by <a
                        href={`mailto:${meal.creator_email}`}
                        className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent hover:[text-shadow:0_0_18px_rgba(248,190,42,0.8)]"
                    >{meal.creator}</a>
                    </p>
                    <p className='text-xl'>
                        {meal.summary}
                    </p>
                </div>
            </header>
            <main>
                <p
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions
                    }}
                    className='text-lg leading-relaxed bg-[#6e6464] text-[#13120f] rounded-lg shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] p-8 max-w-5xl my-8 mx-auto animate-fade-slide-in-from-bottom'>
                </p>
            </main>
        </>
    );
}
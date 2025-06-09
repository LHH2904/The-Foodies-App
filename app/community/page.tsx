import Image from 'next/image';
import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

export default function CommunityPage() {
    return (
        <>
            <header
                className="text-[#ddd6cb] text-center text-[1.5rem] my-12 mx-auto max-w-[75rem] w-[90%] flex flex-col gap-12">
                <h1 className="font-montserrat text-5xl">
                    One shared passion:{' '}
                    <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
                        Food
                    </span>
                </h1>
                <p>Join our community and share your favorite recipes!</p>
            </header>

            <main className="w-[90%] max-w-[40rem] mx-auto text-center">
                <h2 className="font-montserrat text-2xl mb-12 text-[#ddd6cb]">
                    Community Perks
                </h2>

                <ul className="list-none my-12 p-0 flex flex-col gap-12">
                    <li className="flex flex-col items-center gap-8">
                        <Image src={mealIcon} alt="A delicious meal" width={128} height={128}
                               className="object-contain"/>
                        <p className="font-montserrat text-[1.5rem] font-bold text-[#ddd6cb] m-0">
                            Share & discover recipes
                        </p>
                    </li>
                    <li className="flex flex-col items-center gap-8">
                        <Image src={communityIcon} alt="A crowd of people, cooking" width={128} height={128}
                               className="object-contain"/>
                        <p className="font-montserrat text-[1.5rem] font-bold text-[#ddd6cb] m-0">
                            Find new friends & like-minded people
                        </p>
                    </li>
                    <li className="flex flex-col items-center gap-8">
                        <Image src={eventsIcon} alt="A crowd of people at a cooking event" width={128} height={128}
                               className="object-contain"/>
                        <p className="font-montserrat text-[1.5rem] font-bold text-[#ddd6cb] m-0">
                            Participate in exclusive events
                        </p>
                    </li>
                </ul>
            </main>
        </>
    );
}
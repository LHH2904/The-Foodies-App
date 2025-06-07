import Link from "next/link";
import logoImg from '@/assets/logo.png'
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground/>
            <header className='flex justify-between items-center px-4 py-8 md:px-[10%]'>
                <Link
                    className='flex items-center gap-8 text-2xl font-bold uppercase tracking-wider text-[#ddd6cb]
'
                    href="/"
                >
                    <Image
                        src={logoImg}
                        alt="A plate with food on it"
                        width={80}
                        height={80}
                        className="w-20 h-20 object-contain drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                    />
                    The Foodies
                </Link>

                <nav>
                    <ul className='flex gap-6 text-lg list-none m-0 p-0'>
                        <li>
                            <Link
                                href="/meals"
                                className='no-underline text-[#ddd6cb] font-bold px-4 py-2 rounded-md
                         hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331]
                         hover:bg-clip-text hover:text-transparent
                         hover:drop-shadow-[0_0_18px_rgba(248,190,42,0.8)]'
                            >
                                Meals
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/meals/share"
                                className='no-underline text-[#ddd6cb] font-bold px-4 py-2 rounded-md
                         hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331]
                         hover:bg-clip-text hover:text-transparent
                         hover:drop-shadow-[0_0_18px_rgba(248,190,42,0.8)]'
                            >
                                Share Meals
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/community"
                                className='no-underline text-[#ddd6cb] font-bold px-4 py-2 rounded-md
                         hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331]
                         hover:bg-clip-text hover:text-transparent
                         hover:drop-shadow-[0_0_18px_rgba(248,190,42,0.8)]'
                            >
                                Community
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
import Link from "next/link";
import logoImg from '@/assets/logo.png'
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

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
                        priority
                        className="w-20 h-20 object-contain drop-shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                    />
                    The Foodies
                </Link>

                <nav>
                    <ul className='flex gap-6 text-lg list-none m-0 p-0'>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import type {ReactNode} from "react";

interface NavLinkProps {
    href: string;
    children: ReactNode;
}

export default function NavLink({href, children}: NavLinkProps) {
    const pathName = usePathname();

    // So sánh chính xác hoặc subpath
    const isActive = pathName === href || pathName.startsWith(`${href}/`);

    const linkClasses = `no-underline font-bold px-4 py-2 rounded-md
        ${isActive
        ? `bg-gradient-to-r from-[#ff8a05] to-[#f9b331]
               bg-clip-text text-transparent
               drop-shadow-[0_0_18px_rgba(248,190,42,0.8)]`
        : `text-[#ddd6cb]
               hover:bg-gradient-to-r hover:from-[#ff8a05] hover:to-[#f9b331]
               hover:bg-clip-text hover:text-transparent
               hover:drop-shadow-[0_0_18px_rgba(248,190,42,0.8)]`
    }`;

    return (
        <Link href={href} className={linkClasses}>
            {children}
        </Link>
    );
}

import Link from "next/link";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
    return (
        <>
            <header className="flex gap-12 mx-auto my-12 w-[90%] max-w-[75rem]">
                <div className="w-[40rem] h-[25rem]">
                    <ImageSlideshow/>
                </div>
                <div>
                    <div className="text-[#ddd6cb] text-[1.5rem]">
                        <h1 className="text-2xl font-bold font-montserrat uppercase tracking-[0.15rem] bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
                            NextLevel Food for NextLevel Foodies
                        </h1>
                        <p className="mt-2">Taste & share food from all over the world.</p>
                    </div>

                    <div className="flex-col gap-4 text-[1.5rem] mt-4">
                        <Link
                            href="/community"
                            className="text-[#ff9b05] font-normal pl-0 hover:text-[#f9b241]"
                        >
                            Join the Community
                        </Link>
                        <br/>
                        <Link
                            href="/meals"
                            className="inline-block mt-4 px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#f9572a] to-[#ff9b05] hover:from-[#fd4715] hover:to-[#f9b241]"
                        >
                            Explore Meals
                        </Link>
                    </div>
                </div>
            </header>

            <main>
                <section
                    className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] mx-auto my-8 text-center">
                    <h2 className="text-2xl font-bold mb-2">How it works</h2>
                    <p>
                        NextLevel Food is a platform for foodies to share their favorite
                        recipes with the world. It&apos;s a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                    <p className="mt-2">
                        NextLevel Food is a place to discover new dishes, and to connect
                        with other food lovers.
                    </p>
                </section>

                <section
                    className="flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] mx-auto my-8 text-center">
                    <h2 className="text-2xl font-bold mb-2">Why NextLevel Food?</h2>
                    <p>
                        NextLevel Food is a platform for foodies to share their favorite
                        recipes with the world. It&apos;s a place to discover new dishes, and to
                        connect with other food lovers.
                    </p>
                    <p className="mt-2">
                        NextLevel Food is a place to discover new dishes, and to connect
                        with other food lovers.
                    </p>
                </section>
            </main>
        </>
    );
}

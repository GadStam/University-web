import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { CardHoverEffectDemo } from "@/components/cardHoverEffectDemo";
import  {RightSlide}  from "@/components/RightSlide";

export default function Home() {
    return (
        <section className="px-4 md:px-6 lg:px-8 xl:px-10">
            <div className="text-center lg:text-left">
                <h1 className="text-white sm:text-5xl lg:text-8xl font-extrabold md:text-6xl text-4xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-700">
                        ORT X UNIVERSIDADES
                    </span>
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 mt-3 text-lg sm:text-xl md:text-xl lg:text-xl">
                    Bienvenido al sitio web en el que podrás ver diferentes alumnos que pasaron por tu especialidad que cuentan en qué carrera se encuentran ahora, por qué la eligieron y podrás ponerte en contacto con ellos por si necesitas ayuda.
                </p>
            </div>
            <RightSlide />
            <CardHoverEffectDemo />
        </section>
    );
}

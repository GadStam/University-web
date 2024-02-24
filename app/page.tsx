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
	<section>
      <div className="text-justify">
	  <h1 className="text-white sm:text-8xl lg:text-8xl font-extrabold md:text-xl text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
              ORT X UNIVERSIDADES
            </span>
			</h1>
			<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 mt-3">
          Bienvenido al sitio web en el que podras ver diferentes alumnos que pasaron por tu especialidad que cuentan en que carrera se encuentran ahora, porque la elijieron y podras ponerte en contacto con ellos por si necesitas una ayuda
        </p>

		<RightSlide/>

		<CardHoverEffectDemo/>
			</div>
	  </section>
		
	);
}

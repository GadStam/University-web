"use client";
import { TextGenerateEffectDemo } from "@/components/text-generator";
import { ButtonIn } from "@/components/buttonIn";
import Link from "next/link";


export default function PricingPage() {
	

	return (
	  <div className="px-4 sm:px-6 lg:px-8 relative flex flex-col justify-center items-center">
		<h1 className="dark:text-white text-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center relative z-10">
		  <span className="bg-clip-text">Colaborador</span>
		</h1>
		<div className="text-justify max-w-lg mx-auto my-2 relative z-10 mt-7 text-xl dark:text-white text-black">
		  <TextGenerateEffectDemo />
		</div>
		{/* Línea azul de subrayado */}
		<style jsx>{`
		  h1::after {
			content: '';
			position: absolute;
			left: 50%;
			bottom: -10px;
			width: 100%;
			height: 2px;
			background: linear-gradient(to right, transparent, #6366f1, transparent);
			transform: translateX(-50%);
			z-index: 1;
		  }
  
		  @media (min-width: 640px) {
			h1 {
			  font-size: 5rem; /* Ajusta el tamaño del texto para dispositivos de pantalla pequeña */
			}
		  }
  
		  @media (min-width: 768px) {
			h1 {
			  font-size: 6rem; /* Ajusta el tamaño del texto para tabletas */
			}
		  }
  
		  @media (min-width: 1024px) {
			h1 {
			  font-size: 7rem; /* Ajusta el tamaño del texto para pantallas más grandes */
			}
		  }
		`}</style>
		<div className="container py-10 px-10 mx-0 min-w-full flex flex-col items-center">
		  <Link href='/login'><ButtonIn text={'Unite'}/></Link>
		</div>
	  </div>
	);
  }
  
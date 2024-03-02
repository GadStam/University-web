"use client";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const words = `Ser un colaborador consta de ser una persona que este dispuesta a ayudar y dar un consejo para aquellos que todavia no saben que carrera estudiar. Ser alguien amable y comrpometido a colaborar para que entre todos podamos crecer
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

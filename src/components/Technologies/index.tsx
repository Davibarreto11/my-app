import React, { useEffect, useRef, useState } from "react";

import TeamBro from "../../assets/Creative team-bro.png";
import HandCondig from "../../assets/Hand coding-bro.png";
import SuperHero from "../../assets/Superhero-cuate.png";
import Typed from "typed.js";

const Technologies: React.FC = () => {
  const ref = useRef(null);

  const state = [
    "seu blog.",
    "sua empresa.",
    "seu negócio.",
    "você.",
    "seu portifólio.",
  ];

  useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: state,
      typeSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, [state, ref]);

  return (
    <div className="w-full flex flex-col justify-evenly items-center">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <h2
            className="
            mt-12
            text-3xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            xl:text-5xl
            2xl:text-5xl
            3xl:text-5xl
            4xl:text-6xl
            font-bold
            leading-tight"
          >
            Tecnologias
          </h2>
          <p className="w-3/3 mt-4 text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 4xl:text-[38px]">
            Somos especialistas em desenvolvimento de sites para{" "}
            <span className="text-primaryPink font-bold" ref={ref} />
          </p>
          <p className="w-3/3 mt-2 text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 4xl:text-[38px]">
            Entrega rápida e com a melhor qualidade.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto px-4 sm:py-12 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="group text-center flex flex-col items-center justify-center w-48 md:w-96 xl:w-72 2xl:w-96 3xl:w-1/4">
          <div className="mt-6 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8 w-full">
            <img
              src={SuperHero}
              alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-xl 2xl:text-4xl 4xl:text-4xl font-bold text-gray-700">
            Agilidade
          </h3>
          <p className="mt-2 lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
            Garantimos os melhores tempos de entrega e de resposta para os
            nossos clientes.
          </p>
        </div>

        <div className="group text-center flex flex-col items-center justify-center w-48 md:w-96 xl:w-72 2xl:w-96 3xl:w-1/4">
          <div className="mt-6 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8 w-full">
            <img
              src={HandCondig}
              alt="Olive drab green insulated bottle with flared screw lid and flat top."
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl 4xl:text-4xl font-bold text-gray-700">
            Qualidade
          </h3>
          <p className="mt-2 lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
            A melhor qualidade e desempenho juntos em um site feito para você,
            no seu estilo.
          </p>
        </div>

        <div className="group text-center flex flex-col items-center justify-center w-48 md:w-96 xl:w-72 2xl:w-96 3xl:w-1/4">
          <div className="mt-6 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-8 w-full">
            <img
              src={TeamBro}
              alt="Person using a pen to cross a task off a productivity paper card."
              className="w-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-xl 2xl:text-4xl 4xl:text-4xl font-bold text-gray-700">
            Criatividade
          </h3>
          <p className="mt-2 mb-6 lg:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl">
            Sites criativos com melhores técnicas de design para fazer você
            seu projeto decolar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

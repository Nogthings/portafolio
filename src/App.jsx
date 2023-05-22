import Laravel from "/Laravel.png";
import Cloud from "/Cloud.png";
import Logo from "/Logo.png";
import React from "/react.svg";
import LaravelIcon from "/laravel.svg";
import Maps from "/maps.svg";
import Rutas from "/Rutas.jpeg";
import Biblioteca from "/Biblioteca.png";
import Menu from "/menu.png";
import Devstagram from "/devstagram.png";
import Portafolio from "/portafolio.png";

export default function App() {
  return (
    <>
      {/* // <!-- Hero --> */}
      <section className="relative overflow-hidden">
        {/* <!-- Gradients --> */}
        <div
          aria-hidden="true"
          className="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
        </div>
        {/* <!-- End Gradients --> */}

        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div>
              <nav
                className="relative max-w-7xl flex flex-wrap basis-full items-center w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 mb-20"
                aria-label="Global"
              >
                <div className="flex items-center justify-between">
                  <img src={Logo} alt="logo" className="h-14 mr-2" />
                  <a
                    className="flex-none text-2xl font-semibold dark:text-white"
                    href="#"
                    aria-label="Brand"
                  >
                    DevCave
                  </a>
                </div>

                <div className="flex items-center ml-auto sm:ml-0 sm:order-3">
                  <div className="pl-3 sm:pl-6 sm:ml-6 sm:border-l sm:border-gray-300 dark:border-gray-700">
                    <a 
                    href="https://github.com/Nogthings/cv/raw/main/Oscar%20Galvez%20CV.pdf"
                    download="oscargalvez-cv.pdf"
                    className="p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 px-5">
                      Resumen
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Devcave: Solucines en software
              </p>

              {/* <!-- Title --> */}
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  DevCave
                </h1>
              </div>
              {/* <!-- End Title --> */}

              <div className="mt-5 max-w-3xl">
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  Soy un desarrollador especializado en diseño web. Me encanta
                  utilizar mi creatividad y habilidades técnicas para crear
                  soluciones visualmente atractivas y efectivas para mis
                  clientes. Me siento muy afortunado de poder trabajar en lo que
                  amo todos los días y espero seguir creciendo en mi carrera.
                </p>
              </div>

              {/* <!-- Buttons --> */}
              <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                <a
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  href="https://blog.devcave.icu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mi Blog
                  <svg
                    className="w-3 h-3"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
              {/* <!-- End Buttons --> */}
            </div>
          </div>
        </div>
      </section>
      {/* // <!-- End Hero --> */}

      {/* <!-- Card Blog --> */}
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto m-40">
        <h2 className="block font-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-gray-200 text-center mb-10">
          Entradas del Blog
        </h2>
        {/* <!-- Grid --> */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* <!-- Card --> */}
          <a
            className="group sm:flex"
            href="https://blog.devcave.icu/no-funcionan-tus-estilos-en-laravel-una-vez-en-produccion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover"
                src={Laravel}
                alt="Image Description"
              />
            </div>

            <div className="grow">
              <div className="p-4 flex flex-col h-full sm:p-6">
                <div className="mb-3">
                  <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    PHP
                  </p>
                </div>
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                  Solucionando problemas de estilos en Laravel
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Descubre por qué tus estilos en Laravel no funcionan en
                  producción y aprende cómo solucionarlos para una experiencia
                  visual impecable en tu aplicación web.
                </p>

                <div className="mt-5 sm:mt-auto">
                  {/* <!-- Avatar --> */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-[2.875rem] w-[2.875rem] rounded-full"
                        src="https://pbs.twimg.com/profile_images/1519935012824502273/ciAVOqsT_400x400.jpg"
                        alt="Image Description"
                      />
                    </div>
                    <div className="ml-2.5 sm:ml-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        Oscar Galvez
                      </h4>
                      <p className="text-xs text-gray-500">May 20, 2023</p>
                    </div>
                  </div>
                  {/* <!-- End Avatar --> */}
                </div>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a className="group sm:flex" href="#">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover"
                src={Cloud}
                alt="Image Description"
              />
            </div>
            <div className="grow">
              <div className="p-4 flex flex-col h-full sm:p-6">
                <div className="mb-3">
                  <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                    Cloud
                  </p>
                </div>
                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
                  Hacer deploy de Apps en DigitalOcean
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  At Wake, our mission has always been focused on bringing
                  openness.
                </p>

                <div className="mt-5 sm:mt-auto">
                  {/* <!-- Avatar --> */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-[2.875rem] w-[2.875rem] rounded-full"
                        src="https://pbs.twimg.com/profile_images/1519935012824502273/ciAVOqsT_400x400.jpg"
                      />
                    </div>
                    <div className="ml-2.5 sm:ml-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        Hanna Wolfe
                      </h4>
                      <p className="text-xs text-gray-500">May 20, 2023</p>
                    </div>
                  </div>
                  {/* <!-- End Avatar --> */}
                </div>
              </div>
            </div>
          </a>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </section>
      {/* <!-- End Card Blog --> */}

      {/* <!-- Icon Blocks --> */}
      <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto m-40">
        {/* <!-- Grid --> */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
              Servicios
            </h2>
            <p className="mt-3 text-gray-800 dark:text-gray-400">
              Descubre el poder de la innovación con mis servicios de desarrollo
              personalizados. Como desarrollador, puedo transformar tus ideas en
              realidades tangibles. Desde el diseño de aplicaciones web y
              móviles hasta la creación de software a medida, estoy aquí para
              satisfacer tus necesidades con precisión y eficiencia. Maximiza tu
              potencial digital conmigo.{" "}
            </p>
            <p className="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500">
              Contactanos
              <svg
                className="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                  fill="currentColor"
                />
              </svg>
            </p>
          </div>
          {/* <!-- End Col --> */}

          <div className="space-y-6 lg:space-y-10">
            {/* <!-- Icon Block --> */}
            <div className="flex">
              {/* <!-- Icon --> */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="3"
                  stroke="#000000"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path>
                    <path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path>
                    <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path>
                    <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path>
                    <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line>
                    <line x1="32" y1="6.99" x2="32" y2="56.7"></line>
                    <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line>
                    <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line>
                    <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path>
                  </g>
                </svg>
              </span>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Paginas web
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Diseño y desarrollo de páginas web modernas y atractivas que
                  reflejan la identidad de tu marca y maximizan tu presencia en
                  línea.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex">
              {/* <!-- Icon --> */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <svg
                  className="w-7 h-7"
                  fill="#000000"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M20.629 5h-9.257a1.6 1.6 0 0 0-1.601 1.603V25.4a1.6 1.6 0 0 0 1.601 1.601h9.257c.883 0 1.6-.718 1.6-1.601V6.603c0-.885-.717-1.603-1.6-1.603zm-6.247 1.023h3.302v.768h-3.302v-.768zm1.619 19.395a1.024 1.024 0 0 1-1.023-1.021 1.023 1.023 0 0 1 2.044 0c-.001.494-.46 1.021-1.021 1.021zm5.028-3.501H10.971V7.704h10.058v14.213z"></path>
                  </g>
                </svg>
              </span>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Desarrollo Movil
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Creación de aplicaciones móviles intuitivas y funcionales para
                  iOS y Android. Potencia tu negocio y llega a tus clientes en
                  cualquier momento y lugar.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex">
              {/* <!-- Icon --> */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-code-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
                </svg>
              </span>
              <div className="ml-5 sm:ml-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Software a la medida
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Desarrollo de software a medida para cubrir las necesidades
                  específicas de tu negocio. Soluciones personalizadas y
                  escalables que optimizan tus procesos y mejoran la eficiencia
                  operativa.{" "}
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </section>
      {/* <!-- End Icon Blocks --> */}

      {/* <!-- Masonry Cards --> */}
      <section className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto m-20">
        <h2 className="block font-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-gray-200 text-center mb-10 lg:mb-20">
          Mis Proyectos
        </h2>
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
            {/* <!-- Card --> */}
            <a
              className="group relative block rounded-xl overflow-hidden"
              href="https://github.com/Nogthings/itsg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={Biblioteca}
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                  <div className="flex items-center justify-around">
                    <p>Gestor de Visitas</p>
                    <img className="h-5 w-5" src={LaravelIcon} alt="react" />
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
            {/* <!-- Card --> */}
            <a
              className="group relative block rounded-xl overflow-hidden"
              href="https://github.com/Nogthings/rutas-reactnative"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={Rutas}
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                  <div className="flex items-center justify-around">
                    <p>Rutas</p>
                    <div className="flex items-center justify-center">
                      <img className="h-5 w-5" src={React} alt="react" />
                      <p className="text-xl font-bold mx-2">+</p>
                      <img className="h-5 w-5" src={Maps} alt="laravel" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="col-span-12 md:col-span-4">
            {/* <!-- Card --> */}
            <a
              className="group relative block rounded-xl overflow-hidden"
              href="https://github.com/Nogthings/Devstagram-Laravel9andTailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={Devstagram}
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                  <div className="flex items-center justify-around">
                    <p>Devstagram</p>
                    <img className="h-5 w-5" src={LaravelIcon} alt="react" />
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            {/* <!-- Card --> */}
            <a
              className="group relative block rounded-xl overflow-hidden"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={Portafolio}
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                <div className="flex items-center justify-around">
                    <p>Portafolio</p>
                    <img className="h-5 w-5" src={React} alt="react" />
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            {/* <!-- Card --> */}
            <a
              className="group relative block rounded-xl overflow-hidden"
              href="https://github.com/Nogthings/web-menu-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
                <img
                  className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
                  src={Menu}
                  alt="Image Description"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
                <div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200">
                  <div className="flex items-center justify-around">
                    <p>Menu Digital</p>
                    <div className="flex items-center justify-center">
                      <img className="h-5 w-5" src={React} alt="react" />
                      <p className="text-xl font-bold mx-2">+</p>
                      <img
                        className="h-5 w-5"
                        src={LaravelIcon}
                        alt="laravel"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </a>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
      </section>
      {/* <!-- End Masonry Cards --> */}

      <footer>
        <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
            <div>
              <p className="flex-none text-xl font-semibold text-black dark:text-white">
                DevCave
              </p>
            </div>
            {/* <!-- End Col --> */}

            <ul className="text-center">
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                <a
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  href="https://blog.devcave.icu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
              </li>
            </ul>
            {/* <!-- End Col --> */}

            {/* <!-- Social Brands --> */}
            <div className="md:text-right space-x-2">
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="https://instagram.com/oscarg.dev?igshid=MzNlNGNkZWQ4Mg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="https://twitter.com/ChoscarG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="https://github.com/Nogthings"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="https://www.tiktok.com/@oscarg.dev?_t=8cUOnueqQ6A&_r=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-tiktok"
                  viewBox="0 0 16 16"
                >
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                </svg>
              </a>
            </div>
            {/* <!-- End Social Brands --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </footer>
    </>
  );
}

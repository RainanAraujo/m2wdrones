import {
  ArrowSquareOut,
  CaretRight,
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  WhatsappLogo,
} from "@phosphor-icons/react";

function App() {
  return (
    <div className="font-display">
      <div className="h-screen grid grid-rows-[40px_80px_1fr]">
        <nav className="flex bg-gray-200">
          <div className="mx-auto flex justify-between items-center p-2 px-8 w-full text-sm">
            <ul className="flex gap-6">
              <li>
                <a className="flex items-center gap-2 cursor-pointer">
                  <WhatsappLogo size={24} className="text-green-primary" />
                  +55 99 98477-0250
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 cursor-pointer">
                  <MapPin size={24} className="text-green-primary" />
                  Av. Rio Branco, 924, Centro - Pedreiras-MA
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 cursor-pointer">
                  <EnvelopeSimple size={24} className="text-green-primary" />
                  m2wdrones@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex gap-4 text-green-primary">
              <a href="https://www.facebook.com/m2wdrones" target="_blank">
                <InstagramLogo size={24} />
              </a>
              <a href="https://www.instagram.com/m2wdrones" target="_blank">
                <FacebookLogo size={24} />
              </a>
            </div>
          </div>
        </nav>
        <nav className="flex bg-gray-100 ">
          <div className="max-w-7xl mx-auto flex justify-start items-center w-full p-4 gap-8 px-10">
            <img src="/simbol.svg" alt="M2W Drones" className="h-12" />
            <ul className="flex gap-6">
              <li>
                <a href="#services" className="hover:underline">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#products" className="hover:underline">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contato
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Sobre nós
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main className=" bg-[url(/back_main_section.svg)] bg-cover text-white">
          <div className="flex items-start flex-col justify-end max-w-7xl w-full p-10 mx-auto h-full ">
            <div className="flex flex-col h-full justify-center  gap-2">
              <h1 className="text-5xl ">
                AUTORIZADA <span className="font-extrabold">DJI</span>
              </h1>
              <h2 className="text-xl">A mais alta tecnologia</h2>
              <button className="mt-4 px-6 py-2 bg-transparent text-white border border-white rounded-full hover:bg-white hover:text-black cursor-pointer transition-all w-fit">
                Entre em contato
              </button>
            </div>
            <div className="w-full flex justify-center items-center">
              <img src="/logos.svg" alt="logos" />
            </div>
          </div>
        </main>
      </div>

      <section id="services" className=" bg-white max-w-7xl p-10 py-20 m-auto">
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-5xl font-semibold text-center mb-6">Serviços</h3>
          <hr className="border border-green-primary w-10 mb-2" />
          <span className="text-center text-gray-600">
            A M2W entrega soluções completas em drones DJI, unindo vendas,
            <br /> suporte e treinamento de alto nível!
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Vendas",
              desc: "Na M2W, você encontra os melhores drones DJI para uma pulverização precisa",
              bgPath: "/bg_servico_1.svg",
            },
            {
              title: "Manutenção",
              desc: "Suporte técnico autorizado e pós-venda em todo o Maranhão",
              bgPath: "/bg_servico_2.svg",
            },
            {
              title: "Treinamento",
              desc: "Capacitação de nossos clientes para obterem o máximo de suas soluções tecnológicas",
              bgPath: "/bg_servico_3.svg",
            },
          ].map((service, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${service.bgPath})` }}
              className={`p-6 flex flex-col  rounded items-center text-white text-center bg-cover h-[600px] `}
            >
              <div className="h-full" />
              <div className="h-[200px]">
                <h4 className="text-3xl font-semibold mb-2 ">
                  {service.title}
                </h4>
                <p className="text-gray-300">{service.desc}</p>
              </div>
              <a href="" className="flex gap-2 mt-10">
                <ArrowSquareOut size={24} /> Saiba mais
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="products" className="py-20 m-auto bg-[#F5F8F9]">
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-5xl font-semibold text-center mb-6">Produtos</h3>
          <hr className="border border-green-primary w-10 mb-2" />
          <span className="text-center text-gray-600">
            Conheça as tecnologias de ponta que oferecemos para você
          </span>
        </div>

        <div className="flex flex-col gap-8 max-w-7xl m-auto p-10">
          <div className="p-20 grid grid-cols-[1fr_1fr] justify-items-center rounded-md bg-white items-center">
            <img src="/mavic.svg" alt="simbol" />
            <div className="flex flex-col gap-2">
              <h4 className="text-4xl font-semibold mb-4 ">DJI MAVIC 3M</h4>
              <p className="text-gray-600">
                Um levantamento aéreo eficaz precisa ver o invisível. Ele
                combina uma câmera RGB com uma câmera multiespectral para
                digitalizar e analisar o crescimento da cultura com total
                clareza. A gestão da produção agrícola requer precisão e dados,
                e o Mavic 3M oferece ambos.
              </p>
              <div className="flex gap-2 itens-center mt-4">
                <button className="p-2 px-5 border border-blue-500 rounded-full text-blue-500">
                  Entre em contato
                </button>
                <button className="flex gap-2  items-center p-2 px-5 text-blue-500">
                  Ver especificações <CaretRight />
                </button>
              </div>
            </div>
          </div>

          <div className="p-20 grid grid-cols-[1fr_1fr]  justify-items-center rounded-md bg-white items-center">
            <div className="flex flex-col gap-2">
              <h4 className="text-4xl font-semibold mb-4 ">DJI AGRAS T50</h4>
              <p className="text-gray-600">
                Eleva as operações agrícolas de drones a novos patamares. Ele
                herda um poderoso sistema de propulsão coaxial de rotor duplo e
                uma estrutura resistente ao torque de tipo dividido para
                estabilidade de nível seguinte ao transportar pulverização de 40
                kg ou espalhamento de cargas úteis de 50 kg. <br />
                <br />
                Usa um sistema de pulverização de atomização duplo, radares de
                matriz de fase dianteiro e traseiro e um sistema de visão
                binocular. Se destaca em vários cenários, desde pesquisas até
                pulverização e dispersão, garantindo operações estáveis e
                desempenho estável.
              </p>
              <div className="flex gap-2 itens-center mt-4">
                <button className="p-2 px-5 border border-blue-500 rounded-full text-blue-500">
                  Entre em contato
                </button>
                <button className="flex gap-2  items-center p-2 px-5 text-blue-500">
                  Ver especificações <CaretRight />
                </button>
              </div>
            </div>
            <img src="/t50.svg" alt="simbol" />
          </div>

          <div className="p-20 grid grid-cols-[1fr_1fr] justify-items-center rounded-md bg-white items-center">
            <img src="/t25.svg" alt="simbol" />
            <div className="flex flex-col gap-2">
              <h4 className="text-4xl font-semibold mb-4">DJI AGRAS T25</h4>
              <p className="text-gray-600">
                Redefine os padrões para drones agrícolas compactos. Leve e
                ágil, pode ser facilmente manuseado por uma pessoa. <br />
                <br />
                Pode transportar uma carga útil de pulverização até 20 kg ou uma
                carga útil de dispersão até 25 kg. O DJI AGRAS T25 está equipado
                com radares de matriz de fase dianteiro e traseiro, um sistema
                de visão binocular e uma câmera com estabilizador FPV de alta
                resolução. É compatível com várias missões, desde levantamento
                aéreo até pulverização e dispersão, e se destaca em uma
                variedade de terrenos
              </p>
              <div className="flex gap-2 itens-center mt-4">
                <button className="p-2 px-5 border border-blue-500 rounded-full text-blue-500">
                  Entre em contato
                </button>
                <button className="flex gap-2  items-center p-2 px-5 text-blue-500">
                  Ver especificações <CaretRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className=" bg-white max-w-7xl p-10 py-20 m-auto">
        <div className="flex flex-col items-center mb-10">
          <h3 className="text-5xl font-semibold text-center mb-6">Contato</h3>
          <hr className="border border-green-primary w-10 mb-2" />
        </div>
        <div className="flex gap-4 items-center justify-center">
          <div className="flex gap-4 bg-[#F5F8F9] p-8 ">
            <WhatsappLogo className="text-green-primary" size={48} />
            <div className="">
              <span className="text-xs text-gray-400">Whatsapp</span>
              <p className="font-semibold">+55 99 98477-0250</p>
            </div>
          </div>
          <div className="flex gap-4 bg-[#F5F8F9] p-8 ">
            <MapPin className="text-green-primary" size={48} />
            <div className="">
              <span className="text-xs text-gray-400">Endereço</span>
              <p className="font-semibold">
                Av. Rio Branco, 924, Centro Pedreiras-MA
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-[#F5F8F9] p-8 ">
            <EnvelopeSimple className="text-green-primary" size={48} />
            <div className="">
              <span className="text-xs text-gray-400">Email</span>
              <p className="font-semibold">m2wdrones@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="bg-[#F5F8F9] grid grid-cols-[1fr_1fr]">
        <div className="bg-[url(/fachada.svg)] bg-cover" />
        <div className="p-32 flex flex-col gap-4">
          <h1 className="text-5xl font-semibold  mb-6">Sobre nós</h1>
          <p className="text-3xl text-green-primary">
            Somos a M2W Drones, representantes autorizados da DJI Agriculture no
            Maranhão!
          </p>
          <p className="text-gray-600">
            Com sede em Pedreiras/MA, nossa missão é levar tecnologia de ponta
            para o campo, atendendo desde pequenos produtores até grandes
            propriedades agricolas. Oferecemos uma linha completa de drones
            agrícolas, além de serviços de assistência técnica com oficina
            própria, garantindo suporte especializado e pós-venda de qualidade.
          </p>
          <button className="p-2 px-5 border border-blue-500 rounded-full text-blue-500 w-fit mt-10">
            Entre em contato
          </button>
        </div>
      </section>
      <footer className="h-[80px] flex justify-between items-center px-20">
        <img src="simbol.svg" alt="simbol" className="h-14 " />
        <span className="text-gray-500">
          M2W Drones Solution todos os direitos reservados
        </span>
      </footer>
    </div>
  );
}

export default App;

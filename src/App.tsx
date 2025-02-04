function App() {
  return (
    <div className="font-sans text-gray-900">
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">AUTORIZADA DJI</h1>
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
      </nav>
      <header className="text-center py-12 bg-gray-200">
        <h2 className="text-3xl font-bold">A mais alta tecnologia</h2>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Entre em contato
        </button>
      </header>

      <section id="services" className="p-8 bg-white">
        <h3 className="text-2xl font-bold text-center mb-6">Serviços</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Vendas",
              desc: "Os melhores drones DJI para pulverização precisa",
            },
            {
              title: "Manutenção",
              desc: "Suporte técnico autorizado e pós-venda",
            },
            {
              title: "Treinamento",
              desc: "Capacitação para otimizar suas soluções",
            },
          ].map((service, index) => (
            <div key={index} className="p-6 border rounded shadow text-center">
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="p-8 bg-gray-100">
        <h3 className="text-2xl font-bold text-center mb-6">Produtos</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "DJI MAVIC 3M",
              desc: "Levantamento aéreo eficaz com câmera RGB e multiespectral",
            },
            {
              name: "DJI AGRAS T25",
              desc: "Drones agrícolas compactos com alta capacidade de carga",
            },
            {
              name: "DJI AGRAS T50",
              desc: "Pulverização de alta precisão e estabilidade avançada",
            },
          ].map((product, index) => (
            <div key={index} className="p-6 border rounded shadow text-center">
              <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
              <p>{product.desc}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Ver especificações
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="p-8 bg-white text-center">
        <h3 className="text-2xl font-bold mb-4">Sobre nós</h3>
        <p className="max-w-2xl mx-auto">
          Com sede em Pedreiras/MA, nossa missão é levar tecnologia para o
          campo, atendendo desde pequenos produtores até grandes propriedades
          agrícolas. Representamos a DJI Agriculture no Maranhão!
        </p>
      </section>

      <section id="contact" className="p-8 bg-gray-200 text-center">
        <h3 className="text-2xl font-bold mb-4">Contato</h3>
        <p>Whatsapp: +55 99 98477-0250</p>
        <p>Endereço: Av. Rio Branco, 924, Centro - Pedreiras-MA</p>
        <p>
          Email:{" "}
          <a
            href="mailto:m2wdrones@gmail.com"
            className="text-blue-600 hover:underline"
          >
            m2wdrones@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;

import CardIntro from "@/components/_ui/card-intro/card-intro";
import Separador from "@/components/_ui/separador/separador";
import Servicos from "@/components/_ui/servicos/servicos";
import Clientes from "@/components/_ui/clientes/clientes";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10 ">
      {/* Head */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-10 p-4 text-center">
          <h1 className="text-[35px] font-extrabold text-[#00e5e5] leading-[2.4rem]">
            Posta, posta e não vê resultado?
          </h1>
          <p className="sm:w-[450px] md:w-[500px]">
            Transforme cada postagem em uma{" "}
            <strong>
              oportunidade de conversão com tráfego pago estratégico.
            </strong>
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#ab3ed8] rounded-full p-4 font-bold hover:bg-[#00e5e5] hover:text-[#005050] hover:scale-110">
            Quero uma análise gratuita.
          </button>
        </div>
      </div>
      {/* Head */}

      <div className="flex flex-col p-4 gap-4">
        <h1 className="border border-[#ab3ed8] p-4 rounded-xl text-[14px] text-justify">
          Muitos empreendedores dedicam tempo e dinheiro postando nas redes, mas
          os resultados não aparecem. Foi o que aconteceu com um cliente, que
          postava sempre, mas sem conversões. Com uma gestão focada em tráfego
          pago e estratégias de mídia social, transformando essa situação,
          trazendo mais leads e vendas.
        </h1>
        <h1 className="text-center text-[20px]">
        Imagine o que uma estratégia <br/> de <span className="text-[#00e5e5] font-extrabold">tráfego pago</span> pode fazer pelo seu negócio. <br/><br/> 
        <span className="font-extrabold">Vou ajudar você a transformar cada postagem em <span className="text-[#00e5e5]">resultado</span>.</span>
        </h1>
      </div>
    </div>
  );
}

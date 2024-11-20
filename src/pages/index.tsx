import Image from "next/image";
import Check from "@/assets/icon/check.svg"

import Parceiros from "@/components/_ui/carousel/parceiros"

import Separador from "@/components/_ui/separador/separador"

export default function Home() {
  return (
    <div className="flex flex-col gap-10 ">
      <Separador/>
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
          <button className="btn animate-zoom-anim">
            Quero uma análise gratuita.
          </button>
        </div>
      </div>
      {/* Head */}

      {/* StoryTelling */}
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
      {/* StoryTelling */}

      {/* Who am i? */}
      <div className="flex flex-col gap-4 py-10 bg-[#1c1c1f]">
      <h1 className="titulo text-center">Quem sou?</h1>

      
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="rounded-full w-[96px] h-[96px] bg-blue-400"></div>
          <h1><strong>Nathalia Azevedo</strong><br/>Publicitária</h1>
        </div>
        <div className="text-[14px] text-justify p-4">
          <h2 className="">Com 6 anos de experiência em Marketing Digital e Gestão de Tráfego, ajudo empresas a crescer nas redes e atrair clientes qualificados. Trabalhei com marcas de diferentes setores, criando campanhas estratégicas que transformam engajamento em resultados reais. Se você quer potencializar sua presença online e ver retorno imediato, conte comigo para fazer isso acontecer.</h2>
        </div>
      </div>
      {/* Who am i? */}

      {/* Portfólio */}
      <div className="flex flex-col gap-4">
        <Parceiros/>
      </div>
      {/* Portfólio */}
      <Separador/>
      {/* Benefícios */}
        <div className="flex flex-col gap-4">
          <h1 className="titulo text-center">O que você ganha com Gestão de Tráfego Pago?</h1>
          <div className="flex flex-col p-4 gap-2">

            <div className="flex gap-2">
              <Image alt="" src={Check} width={32} height={32}/>
              <p><strong><span className="text-[#00e5e5]">Segmentação: </span></strong>Alcançamos o público certo, no momento certo.</p>
            </div>
            <div className="flex gap-2">
              <Image alt="" src={Check} width={32} height={32}/>
              <p><strong><span className="text-[#00e5e5]">Otimização Contínua: </span></strong>Ajustes constantes para maximizar resultados.</p>
            </div>
            <div className="flex gap-2">
              <Image alt="" src={Check} width={32} height={32}/>
              <p><strong><span className="text-[#00e5e5]">Redução de Custos Desnecessários: </span></strong>Sem desperdícios – cada real investido conta.</p>
            </div>
            <div className="flex gap-2">
              <Image alt="" src={Check} width={32} height={32}/>
              <p><strong><span className="text-[#00e5e5]">Análise e Relatórios Transparentes: </span></strong>Saiba exatamente o impacto das suas campanhas.</p>
            </div>

          </div>
        </div>
      {/* Benefícios */}
      <Separador/>
      {/* Processo */}
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h1 className="titulo text-center">Como funciona o processo de criação?</h1>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="titulo2">01 Pagamento:</h1>
          <p className="text-justify">Pagamento do valor dos serviços escolhidos.
          Pagamento do valor dos serviços escolhidos</p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="titulo2">02 Pesquisa e análise:</h1>
          <p className="text-justify">Pesquisa de mercado e análise das redes
          sociais conforme a persona definida.</p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="titulo2">03 Criação de campanha:</h1>
          <p className="text-justify">Todo processo criativo e operacional da campanha,
          briefing, planejamento e desenvolvimento.</p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="titulo2">04 Aprovação:</h1>
          <p className="text-justify"> Aprovação quinzenal das artes para campanha.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="titulo2">05 Execução:</h1>
          <p className="text-justify">Programação das postagem, interação com público,
 análise
 Programação das postagem, interação com público,
 análise    e ajustes no planejamento.</p>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="titulo2">06 Registro desempenho:</h1>
          <p className="text-justify">Relatório mensal do desempenho final da campanha.</p>
        </div>

      </div>
      {/* Processo */}

      {/* Call to action final */}
      <div className="flex flex-col items-center p-4 gap-4 py-20 bg-[#1c1c1f]">
        <h1 className="titulo animate-zoom-anim text-center">Chegou a hora de transformar suas postagens em <span className="text-[#ab3ed8]">Resultados Reais!</span></h1>
        <p className="text-center">Com a gestão de tráfego pago certa, você pode fazer cada investimento valer a pena.</p>
        <button className="btn">Solicite uma Análise Gratuita</button>
      </div>
    </div>
  );
}

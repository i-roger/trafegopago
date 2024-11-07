export default function Servicos() {
    return(
        <div className="flex justify-center">
        <div className="w-[1071px] flex flex-col md:flex-row justify-center md:justify-evenly gap-4 md:gap-20 px-4">
          {/* BLOCO ESQUERDO */}
          <div className="flex flex-col items-center gap-4 md:gap-14">
            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                Gestão de mídias
              </h1>
              <p className="text-xl text-white">
                Nas redes sociais, sua marca se torna parte da vida dos
                clientes. Com uma pesquisa de mercado sólida e estratégias bem
                definidas, atraímos novos clientes e convertemos conexões em
                vendas reais.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                Campanhas e meta ADS
              </h1>
              <p className="text-xl text-white">
                Meta Ads são anúncios pagos no Facebook e Instagram que ajudam a
                converter seguidores em clientes e impulsionar vendas.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                Google meu negócio
              </h1>
              <p className="text-xl text-white">
                O Google Meu Negócio ajuda a aumentar a visibilidade da sua
                empresa localmente, exibindo informações importantes como
                endereço, horário e avaliações no Google.
              </p>
            </div>
          </div>
          {/* BLOCO ESQUERDO */}

          {/* BLOCO DIREITO */}
          <div className="flex flex-col items-center gap-4 md:gap-14 md:pt-28">
            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                Consultoria de marketing
              </h1>
              <p className="text-xl text-white">
                Descubra como o marketing pode transformar sua empresa! Seja o
                CEO de uma marca que realmente vende, conquiste a confiança dos
                seus clientes e fidelize novos públicos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                Campanhas Google ADS
              </h1>
              <p className="text-xl text-white">
                Google Ads são estratégias criadas para impulsionar vendas e
                fortalecer sua marca na plataforma do Google.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#7f00b2]">
              <h1 className="text-3xl break-normal text-[#00ffff]">
                UX / UI Design
              </h1>
              <p className="text-xl text-white">
                UI/UX Design melhora a experiência e o visual de sites e apps,
                tornando- os mais intuitivos e agradáveis para o usuário.
              </p>
            </div>
          </div>
          {/* BLOCO DIREITO*/}
        </div>
      </div>
    )
}
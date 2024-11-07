import CardIntro from "@/components/_ui/card-intro/card-intro"

import Separador from "@/components/_ui/separador/separador"

import Servicos from "@/components/_ui/servicos/servicos"

import Clientes from "@/components/_ui/clientes/clientes"
export default function Home() {
  return (
    <div className="flex flex-col gap-10">
    <CardIntro/>
    <Separador titulo="Serviços"/>
    <Servicos/>
    <Separador titulo="Nossos Clientes"/>
    <Clientes/>
      <div className="flex justify-center gap-4">
        <div className="w-40 h-40 rounded-xl bg-[#00e5e5]"></div>
        <div className="w-40 h-40 rounded-xl bg-[#00ffff]"></div>
        <div className="w-40 h-40 rounded-xl bg-[#7f00b2]"></div>
        <div className="w-40 h-40 rounded-xl bg-[#ab3ed8]"></div>
      </div>
      <div className="flex justify-center gap-4">
        <div className="w-40 h-40 border rounded-xl border-[#00e5e5]"></div>
        <div className="w-40 h-40 border rounded-xl border-[#00ffff]"></div>
        <div className="w-40 h-40 border rounded-xl border-[#7f00b2]"></div>
        <div className="w-40 h-40 border rounded-xl border-[#ab3ed8]"></div>
      </div>
    </div>
  );
}

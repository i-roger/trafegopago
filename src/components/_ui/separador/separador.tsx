interface Props {
  titulo: string,
}

export default function Separador(props:Props) {

  return (
    <div className="inline-flex items-center justify-center w-full">
      <hr className="w-[700px] h-px my-8 border-0 bg-[#7f00b2]" />
      <span className="absolute text-center px-2 font-bold text-3xl text-white -translate-x-1/2 left-1/2 bg-[#121214]">
        {props.titulo}
      </span>
    </div>
  );
}

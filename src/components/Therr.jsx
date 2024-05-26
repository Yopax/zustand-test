"use client"
import { useStore } from "@/store/useStore";



function Therr() {
    const valor1 = useStore((state) => state.valor1);

  return (
    <>
    <h3 className="bg-sky-400 p-2 rounden-lg">{valor1}</h3>
    </>
    
  );
}

export default Therr;
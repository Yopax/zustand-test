"use client"
import { useStore } from "@/store/useStore";


function MostrarValores() {
    const valor1 = useStore((state) => state.valor1);
    const valor2 = useStore((state) => state.valor2);
    const valor3 = useStore((state) => state.valor3);
  
    return (
      <div>
        <h2>Valor 1 + 1: {valor1 + 1}</h2>
        <h2>Valor 2 + 2: {valor2 + 2}</h2>
        <h2>Valor 3 + 3: {valor3 + 3}</h2>
      </div>
    );
  }
  
  export default MostrarValores;
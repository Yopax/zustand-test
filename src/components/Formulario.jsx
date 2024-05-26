"use client"
import { useStore } from "@/store/useStore";
import { useState } from "react";


function Formulario() {
    const updateValores = useStore((state) => state.updateValores);
  const [inputValues, setInputValues] = useState({ valor1: 0, valor2: 0, valor3: 0 });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: Number(value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateValores(inputValues.valor1, inputValues.valor2, inputValues.valor3);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Valor 1:
          <input type="number" name="valor1" value={inputValues.valor1} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Valor 2:
          <input type="number" name="valor2" value={inputValues.valor2} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Valor 3:
          <input type="number" name="valor3" value={inputValues.valor3} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Formulario;
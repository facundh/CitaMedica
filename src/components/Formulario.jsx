import React, {useState} from "react";


const Formulario = () => {

  const [nombre, setNombre ]  = useState('Hook');
  return (
    <div className=" md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Segumiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Paciente y {""}
        <span className=" text-green-400 font-bold text-lg">Administralos</span>
      </p>

      <form className="bg-white shadow-md  rounded-lg py-10 px-5 mb-10">
        <div className=" mb-5">
          <label
            htmlFor="paciente"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre
          </label>
          <input
            id="paciente"
            type="text"
            placeholder="Nombre del Paciente"
            className="border-2 w-full p-2 mt-2 placeholder-green-400 rounded-md"
            value={nombre}
            onChange= { (e) => setNombre(e.target.value) }
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="doctor"
            className="block text-gray-700 uppercase font-bold"
          >
            Doctor
          </label>
          <input
            id="doctor"
            type="text"
            placeholder="Nombre del Doctor"
            className="border-2 w-full p-2 mt-2 placeholder-green-400 rounded-md"
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email contacto"
            className="border-2 w-full p-2 mt-2 placeholder-green-400 rounded-md"
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-green-400 rounded-md"
          />
        </div>
        <div className=" mb-5">
          <label
            htmlFor="diagnostico"
            className="block text-gray-700 uppercase font-bold"
          >
            Diagnostico
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-green-400 rounded-md"
            id="diagnostico"
            placeholder="Diagnostico"
          />
        </div>
        <input 
            type='submit'
            className=" font-bold text-center bg-green-400 w-full p-3 uppercase hover:bg-green-500 cursor-pointer transition-opacity"
            value='Agregar Paciente'
        />
      </form>
    </div>
  );
};

export default Formulario;

import React from "react";
import Paciente from "./Paciente";

const ListaPacientes = ({pacientes}) => {
  return (
    <div className="md:w-1/2  lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Administra tus pacientes {""}
        <span className=" text-green-400 font-bold text-lg">
          {" "}
          Pacientes y Citas{" "}
        </span>
      </p>
      {
        pacientes.map(paciente  =>( <Paciente paciente={paciente} />))
      }
      
     
    </div>
  );
};

export default ListaPacientes;

import React from "react";
import Paciente from "./Paciente";

const ListaPacientes = ({ pacientes, setPaciente }) => {
  return (
    <div className="md:w-1/2  lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Lista Pacientes</h2>

          <p className="text-lg mt-5 text-center mb-10">
            Administra tus pacientes {""}
            <span className=" text-green-400 font-bold text-lg">
              {" "}
              Pacientes y Citas{" "}
            </span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Agrega pacientes {""}
            <span className=" text-green-400 font-bold text-lg">
              {" "}
              Pacientes y Citas{" "}
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListaPacientes;

import React, {useState} from "react";




const Formulario = () => {

  const [nombre, setNombre ]  = useState('');
  const [doctor, setDoctor]  = useState('');
  const [email, setEmail ]  = useState('');
  const [fecha, setFecha ]  = useState('');
  const [diagnostico, setDiagnostico ]  = useState('');

  const [error, setError] = useState (false);

  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Validaciòn formulario
    ([nombre, doctor, email, fecha, diagnostico].includes('')) ? setError(true) : setError(false);
  }
  return (
    <div className=" md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Segumiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Paciente y {""}
        <span className=" text-green-400 font-bold text-lg">Administralos</span>
      </p>

      <form className="bg-white shadow-md  rounded-lg py-10 px-5 mb-10 mx-5" onSubmit={handleSubmit}>
        { error && (
          <div className=" bg-red-900 text-white text-center uppercase p-4 rounded  font-bold mb-2">
              <p>Todos los campos son obligatorios</p>
          </div>
   
  )}
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
            value={doctor}
            onChange= { (e) => setDoctor(e.target.value) }
          >
            Doctor
          </label>
          <input
            id="doctor"
            type="text"
            placeholder="Nombre del Doctor"
            className="border-2 w-full p-2 mt-2 placeholder-green-400 rounded-md"
            value={doctor}
            onChange= { (e) => setDoctor(e.target.value) }
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
            value={email}
            onChange= { (e) => setEmail(e.target.value) }
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
            value={fecha}
            onChange= { (e) => setFecha(e.target.value) }
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
            value={diagnostico}
            onChange= { (e) => setDiagnostico(e.target.value) }
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

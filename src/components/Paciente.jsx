

const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case"> Hook </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Doctor: {""}
        <span className="font-normal normal-case"> Effect </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case"> test@test.com </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case"> 01/04/2022 </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas {""}
        <span className="font-normal normal-case">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          deserunt hic nulla ea non optio, perferendis eius incidunt ab
          exercitationem eaque ducimus voluptates sed aperiam amet impedit
          commodi ipsa ullam.{" "}
        </span>
      </p>
    </div>
  );
};

export default Paciente;

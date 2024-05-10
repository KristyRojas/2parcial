import React from "react";
//import "./UserDetails.css";

const PrimerComponente = () => {
  // const [user, setUser] = useState({});
  // setUser(props.user);
  //const character = props.character;
  if (!personaje) {
    return <div>No se ha proporcionado ningún personaje</div>;
  }
  return (
    <div className="contenedorGrande">
      <div className="contenedorImagen">
        <img
          className="redonda"
          src={personaje.image}
          alt={`avatar de ${personaje.name}`}
        ></img>
      </div>
      
      <button className="ubicacion"> play </button>
    
    </div>
  );
};

export default UserDetails;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [wins, setWins] = useState("");
  const [loss, setLoss] = useState("");
  const [points, setPoints] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,wins,loss,points,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>

          <div className="field">
            <label className="label">Nom du Joueur</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Saisir nom du joueur"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Nombre de victoire</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={wins}
                onChange={(e) => setWins(e.target.value)}
                placeholder="exemple: 10"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Nombre de défaite</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={loss}
                onChange={(e) => setLoss(e.target.value)}
                placeholder="exemple: 10"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Point Total</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={points}
                onChange={(e) => setPoints(e.target.value)}
                placeholder="exemple: 30"
              />
            </div>
          </div>
        
          <div className="field">
            <button type="submit" className="button is-success">
              Ajouter Joueur
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;

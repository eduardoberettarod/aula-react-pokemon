import React, { useRef, useState } from "react";
import "./SomFundo.css";

function SomFundo() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [mostraVolume, setMostraVolume] = useState(false);
  const [tocando, setTocando] = useState(false);

  // Inicializa áudio uma vez
  if (!audioRef.current) {
    audioRef.current = new Audio("/audio/bg-tema.mp3"); // pasta public/audio
    audioRef.current.volume = volume;
    audioRef.current.loop = true; // deixa em loop
  }

  const alternarSom = () => {
    const audio = audioRef.current;

    if (tocando) {
      audio.pause();
      setTocando(false);
    } else {
      audio.play()
        .then(() => {
          setTocando(true);
          setMostraVolume(true); // só mostra slider depois do play
        })
        .catch(err => console.log("Autoplay bloqueado:", err));
    }
  };

  const mudarVolume = (e) => {
    const novoVolume = parseFloat(e.target.value);
    setVolume(novoVolume);
    audioRef.current.volume = novoVolume;
  };

  return (
    <div className="som-container">
      <button onClick={alternarSom} className={`btn-som ${tocando ? "tocando" : "pausado"}`}>
        <img src="./img/pokebola-vermelha.png" alt="Pokebola" className="icone-pokebola" />
        {tocando ? "Pausar Música" : "Tocar Música"}
      </button>

      {mostraVolume && (
        <div className="controle-volume">
          <label>Volume: {Math.round(volume * 100)}%</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={mudarVolume}
          />
        </div>
      )}
    </div>
  );
}

export default SomFundo;

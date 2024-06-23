import { useEffect, useState } from "react";
import "./App.css";
import { Player } from "./components/player";
import {
  PlayerWinrarControlsEnum,
  PlayerZipControlsEnum,
} from "./enum/player-controls.enum";

function App() {
  //JOGADORES
  const [winrar, setWinrar] = useState({
    id: 1,
    color: "purple",
    left: 60,
    bottom: 0,
    isJumping: false,
    jumpHeight: 0,
  });

  const [zip, setZip] = useState({
    id: 2,
    color: "green",
    left: 0,
    bottom: 0,
    isJumping: false,
    jumpHeight: 0,
  });

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.keyCode) {
      case PlayerWinrarControlsEnum.WINLEFT:
        setWinrar((prevWinrar) => ({
          ...prevWinrar,
          left: prevWinrar.left - 10,
        }));
        break;
      case PlayerWinrarControlsEnum.WINRIGHT:
        setWinrar((prevWinrar) => ({
          ...prevWinrar,
          left: prevWinrar.left + 10,
        }));
        break;
      case PlayerZipControlsEnum.ZIPLEFT:
        setZip((prevZip) => ({ ...prevZip, left: prevZip.left - 10 }));
        break;
      case PlayerZipControlsEnum.ZIPRIGHT:
        setZip((prevZip) => ({ ...prevZip, left: prevZip.left + 10 }));
        break;
      case PlayerWinrarControlsEnum.WINTOP:
        console.log(!winrar.isJumping, winrar.bottom);
        if (!!!winrar.isJumping && winrar.bottom === 0) {
          setWinrar((prevWinrar) => ({
            ...prevWinrar,
            isJumping: true,
            bottom: 140,
          }));
          setTimeout(() => {
            setWinrar((prevWinrar) => ({
              ...prevWinrar,
              jumpHeight: 0,
              bottom: 0,
              isJumping: false,
            }));
          }, 400);
        }
        break;
      case PlayerZipControlsEnum.ZIPTOP:
        if (!!!zip.isJumping && zip.bottom === 0) {
          setZip((prevZip) => ({
            ...prevZip,
            isJumping: true,
            bottom: 140,
          }));
          setTimeout(() => {
            setZip((prevZip) => ({
              ...prevZip,
              jumpHeight: 0,
              bottom: 0,
              isJumping: false,
            }));
          }, 400);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [winrar, zip]);

  const players = [winrar, zip];

  return (
    <div>
      {players.map((player) => (
        <Player
          key={player.id}
          id={player.id}
          color={player.color}
          positionLeft={player.left}
          positionBottom={player.bottom}
          isJumping={player.isJumping}
          jumpHeight={player.jumpHeight}
        />
      ))}
    </div>
  );
}

export default App;

import { createEffect, createSignal } from "solid-js";
import cover from "./assets/cover.jpg";
import violino from "./assets/violino_desante.mp3";

function App() {
  const [playSound, setPlay] = createSignal(false);
  const musicao = new Audio(violino);

  function handleClick() {
    setPlay(!playSound());
  }

  createEffect(() => {
    if (playSound()) {
      musicao.play();
    } else {
      musicao.pause();
      musicao.currentTime = 0;
    }
  });

  return (
    <>
      <div class="h-screen w-screen flex flex-col items-center place-content-center bg-gray-800">
        <img src={cover} class="w-96" />
        <p class="text-center">fodase</p>
        <br />
        <p class="text-white font-semibold">
          Violino do desande - Dj Breno Paixão
        </p>
        <br />
        <button
          class="bg-white text-center px-4 rounded-sm hover:bg-sky-800 hover:text-white shadow-md transition duration-300 font-bold text-3xl"
          onclick={handleClick}
        >
          {playSound() ? "Stop" : "Play"}
        </button>
      </div>
    </>
  );
}

export default App;

import type { FavoritePersonaje } from "src/Interfaces/favorite-personaje";
import { For, createSignal } from "solid-js";
import { FevoritePersonajeCard } from "./FevoritePersonajeCard";

const getLocalStoragePersonajes = (): FavoritePersonaje[] => {
  const favoritePersonajes = JSON.parse(
    localStorage.getItem("favorites") ?? "[]"
  );

  return favoritePersonajes;
};

export const FavoritePersonajes = () => {
  const [personajes, setPersonajes] = createSignal(getLocalStoragePersonajes());
  return (
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
      <For each={personajes()}>
        {(personaje) => <FevoritePersonajeCard personaje={personaje} />}
      </For>
    </div>
  );
};

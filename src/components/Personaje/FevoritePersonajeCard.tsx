import { createSignal, Show, type Component } from "solid-js";
import type { FavoritePersonaje } from "src/Interfaces/favorite-personaje";

interface Props {
  personaje: FavoritePersonaje;
}

export const FevoritePersonajeCard: Component<Props> = ({ personaje }) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imgeSrc = `https://dragonball-api.com/characters/${personaje.id}`;

  const deleFavorite = () => {
    const favorite = JSON.parse(
      localStorage.getItem("favorite") || "[]"
    ) as FavoritePersonaje[];
    const newFavorite = favorite.filter((fav) => fav.name !== personaje.name);
    localStorage.setItem("favorites", JSON.stringify(newFavorite));
    setIsVisible(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/Personajes/${personaje.name}`}>
          <img src={imgeSrc} alt={personaje.name} width="96" height="96" />
          <p class="capitalize">
            #{personaje.id} {personaje.name}
          </p>
        </a>
        <button onClick={deleFavorite} class="text-red-400">
          Borrar
        </button>
      </div>
    </Show>
  );
};

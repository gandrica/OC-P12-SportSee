import { Rectangle } from "recharts";
function CustomCursor(props) {
  // Recharts nous donne automatiquement les coordonnées (x, y) et la taille (width, height)
  const { x, y, width, height } = props;

  // 1. Définis la nouvelle largeur que tu souhaites pour le fond gris
  const nouvelleLargeur = 60;

  // 2. On recalcule la position X pour que le fond reste bien centré derrière les barres
  const xCentre = x + (width - nouvelleLargeur) / 2;

  return (
    <Rectangle
      fill="#C4C4C4" /* La couleur grise habituelle */
      fillOpacity={0.5} /* Un peu de transparence */
      x={xCentre} /* Notre nouvelle position centrée */
      y={y} /* On garde le Y d'origine (tout en haut) */
      width={nouvelleLargeur}
      height={height} /* On garde la hauteur totale du graphique */
    />
  );
}

export default CustomCursor;

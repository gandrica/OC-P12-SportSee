function CustomTick({ x, y, payload }) {
  // On récupère le jour (de 1 à 7)
  const dayValue = payload.value;

  // Le dictionnaire des jours (plus court que le switch !)
  const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

  // La magie est ici : on décale l'axe X pour le premier et le dernier point
  let xOffset = 0;
  if (dayValue === 1) xOffset = +15; // On pousse le "L" vers la droite
  if (dayValue === 7) xOffset = -15; // On pousse le "D" vers la gauche

  return (
    <text
      x={x + xOffset} // Position horizontale avec notre petit décalage
      y={y + 15} // Position verticale sous la ligne
      fill="#FFFFFF67" // Couleur blanche un peu transparente
      textAnchor="middle" // On centre le texte sur son point
      fontSize={16}
    >
      {days[dayValue]}
    </text>
  );
}
export default CustomTick;

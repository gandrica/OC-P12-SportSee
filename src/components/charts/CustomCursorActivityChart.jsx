import { Rectangle } from "recharts";
function CustomCursor(props) {
  const { x, y, width, height } = props;
  const nouvelleLargeur = 60;
  const xCentre = x + (width - nouvelleLargeur) / 2;

  return (
    <Rectangle
      fill="#C4C4C4"
      fillOpacity={0.5}
      x={xCentre}
      y={y}
      width={nouvelleLargeur}
      height={height}
    />
  );
}

export default CustomCursor;

function CustomTick({ x, y, payload }) {
  const dayValue = payload.value;

  const days = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" };

  let xOffset = 0;
  if (dayValue === 1) xOffset = +5;
  if (dayValue === 7) xOffset = -5;

  return (
    <text
      x={x + xOffset}
      y={y + 15}
      fill="#FFFFFF67"
      textAnchor="middle"
      fontSize={16}
    >
      {days[dayValue]}
    </text>
  );
}
export default CustomTick;

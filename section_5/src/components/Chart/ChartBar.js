export default function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} //javascript wants to have an object here thus the double curly braces
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

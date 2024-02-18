import { ways } from "../data";
import WayToTeach from "./WayToTeach.jsx";

export default function TeachingSection() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>
      <ul>
        {ways.map((way) => (
          <WayToTeach {...way} key={way.id} />
        ))}
      </ul>
    </section>
  );
}

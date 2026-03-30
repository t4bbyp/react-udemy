import CoreConcept from "./CoreConcept.js";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <ul>
      {CORE_CONCEPTS.map((conceptItem) => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
      ))}
    </ul>
  );
}

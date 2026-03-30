// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import { useState, Fragment } from "react";
//import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
//import TabButtons from "./components/TabButtons";
//import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />

      <main>
        <h2>Time to get started!</h2>

        <Section title="Core Concepts" id="core-concepts">
          <CoreConcepts />
        </Section>

        <Section title="Examples" id="examples">
          <Examples />
        </Section>
      </main>
    </>
  );
}

//Fragment, div and <> are alternatives to eachother

export default App;

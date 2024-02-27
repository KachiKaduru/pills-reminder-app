import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import PlansList from "./components/PlansList";
import NavBar from "./components/NavBar";
import AddPlan from "./components/AddPlan";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [pillsList, setPillsList] = useState([]);

  function handleShowPlan() {
    setVisible(!visible);
  }

  function handleAddPill(pill) {
    setPillsList((pillsList) => [...pillsList, pill]);
  }

  return (
    <section className="body">
      <NavBar onShowPlan={handleShowPlan} />
      <div className="container">
        <SearchBar />
        <Hero />
        <PlansList pillsList={pillsList} />
      </div>
      <AddPlan
        visible={visible}
        onShowPlan={handleShowPlan}
        onAddPill={handleAddPill}
        pillsList={pillsList}
      />
    </section>
  );
}

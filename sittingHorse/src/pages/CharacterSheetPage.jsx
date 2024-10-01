import React from "react";
import AbilityScore from "../components/AbilityScore/AbilityScore";

function CharacterSheetPage() {
  return (
    <div className="CharacterSheetPage">
      <AbilityScore />
      <header className="CharacterSheetPage">
        <h1>Character Sheet Page</h1>
      </header>
    </div>
  );
}

export default CharacterSheetPage;

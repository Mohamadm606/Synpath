import React, { useState } from 'react';
import { StructureEditor } from 'react-ocl/full';
import OCL from 'openchemlib/full';

function MoleculeSketcher() {
  const [startMol, setStartMol] = useState({molfile: "", idCode: "", smiles: ""});
  const [endMol, setEndMol] = useState({molfile: "", idCode: "", smiles: ""});


  const handleChange = (molfile, molecule, idCode, type) => {
    if (idCode) {
      try {
        const smiles = molecule.toSmiles();
        type === 'start' ? setStartMol({molfile, idCode, smiles}) : setEndMol({molfile, idCode, smiles});
      }
      catch (e) {
        console.error(e);
      }
    }
  };

  const handleSubmit = () => {
    console.log('Start Molecule:', startMol.smiles);
    console.log('End Molecule:', endMol.smiles);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h3>Start Mol</h3>
        <h3>End Mol</h3>
      </div>
      <div style={styles.box}>
        <StructureEditor width="300px" onChange={(molfile, molecule, idCode) => handleChange(molfile, molecule, idCode, "start")}/>

        <StructureEditor width="300px" onChange={(molfile, molecule, idCode) => handleChange(molfile, molecule, idCode, "end")}/>
      </div>

      <button style={styles.submitButton} onClick={handleSubmit}>submit:</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    border: "2px solid black",
    padding: "10px",
    width: "650px", // Increased width to fit both editors
    justifyContent: "space-around",
    alignItems: "center",
  },
  editor: {
    textAlign: "center",
  },
  submitButton: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default MoleculeSketcher;
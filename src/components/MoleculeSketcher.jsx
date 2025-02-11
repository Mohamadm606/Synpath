import React, { useState } from 'react';
import { StructureEditor } from 'react-ocl/full';
import OCL from 'openchemlib/full';

function MoleculeSketcher() {
  const [smiles, setSmiles] = useState('');
  const [idCode, setIdCode] = useState('');

  const handleChange = (molfile, _, idCode) => {
    setIdCode(idCode);

    if (idCode) {
      try {
        const mol = OCL.Molecule.fromIDCode(idCode);
        setSmiles(mol.toSmiles());
      }
      catch (e) {
        console.error(e);
        setSmiles('slemmby');
      }
    }
  };

  return (
    <div>
      <StructureEditor onChange={handleChange} />
      <h3>Extracted Data:</h3>
      <p><strong>SMILES:</strong> {smiles}</p>
      <p><strong>Id mf:</strong> {idCode}</p>

    </div>
  );
}

export default MoleculeSketcher;
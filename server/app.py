from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import networkx as nx
from rdkit import Chem
from rdkit.Chem import rdChemReactions

app = Flask(__name__)
CORS(app)

def get_reactions(molecule_smiles):
    """
    Query ORD for reactions that contain the given molecule SMILES as a product.
    """

def verify_reaction(reactant_smiles, product_smiles):
    """
    Check if a reaction exists that converts reactant -> product.
    """


@app.route('/find-path', methods=['POST'])
def find_path():
    data = request.json
    start_smiles = data.get('start_smiles')
    end_smiles = data.get('end_smiles')

    if not start_smiles or not end_smiles:
        return jsonify({"error": "Missing input molecules"}), 400

    

if __name__ == '__main__':
    app.run(debug=True)

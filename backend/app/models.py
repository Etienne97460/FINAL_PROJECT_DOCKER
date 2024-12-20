# Importation de BaseModel depuis Pydantic pour définir des modèles de données
from pydantic import BaseModel 

# Définition du modèle User qui représente les données d'un utilisateur
class User(BaseModel):
    # Champ représentant le nom de l'utilisateur (chaîne de caractères)
    name: str
    
    # Champ représentant l'email de l'utilisateur (chaîne de caractères)
    email: str
    
    # Champ représentant le rôle de l'utilisateur (chaîne de caractères)
    role: str

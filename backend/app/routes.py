# Importation de APIRouter pour créer un routeur de routes indépendantes dans l'application
from fastapi import APIRouter

# Importation du modèle User défini dans le module app.models
from app.models import User

# Création d'un routeur pour gérer les endpoints liés aux utilisateurs
router = APIRouter()

# Initialisation d'une liste vide pour stocker les utilisateurs (en mémoire pour cet exemple)
users = []

# Définition d'une route GET pour récupérer la liste des utilisateurs
@router.get("/users")
def get_users():
    # Retourne la liste complète des utilisateurs
    return users

# Définition d'une route POST pour ajouter un nouvel utilisateur
@router.post("/users")
def add_user(user: User):
    # Ajoute l'objet utilisateur reçu en paramètre à la liste des utilisateurs
    users.append(user)
    # Retourne un message de confirmation
    return {"message": "User added successfully!"}

# Définition d'une route DELETE pour supprimer un utilisateur par son ID
@router.delete("/users/{user_id}")
def delete_user(user_id: int):
    # Vérifie si l'ID fourni est valide (dans les limites de la liste des utilisateurs)
    if 0 <= user_id < len(users):
        # Supprime l'utilisateur correspondant à l'ID de la liste
        users.pop(user_id)
        # Retourne un message de confirmation
        return {"message": "User deleted successfully!"}
    # Si l'ID est invalide, retourne une erreur
    return {"error": "User not found"}

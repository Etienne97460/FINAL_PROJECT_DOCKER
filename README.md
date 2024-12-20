Application Web Conteneurisée avec Docker en Microservices

- Introduction

Ce projet a pour objectif de créer une application web composée de plusieurs microservices, conteneurisés à l'aide de Docker. L'application sera structurée de manière à appliquer les principes des microservices, de la conteneurisation et de l'orchestration avec Docker Compose.

 - Structure du Projet

FINAL_PROJECT/
├── backend/                # Répertoire contenant le code source et la configuration du backend
│   ├── app/                # Code source principal du backend (fichiers Python pour la logique de l'application)
│   ├── Dockerfile          # Fichier de configuration Docker pour conteneuriser le backend
│   ├── main.py             # Point d'entrée principal pour démarrer l'application backend avec FastAPI
│   └── requirements.txt    # Liste des dépendances Python nécessaires pour le backend (ex : FastAPI, Uvicorn)
├── frontend/               # Répertoire contenant le code source et la configuration du frontend
│   ├── src/                # Code source principal du frontend (fichiers HTML, CSS et JS)
│   ├── app.js              # Fichier JavaScript pour gérer la logique frontend (interaction avec l'API backend)
│   ├── index.html          # Page HTML contenant l'interface utilisateur (formulaire, liste des utilisateurs)
│   └── styles.css          # Fichier CSS pour le style de l'interface utilisateur
├── Dockerfile              # Fichier Docker principal pour le projet (si nécessaire pour l'orchestration globale)
├── database/               # Répertoire contenant les fichiers pour configurer la base de données
│   └── Dockerfile          # Fichier de configuration Docker pour conteneuriser la base de données (PostgreSQL)
├── docker-compose.yml      # Fichier de configuration pour Docker Compose, orchestration des services (backend, frontend, database)
├── FINAL_PROJECT.md        # Documentation détaillée du projet, expliquant la mise en œuvre, l'architecture, etc.
└── README.md               # Documentation du projet (résumé, prérequis, installation, et fonctionnement)



- Technologies Utilisées

Backend : Python avec FastAPI
Frontend : HTML, CSS, JavaScript (Fetch API pour la communication avec l'API)
Base de données : PostgreSQL
Conteneurisation : Docker et Docker Compose

- Fonctionnalités Implémentées

* Backend :
POST /users : Ajoute un utilisateur (nom et email).
GET /users : Récupère la liste des utilisateurs.
DELETE /users/{id} : Supprime un utilisateur par son ID.

* Frontend :
Formulaire permettant l'ajout d'un utilisateur (nom et email).
Affichage de la liste des utilisateurs récupérés depuis l'API backend.
Bouton pour supprimer un utilisateur.

* Base de données :
Stockage des utilisateurs dans une base de données PostgreSQL.

- Pré-requis
Avant de commencer, assurez-vous d'avoir installé les outils suivants :
Docker : Lien vers Docker
Docker Compose : Inclus dans Docker Desktop
Git : Lien vers Git

- Instructions d'installation
Cloner le projet :
git clone <url-du-repo>
cd project

- Construire et lancer les services :
Construire les images Docker :
docker-compose build

* Démarrer les services :
docker-compose up

* Accéder à l'application :
Frontend : http://localhost:3000
Backend (documentation Swagger de l'API) : http://localhost:8000/docs

* Arrêter l'application :
docker-compose down

- Description des Fichiers

* Backend :
main.py : Contient les points d'entrée de l'API FastAPI et la logique métier du backend.
requirements.txt : Liste des dépendances Python pour le backend.

Dockerfile :
FROM python:3.9
WORKDIR /app
COPY . .
RUN pip install -r requirements.txt
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

* Frontend :
index.html : Contient l'interface utilisateur (formulaire et liste des utilisateurs).
style.css : Style de l'interface utilisateur.
app.js : Gère les interactions avec l'API backend.

Dockerfile :
FROM nginx:alpine
COPY src /usr/share/nginx/html

* Base de données :

Dockerfile :
FROM postgres:15
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=mydb
EXPOSE 5432

* docker-compose.yml : Le fichier docker-compose.yml coordonne les services backend, frontend et database :
version: '3.8'

services:
  backend:
    build:
      context: ./backend
    ports:
      - "8000:8000"
    volumes:
      - ./backend:/app
    environment:
      - DATABASE_URL=postgresql://user:password@database:5432/mydb
    depends_on:
      - database

  frontend:
    build:
      context: ./frontend
    ports:
      - "3000:80"
    depends_on:
      - backend

  database:
    build:
      context: ./database
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb

volumes:
  postgres_data:


- Fonctionnement de l'application
L'utilisateur accède à l'interface frontend via un navigateur.
Les actions réalisées sur le frontend (ajout, affichage, suppression d'utilisateurs) génèrent des requêtes HTTP envoyées à l'API backend.
Le backend gère ces requêtes, interagit avec la base de données PostgreSQL et renvoie les réponses au frontend.

Améliorations Possibles
Ajout d'un système d'authentification basé sur JWT.
Mise en place de tests unitaires pour le backend.
Utilisation de frameworks frontend comme React ou Vue.js pour un interface plus dynamique.

Auteur: Eienne TANTOT

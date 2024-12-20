# Utilise une image de serveur web léger (Nginx)
FROM nginx:alpine

# Définit le répertoire de travail
WORKDIR /usr/share/nginx/html

# Supprime les fichiers par défaut de Nginx
RUN rm -rf ./*

# Copie les fichiers du frontend dans le conteneur
COPY src/ .

# Expose le port 80 pour le frontend
EXPOSE 80

# Nginx démarre automatiquement en tant que processus par défaut

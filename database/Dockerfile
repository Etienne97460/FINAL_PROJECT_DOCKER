# Utilise l'image officielle PostgreSQL
FROM postgres:15

# Ajoute un environnement pour éviter les invites interactives
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=mydb

# Configure un volume pour permettre la persistance des données
VOLUME ["/var/lib/postgresql/data"]

# Expose le port par défaut de PostgreSQL
EXPOSE 5432

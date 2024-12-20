# Utiliser une image Python officielle
FROM python:3.10

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY ./app /app

# Commande pour démarrer le backend
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

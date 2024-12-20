const apiUrl = "http://localhost:8000/users"; // L'URL de l'API Backend

const userForm = document.getElementById("userForm");
const userList = document.getElementById("userList");

// Fonction pour charger les utilisateurs depuis le backend
async function loadUsers() {
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        userList.innerHTML = ""; // Réinitialise la liste

        users.forEach((user, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${user.name} (${user.email}, ${user.role})
                <button onclick="deleteUser(${index})">Supprimer</button>
            `;
            userList.appendChild(li);
        });
    } catch (error) {
        console.error("Erreur lors du chargement des utilisateurs :", error);
    }
}

// Fonction pour ajouter un utilisateur
userForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    const newUser = { name, email, role };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        if (response.ok) {
            loadUsers(); // Recharge la liste des utilisateurs
            userForm.reset(); // Réinitialise le formulaire
        } else {
            console.error("Erreur lors de l'ajout de l'utilisateur :", response.statusText);
        }
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'utilisateur :", error);
    }
});

// Fonction pour supprimer un utilisateur
async function deleteUser(userId) {
    try {
        const response = await fetch(`${apiUrl}/${userId}`, {
            method: "DELETE",
        });

        if (response.ok) {
            loadUsers(); // Recharge la liste des utilisateurs
        } else {
            console.error("Erreur lors de la suppression de l'utilisateur :", response.statusText);
        }
    } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur :", error);
    }
}

// Charger les utilisateurs au chargement de la page
document.addEventListener("DOMContentLoaded", loadUsers);

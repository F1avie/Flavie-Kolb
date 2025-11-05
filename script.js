document.addEventListener("DOMContentLoaded", function() {
    // Charger le navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;

            // Maintenant que le favicon est dans le DOM, on peut l'utiliser
            const flavicon = document.getElementById("flavicon");

            const phrases = [
                "Ninja est la + belle des chatounes !",
                "Gloire a Ninja 🐱",
                "Ninja dirige le monde !",
                "Hey ! Continue de naviguer sinon Ninja va s'attaquer à la jugulaire🙂"
            ];

            flavicon.addEventListener("click", function() {
                const index = Math.floor(Math.random() * phrases.length);
                alert(phrases[index]); // ou remplacer par un modal Bootstrap
            });
        });
});
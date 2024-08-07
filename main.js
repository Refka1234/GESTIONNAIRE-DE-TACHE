document.getElementById('ajoutTacheBouton').addEventListener('click', function() {
    let saisirTache = document.getElementById('saisirTache');
    let tacheText = saisirTache.value;

    if (tacheText !== '') {
        let tacheList = document.getElementById('tacheList');
        let nouveauTache = document.createElement('li');
        // nouveauTache.textContent = tacheText;

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        let tacheTextElement = document.createElement('span');
        tacheTextElement.textContent = tacheText;
        tacheTextElement.className = 'tache-text';

        let deleteIcon = document.createElement('span');
        deleteIcon.textContent = '🗑️';
        deleteIcon.className = 'delete-icon';

        // Ajouter un écouteur d'événement pour supprimer la tâche au clic
        deleteIcon.addEventListener('click', function() {
            tacheList.removeChild(nouveauTache);
        });
        tacheList.appendChild(nouveauTache);
        nouveauTache.appendChild(checkbox);
        nouveauTache.appendChild(tacheTextElement);
        nouveauTache.appendChild(deleteIcon);

        
        saisirTache.value = ''; // Réinitialiser le champ de texte
    }
});

// Permettre d'ajouter des tâches en appuyant sur "Entrée"
document.getElementById('saisirTache').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('ajoutTacheBouton').click();
    }
});
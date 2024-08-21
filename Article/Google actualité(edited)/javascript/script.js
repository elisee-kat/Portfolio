document.addEventListener('DOMContentLoaded', function () {
    // Événement de sélection de texte
    document.addEventListener('selectionchange', function () {
        var selectedText = getSelectedText();

        // Vérifier si du texte est sélectionné
        if (selectedText) {
            // Sauvegarder le texte dans IndexedDB
            saveTextToIndexedDB(selectedText);
        }
    });

    // Fonction pour obtenir le texte sélectionné
    function getSelectedText() {
        var selectedText = '';

        if (window.getSelection) {
            selectedText = window.getSelection().toString();
        } else if (document.selection && document.selection.type !== 'Control') {
            selectedText = document.selection.createRange().text;
        }

        return selectedText;
    }

    // Fonction pour sauvegarder le texte dans IndexedDB
    function saveTextToIndexedDB(text) {
        // Ouvrir une connexion à la base de données
        var request = window.indexedDB.open('SelectedTextDB', 1);

        request.onupgradeneeded = function (event) {
            var db = event.target.result;

            // Créer un objet de stockage (table) pour les textes sélectionnés
            var objectStore = db.createObjectStore('selectedTexts', {
                keyPath: 'id',
                autoIncrement: true
            });
        };

        request.onsuccess = function (event) {
            var db = event.target.result;

            // Ajouter le texte à la base de données
            var transaction = db.transaction(['selectedTexts'], 'readwrite');
            var objectStore = transaction.objectStore('selectedTexts');

            objectStore.add({
                text: text
            });

            // Rediriger vers la page de sauvegarde
            window.location.href = 'save.html';
        };

        request.onerror = function (event) {
            console.error('Erreur lors de l\'ouverture de la base de données : ', event.target.error);
        };
    }
});
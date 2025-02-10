function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const notificationSound = document.getElementById('notification-sound');

    if (input.value.trim() !== '') {
        // Ajout du message dans le chat
        const message = document.createElement('div');
        message.classList.add('message', 'toi');
        message.textContent = input.value;

        // Affichage du message dans la fenêtre de chat
        chatBox.appendChild(message);

        // Scroll vers le bas du chat
        chatBox.scrollTop = chatBox.scrollHeight;

        // Lecture du son de notification
        notificationSound.play();

        // Effet de délai pour simuler l'arrivée d'un message de l'autre côté (moi)
        setTimeout(() => {
            const replyMessage = document.createElement('div');
            replyMessage.classList.add('message', 'moi');
            replyMessage.textContent = "Tu es invité(e) à mes 30 ans ! Clique sur le lien pour voir plus :)";
            chatBox.appendChild(replyMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1500); // Délai avant le message "moi"
    }

    input.value = ''; // Réinitialise le champ d'entrée
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

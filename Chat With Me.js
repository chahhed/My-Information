const chatContainer = document.getElementById('chatContainer');
const namePopup = document.getElementById('namePopup');
const startChat = document.getElementById('startChat');
const visitorNameInput = document.getElementById('visitorName');
const chatBody = document.getElementById('chatBody');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

let visitorName = 'زائر';

startChat.addEventListener('click', () => {
    const name = visitorNameInput.value.trim();
    if (name !== '') {
        visitorName = name;
    }
    namePopup.style.display = 'none';
    chatContainer.style.display = 'flex';
    welcomeVisitor();
});

function welcomeVisitor() {
    addMessage(`أهلا ${visitorName}!  كيف يمكنني مساعدتك اليوم؟`, 'owner');
}

function addMessage(content, sender = 'owner') {
    const message = document.createElement('div');
    message.classList.add('message', sender);
    message.textContent = content;
    chatBody.appendChild(message);
    chatBody.scrollTop = chatBody.scrollHeight;
}

sendButton.addEventListener('click', () => {
    const text = messageInput.value.trim();
    if (text !== '') {
        addMessage(text, 'owner');
        messageInput.value = '';

        setTimeout(() => {
            addMessage(`${visitorName}، تم استلام رسالتك!`, 'visitor');
        }, 1000);
    }
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});
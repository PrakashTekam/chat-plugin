const botResponses = [
    "thank you for your message!",
    "We appreciate your feedback",
    "How can I assist you today?",
    "Your message has been received.",
    "We're here to help!",
    "Feel free to ask any questions."
]

document.getElementById('send-button').addEventListener('click',sendMessage);

function sendMessage(){
    const userInput = document.getElementById('user-input').value;
    displayMessage(userInput);
    const botResponse = getBotResponse();
    displayMessage(botResponse,true);
    document.getElementById('user-input').value = '';
}

function displayMessage(message, isBot = false){
    const chatHistory = document.getElementById('chat-history');
    const messageClass = isBot ? 'bot-message' : 'user-message';
    chatHistory.innerHTML += `<div class="${messageClass}">${message}</div>`; 
}

function getBotResponse(){
    const randomIndex = Math.floor(Math.random() * botResponses.length);
    return botResponses[randomIndex];
}
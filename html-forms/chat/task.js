let chat = document.querySelector('.chat-widget');
chat.addEventListener('click', e => {
    chat.classList.add('chat-widget_active')
});

let clientInput = document.getElementById('chat-widget__input');

clientInput.addEventListener('keydown', function(e) {
if (e.keyCode === 13) {
let messages = document.querySelector('.chat-widget__messages');    
let time = new Date;    
let hours = time.getHours();
let minutes = time.getMinutes();
if(minutes < 10) {
    minutes = `0${minutes}`;
};

if(this.value === '') {
    return false;
};
messages.innerHTML += `
    <div class="message message_client">
    <div class="message__time">${hours}:${minutes}</div>
    <div class="message__text">
        ${this.value}
    </div>
    </div>
`; 
clientInput.value = '';


reply = function() {
    let replies = ['Что вам нужно?', 'Напишите позже, все заняты', 'Извините, не до вас'];            
    randomInteger = function(min, max) {
        let rand = min + Math.random() * (max - min);
        return Math.floor(rand);
    };     
    
    messages.innerHTML += `
        <div class="message">
        <div class="message__time">${hours}:${minutes}</div>
        <div class="message__text">
        ${replies[randomInteger(0, replies.length)]}
            
        </div>
        </div>
        `
};    

setTimeout(reply, 1000);                

}
});

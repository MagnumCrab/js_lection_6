const buttonEl = document.querySelector('.btn');
const textEl = document.createElement('p');
console.log(buttonEl);
textEl.textContent = 'If we fail to prepare for this possibility in the way that we failed to prepare for the collapse of the Soviet Union, it could introduce immense instability to our geopolitics';
const contentEl = document.querySelector('.content');
buttonEl.onclick = function() {
    console.log('Prepare to disintegration');
    alert('Disintegration started')
    buttonEl.textContent = 'Disintegration started';
    contentEl.appendChild(textEl);
}
const imgEl = document.querySelector('.img');
imgEl.onclick = function() {
    imgEl.src = 'newphoto.jpg';
}
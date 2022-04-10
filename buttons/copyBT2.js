const textInput = document.getElementById('input');
const copyButton = document.getElementById('copy');

copyButton.addEventListener('click', () => {
    textInput.select();
    document.execCommand('copy');
});

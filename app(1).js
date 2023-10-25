document.getElementById('file-input').addEventListener('change', function(e) {
    loadGame(URL.createObjectURL(e.target.files[0]));
});

document.querySelectorAll('#preloaded-games button').forEach(function(button) {
    button.addEventListener('click', function() {
        loadGame(button.getAttribute('data-url'));
    });
});

function loadGame(url) {
    const rufflePlayer = document.getElementById('ruffle-player');
    rufflePlayer.innerHTML = '';
    const embed = document.createElement('embed');
    embed.setAttribute('src', url);
    embed.setAttribute('type', 'application/x-shockwave-flash');
    embed.setAttribute('width', '620');
    embed.setAttribute('height', '480');
    rufflePlayer.appendChild(embed);
    window.RufflePlayer.configure({ polyfills: true });
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('items.txt')
        .then(response => response.text())
        .then(text => {
            const items = text.split('\n').filter(item => item.trim() !== '');
            const itemList = document.getElementById('itemList');
            
            items.forEach(item => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = `https://lenny54000.github.io/${item}/`;
                link.target = '_blank';
                link.textContent = item;
                li.appendChild(link);
                itemList.appendChild(li);
            });
        })
        .catch(error => console.error('Erreur de chargement du fichier items.txt:', error));
});

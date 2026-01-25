// /C:/dev/netlify-Lifevault/resources.js
(async function loadResources() {
    try {
        const res = await fetch('data/resources.json');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const items = await res.json();

        const container = document.getElementById('resources');
        if (!container) return;

        if (!Array.isArray(items) || items.length === 0) {
            container.textContent = 'No resources found.';
            return;
        }

        const list = document.createElement('ul');

        items.forEach(item => {
            const li = document.createElement('li');

            const a = document.createElement('a');
            a.href = item.url || '#';
            a.textContent = [item.date, item.title].filter(Boolean).join(' - ') || 'Untitled';
            a.target = '_blank';
            a.rel = 'noopener noreferrer';

            const desc = document.createElement('p');
            desc.textContent = item.description || '';

            li.append(a, desc);
            list.appendChild(li);
        });

        container.appendChild(list);
    } catch (err) {
        console.error('Error loading resources:', err);
    }
})();
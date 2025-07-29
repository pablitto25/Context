// tracker.js
(function () {
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    function getOrCreateUserId() {
        const match = document.cookie.match(/(?:^|; )user_id=([^;]*)/);
        if (match) return match[1];

        const id = uuidv4();
        document.cookie = `user_id=${id}; path=/; max-age=31536000`; // 1 año
        return id;
    }

    function sendEvent(eventType, data = {}) {
        const userId = getOrCreateUserId();
        fetch('http://localhost:8081/api/events', {
            method: 'POST',
            body: JSON.stringify({
                userId,
                eventType,
                data,
                timestamp: new Date().toISOString(),
                url: window.location.href,
                referrer: document.referrer,
                userAgent: navigator.userAgent,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // Track pageview
    sendEvent('pageview');

    // Track clicks
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target) {
            sendEvent('click', {
                tag: target.tagName,
                text: target.innerText?.slice(0, 100),
                id: target.id || null,
                class: target.className || null,
            });
        }
    });

    // Track simple inputs (como búsquedas)
    document.addEventListener('change', (e) => {
        if (e.target && e.target.tagName === 'INPUT') {
            const input = e.target;
            if (input.type !== 'password') {
                sendEvent('input', {
                    name: input.name || null,
                    value: input.value?.slice(0, 100),
                });
            }
        }
    });
})();

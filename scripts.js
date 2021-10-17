(() => {
    const clock = () => {
        var d = new Date();
        var s = d.getSeconds();
        var m = d.getMinutes();
        var h = d.getHours();
        let clockElem = document.querySelector('#clock')
        clockElem.textContent = `${("0" + h).substr(-2)}:${("0" + m).substr(-2)}:${("0" + s).substr(-2)}`;
    };

    setInterval(clock, 1000);

    const config = {
        'user': 'sheep',
        'bookmark': [
            'github.com',
            'myanimelist.net',
            'facebook.com',
            'youtube.com',
            'reddit.com',
            '4chan.org',
            'nyaa.si',
            'animixplay.to',
            'discord.com',
            'wikipedia.org',
            'twitter.com',
            'instagram.com',
            'office.com',
            'google.com',
        ],
    }

    const greeting = document.querySelector('#greet')
    greeting.textContent = greeting.textContent + ' ' + config.user

    const searchBox = document.querySelector('#search')
    searchBox.addEventListener('keydown', (e) => {
        if (searchBox.value.startsWith(';')) {
            var reg = new RegExp(searchBox.value.slice(1))
            var terms = config.bookmark.filter((term) => {
                if (term.match(reg)) {
                    return term
                }
            })
            res = document.querySelector('#autocomplete');
            var list = '';
            terms.forEach(link => list += '<li>' + `<a href="https://${link}">${link}</a>` + '</li>');
            res.innerHTML = '<ul>' + list + '</ul>';
            if (terms.length == 1 && searchBox.value.length >= 3) {
                window.location.href = 'https://' + terms[0];
            }
        }
        if (e.key === 'Enter'){
            window.location.href = 'https://duckduckgo.com/?q=' + searchBox.value;
        }
    })

})();

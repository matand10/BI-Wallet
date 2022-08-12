export const utilService = {
    makeId,
    makeLorem,
    getRandomIntInclusive,
    getRandomColor,
    getExactDate,
    ILSformat,
    getLang,
    debounce
}

function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF'
    var color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function getExactDate(UNIX_timestamp) {
    var a = new Date(typeof UNIX_timestamp === 'string' ? UNIX_timestamp : UNIX_timestamp * 1000)
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    // Option to use year in data dates
    // var year = a.getFullYear()

    var month = months[a.getMonth()]
    var date = a.getDate()
    var time = date + ' ' + month
    return time
}

function debounce(cb, delay = 1000) {
    let timeout

    return (...args) => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            return cb(...args)
        }, delay)
    }
}

function ILSformat(num) {
    if (typeof num === 'number') return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format((num))
    else return ' '
}

function getLang(format) {
    if (format === 'he-IL') {
        document.querySelector('html').dir = 'rtl'
        return 'HEBREW'
    }
    else if (format === 'en-US') {
        document.querySelector('html').dir = 'ltr'
        return 'ENGLISH'
    }
}

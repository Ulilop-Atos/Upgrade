// Alias for query selector
function qs(query, all=false) {
    return all? document.querySelectorAll(query): document.querySelector(query);
}
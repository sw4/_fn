function inView(el) {
    el=el[0] ? el[0] : el;
    var elPos = el.getBoundingClientRect(),
        inView = false;
    function isInView(tmpEl) {
        if (tmpEl.parentNode && tmpEl.parentNode !== document.body) {
            var pElPos = tmpEl.parentNode.getBoundingClientRect(),
                pElH = tmpEl.parentNode.offsetHeight,
                pElW = tmpEl.parentNode.offsetWidth;
            if (tmpEl.parentNode.scrollHeight > tmpEl.parentNode.offsetHeight || tmpEl.parentNode.scrollWidth > tmpEl.parentNode.offsetWidth) {
                if (elPos.top < pElPos.top || elPos.top > pElPos.top + pElH || elPos.left < pElPos.left || elPos.left > pElPos.left + pElW) {
                    inView = false;
                    return;
                }
            }
            isInView(tmpEl.parentNode);
        } else if (tmpEl.parentNode === document.body) {
            var pos = el.getBoundingClientRect();
            inView = (
                pos.top >= 0 &&
                pos.left >= 0 &&
                pos.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                pos.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            return;
        } else {
            inView = true;
            return;
        }
        return inView;
    }
    return isInView(el);
}

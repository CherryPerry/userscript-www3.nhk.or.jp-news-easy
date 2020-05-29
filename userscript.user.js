// ==UserScript==
// @name         www3.nhk.or.jp/news/easy furigana
// @namespace    https://github.com/CherryPerry/userscript-www3.nhk.or.jp-news-easy
// @version      1.1
// @description  Mouseover furigana
// @author       CherryPerry @ GitHub
// @match        https://www3.nhk.or.jp/news/easy/*
// @grant        none
// @icon         https://www3.nhk.or.jp/favicon.ico
// @updateURL    https://raw.github.com/CherryPerry/userscript-www3.nhk.or.jp-news-easy/master/userscript.user.js
// ==/UserScript==

(function () {
    'use strict';

    let setupMoseover = (rt) => {
        let parent = rt.parentElement
        let makeTransparent = () => { rt.style = "color:transparent" }
        parent.onmouseover = () => { rt.style = null }
        parent.onmouseout = makeTransparent
        makeTransparent()
    }

    let observer = new MutationObserver((list) => {
        for (let mutation of list) {
            mutation.addedNodes.forEach((item) => {
                if (item instanceof Element) {
                    item.querySelectorAll("rt").forEach(setupMoseover)
                }
            })
        }
    })
    observer.observe(document, { childList: true, subtree: true })

    document.querySelectorAll("rt").forEach(setupMoseover)
})();

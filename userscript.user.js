// ==UserScript==
// @name         www3.nhk.or.jp/news/easy furigana
// @namespace    https://github.com/CherryPerry/userscript-www3.nhk.or.jp-news-easy
// @version      1.0
// @description  Mouseover furigana
// @author       CherryPerry @ GitHub
// @match        https://www3.nhk.or.jp/news/easy/*
// @grant        none
// @icon         https://www3.nhk.or.jp/favicon.ico
// @updateURL    https://raw.github.com/CherryPerry/userscript-www3.nhk.or.jp-news-easy/master/userscript.user.js
// ==/UserScript==

(function () {
    'use strict';

    document.querySelectorAll("rt").forEach(rt => {
        let parent = rt.parentElement
        let makeTransparent = () => { rt.style = "color:transparent" }
        parent.onmouseover = () => { rt.style = null }
        parent.onmouseout = makeTransparent
        makeTransparent()
    })
})();

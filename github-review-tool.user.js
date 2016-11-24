// ==UserScript==
// @name         Elisa GitHub Review Tool
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Easier PR's
// @author       Timo Sand
// @match        https://github.devcloud.elisa.fi/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $(".file > .file-header > .file-info > .user-select-contain:contains('bower_components') \
      , .file > .file-header > .file-info > .user-select-contain:contains('node_modules') \
      , .file > .file-header > .file-info > .user-select-contain:contains('.json')")
        .parent()
        .parent()
        .parent()
        .remove();
})();

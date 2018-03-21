var tabs = document.querySelectorAll('.trends li a');
var panels = document.querySelectorAll('.trends .panels div');

for (let i = 0; i < tabs.length; i++) {
    var tab = tabs[i];
    setTabHandlers(tab, i);
}

function setTabHandlers(tab, tabPos) {
    tab.onclick = function () {
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].className = '';
        }

        tab.className = 'active';

        for (let i = 0; i < panels.length; i++) {
            panels[i].className = '';
        }

        panels[tabPos].className = 'active-panel';
    }
}
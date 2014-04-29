var head = document.getElementsByTagName('head')[0];
var sidebarStyle = document.createElement('style');
sidebarStyle.type = 'text/css';
head.appendChild(sidebarStyle);

function refreshSidebarHeight(){
    sidebarStyle.innerHTML = " div#query_form_with_buttons { min-height: " + (document.getElementById('sidebar').clientHeight - 50) + "px } ";
}

refreshSidebarHeight();

//Do this a few times at various intervals in case it takes a while for the sidebar to fill itself in.
window.setTimeout(function(){
    refreshSidebarHeight();
}, 100);
window.setTimeout(function(){
    refreshSidebarHeight();
}, 1000);
window.setTimeout(function(){
    refreshSidebarHeight();
}, 5000);

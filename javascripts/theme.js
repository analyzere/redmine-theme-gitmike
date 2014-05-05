
function lessSidebar() {
    var sidebar = document.getElementById('sidebar');
    if(sidebar == null) { //Sidebar hasn't been made yet. Try again in a decisecond
        window.setTimeout(lessSidebar, 100);
        return;
    }
    
    //Force the queryform to have a minimum height equal to that of the sidebar so that content below it can take up the full width.
    var head = document.getElementsByTagName('head')[0]
    var sidebarStyle = document.createElement('style');;
    sidebarStyle.type = 'text/css';
    head.appendChild(sidebarStyle);
    
    function refreshQeuryFormHeight(resetHeight){
        sidebarStyle.innerHTML = " div#query_form_with_buttons { min-height: " + (resetHeight === true ? "inherit } " : (sidebar.clientHeight - 50) + "px } ");
    };
    refreshQeuryFormHeight();
    //Do this a few times at various intervals in case it takes a while for the sidebar to fill itself in.
    window.setTimeout(function(){ refreshQeuryFormHeight(); }, 100);
    window.setTimeout(function(){ refreshQeuryFormHeight(); }, 1000);
    window.setTimeout(function(){ refreshQeuryFormHeight(); }, 5000);
    
    //Make Sidebar collapsible
    var showhide = document.createElement('a');
    showhide.innerHTML = "Show/Hide"
    showhide.style.cssFloat = "right";
    showhide.style.padding = "17px";
    showhide.href = "#"
    sidebar.style.overflow = 'hidden';
    showhide.onclick = function() {
        if(sidebar.style.height != '30px') {
            sidebar.style.height = '30px';
            refreshQeuryFormHeight(true);
            localStorage.setItem('showHide', 'true');
        }
        else {
            sidebar.style.height = 'inherit';
            window.setTimeout(function(){ refreshQeuryFormHeight(); }, 100);
            localStorage.setItem('showHide', 'false');
        }
    }
    sidebar.insertBefore(showhide, sidebar.firstChild);
    
    //Remember collapse setting
    var showHidePreset = localStorage.getItem('showHide');
    if(showHidePreset === 'true')
    {   
        sidebar.style.height = '30px';
        refreshQeuryFormHeight(true);
    }
}
lessSidebar();
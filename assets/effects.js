// open top menu page
var menu_site = document.getElementById('menu_site');
    div_menu  = document.getElementById('div_menu');
    menu_site.addEventListener('click', showMenu);

    function showMenu(){
        div_menu.style.display = 'block';
        menu_site.style.display =  'none';
    };
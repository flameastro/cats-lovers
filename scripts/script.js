function navbarToggle() {
    const btn = document.getElementById('btn');
    const menu = document.getElementById('menu');
    menu.style.display = 'none';

    let isOpen = false;

    
    btn.addEventListener('click', () => {
        if (isOpen) {
            menu.style.display = 'none';
            isOpen = false;
        } else {
            menu.style.display = 'flex';
            isOpen = true;
        }
    })
}

navbarToggle();

const bar = document.getElementById('bar');
const nav = document.getElementById('nav-bar');
const clos = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(clos){
    clos.addEventListener('click', () => {
        nav.classList.remove('active');
    }
    )
}
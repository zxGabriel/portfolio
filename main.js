const sobreMimBtn = document.querySelector('.sobre_mim_btn');
const competenciasBtn = document.querySelector('.competencias_btn');
const projetosBtn = document.querySelector('.projetos_btn');
const darkModeBtn = document.querySelector('.dark_mode_btn');
const root = document.querySelector(':root');

const sobreMimContent = document.querySelector('.sobre_mim');
const competenciasContent = document.querySelector('.competencias_progressbar');
const projetosContent = document.querySelector('.projetos');
let darkModeOn = false;

function mostrarSobreMim(){
    sobreMimBtn.classList.add('ativo');
    competenciasBtn.classList.remove('ativo');
    projetosBtn.classList.remove('ativo');

    sobreMimContent.style.display='block';
    competenciasContent.style.display='none';
    projetosContent.style.display='none';
}

function mostrarCompetencias(){
    sobreMimBtn.classList.remove('ativo');
    competenciasBtn.classList.add('ativo');
    projetosBtn.classList.remove('ativo');

    sobreMimContent.style.display='none';
    competenciasContent.style.display='block';
    projetosContent.style.display='none';
}

function mostrarProjetos(){
    sobreMimBtn.classList.remove('ativo');
    competenciasBtn.classList.remove('ativo');
    projetosBtn.classList.add('ativo');

    sobreMimContent.style.display='none';
    competenciasContent.style.display='none';
    projetosContent.style.display='flex';
}

function darkModeSwitch(){
    if (!darkModeOn){
    //dark mode on
    darkModeBtn.classList.remove('bi-moon');
    darkModeBtn.classList.add('bi-brightness-alt-high');
    root.style.setProperty('--white1','#282d3c');
    root.style.setProperty('--black1','#f2eef1');
    root.style.setProperty('--yellow1','#e18434');
    darkModeOn = true;
    } else if (darkModeOn){
    //dark mode off
    darkModeBtn.classList.add('bi-moon');
    darkModeBtn.classList.remove('bi-brightness-alt-high');
    root.style.setProperty('--white1','#f2eef1');
    root.style.setProperty('--black1','#282d3c');
    root.style.setProperty('--yellow1','#ffbd20');
    darkModeOn = false;
    }
}


darkModeBtn.addEventListener('click',darkModeSwitch);
sobreMimBtn.addEventListener('click', mostrarSobreMim);
competenciasBtn.addEventListener('click',mostrarCompetencias);
projetosBtn.addEventListener('click',mostrarProjetos);



const pageViewCounter = document.getElementById('contadorVisitas');
const pageViewCleatButton = document.getElementById('btnReestablecer');
const pageViewContentExtra = document.querySelector('.content-extra');
let pageViewTotal = 0;
let pageViewTotalClear = 0;

pageViewsFunc();
buttonBehaviour();

function pageViewsFunc(clear) { 

    localStorage.getItem('Page views') ? pageViewTotal = localStorage.getItem('Page views') : localStorage.setItem('Page views', 0);
    clear ? pageViewTotal = 0 :  pageViewTotal++;

    localStorage.setItem('Page views', pageViewTotal);
    pageViewCounter.textContent = pageViewTotal;
};

function buttonBehaviour() {
    pageViewCleatButton.addEventListener('click', () => {
        localStorage.getItem('Page views clear') ? pageViewTotalClear = localStorage.getItem('Page views clear') : localStorage.setItem('Page views clear', 0); 
        
        pageViewTotal > 0 ?  pageViewTotalClear++ : "";

        pageViewContentExtra.innerHTML = `<p>You have restarted the visit counter ${pageViewTotalClear}</p>`;
        localStorage.setItem('Page views clear', pageViewTotalClear);

        pageViewsFunc(true); 
    });
};
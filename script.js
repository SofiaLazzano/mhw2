/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

let risposte_finali = { 
  blep: 0,
  happy: 0,
  sleeping: 0,
  dopey: 0,
  burger: 0,
  cart: 0,
  nerd: 0,
  shy: 0,
  sleepy: 0};
  
let risposte_date = {};

function risultato(){
  for(const chiave in risposte_date){
    for(const chiave2 in risposte_finali){
      if(risposte_date[chiave] == chiave2){
        risposte_finali[chiave2]++;
      }
    }
  }
  console.log(risposte_finali);

  let massimo = 0;
  let personality = '';
  for(const chiave in risposte_finali){
    if(risposte_finali[chiave] > massimo){
      massimo = risposte_finali[chiave];
      personality = chiave;
    }
  }

  if(massimo == 1){
    personality = risposte_date.first;
  } 
  return personality;

}


function end(){
  if(risposte_date.first !== undefined && risposte_date.second !== undefined && risposte_date.third !== undefined){

    const risposte = document.querySelectorAll('.choice-grid div');
    for(const risposta of risposte){
    risposta.removeEventListener('click', seleziona);
    }

    const result = document.querySelector('.risultato');
    result.classList.remove('hidden');
    const title = result.querySelector('h1');
    const contents = result.querySelector('p');
  
    let personality = risultato();
    title.textContent = RESULTS_MAP[personality].title;
    contents.textContent = RESULTS_MAP[personality].contents;


  }

}



function seleziona(event){
    const selezionata = event.currentTarget;  
    selezionata.classList.remove('unselected');
    selezionata.classList.add('selected');
    const img = selezionata.querySelector('.checkbox');
    img.src = 'images/checked.png';

    const unselected = document.querySelectorAll('.choice-grid div');
    for(const selection of unselected){
      if(selection.dataset.questionId === selezionata.dataset.questionId){
        if(selection !== selezionata){
        const image = selection.querySelector('.checkbox');
        image.src = 'images/unchecked.png';
        selection.classList.remove('selected');
        selection.classList.add('unselected');
      }
    }
  }
    
      if(selezionata.dataset.questionId === 'one')
      {
        risposte_date.first = selezionata.dataset.choiceId;
        console.log(risposte_date);
      }
      else if(selezionata.dataset.questionId === 'two'){
        risposte_date.second = selezionata.dataset.choiceId;
        console.log(risposte_date);
      }
      else if(selezionata.dataset.questionId === 'three'){
        risposte_date.third = selezionata.dataset.choiceId;
        console.log(risposte_date);
       
      
      }
    
     
      end();
    
}

function ricomincia(){
  const risposte = document.querySelectorAll('.choice-grid div');
  for(const risposta of risposte){
    risposta.addEventListener('click', seleziona);
    risposta.classList.remove('selected');
    risposta.classList.remove('unselected');

    const img = risposta.querySelector('.checkbox');
    img.src = 'images/unchecked.png';

   
  }

  const risultato = document.querySelector('.risultato');
  risultato.classList.add('hidden');
  

  risposte_date = {};
  risposte_finali = {
    blep: 0,
    happy: 0,
    sleeping: 0,
    dopey: 0,
    burger: 0,
    cart: 0,
    nerd: 0,
    shy: 0,
    sleepy: 0

  };
}

const risposte = document.querySelectorAll('.choice-grid div');
for(const risposta of risposte){                       
    risposta.addEventListener('click', seleziona);
}

const bottone = document.querySelector('button');
bottone.addEventListener('click', ricomincia);



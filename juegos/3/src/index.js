const listaComponentes = [
    document.getElementById("cpu"),
    document.getElementById("ssd"),
    document.getElementById("gpu"),
    document.getElementById("ram"),
];
const listaPuertos = [
    document.getElementById("cpuPrt"),
    document.getElementById("ssdPrt"),
    document.getElementById("gpuPrt"),
    document.getElementById("ramPrt")
];
const conf = ['','','',''];

for (let i = 0; i<4; i++)
{
    listaComponentes[i].addEventListener('dragstart', dragStart);
    listaComponentes[i].addEventListener('dragend', dragEnd);
    listaPuertos[i].addEventListener('dragover', dragOver);
    listaPuertos[i].addEventListener('dragenter', dragEnter);
    listaPuertos[i].addEventListener('dragleave', dragLeave);
    listaPuertos[i].addEventListener('drop', drop);
}
function dragStart(event) 
{
    event.dataTransfer.setData('text/plain', event.target.id);
    event.target.classList.add('dragging');
}
  
  function dragEnd(event) 
  {
    event.target.classList.remove('dragging');
  }
  
  function dragOver(event) 
  {
    event.preventDefault();
  }
  
  function dragEnter(event) 
  {
    event.target.classList.add('dragover');
  }
  
  function dragLeave(event) 
  {
    event.target.classList.remove('dragover');
  }
  function drop(event) 
  {
    event.preventDefault();
    const itemId = event.dataTransfer.getData('text/plain');
    const item = document.getElementById(itemId);
    const dropzone = event.target;
    if (dropzone.classList.contains('espacioDropComponente')) 
    {
      for (let i = 0; i<4; i++)
      {
        if (listaPuertos[i].id === event.target.id)
        {
          dropzone.appendChild(item);
          item.classList.remove('dragover');
          conf[i] = item.id;
          document.getElementById("btnStart").style.display = "flex";
        }
      }
    }
  }
  function checkWin()
  {
    let juegoExitoso =  true;
    for (let i = 0; i<4; i++)
    {
      if (listaComponentes[i].id != conf[i])
      {
        juegoExitoso = false;
      }
    }
    if (juegoExitoso){modalExito.style.display = 'block';}
    else{modalDerrota.style.display = 'block'}
    
  }
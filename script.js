function aparecerJanelaAreaHome(){
    document.querySelector('#perfil_pessoal').style.display='none';
    document.querySelector('#home').style.display='block';
    document.querySelector('#hobbies').style.display='none';
    document.querySelector('#area_computacao').style.display='none';
}
function aparecerJanelaPersonal(){
    document.querySelector('#perfil_pessoal').style.display='block';
    document.querySelector('#home').style.display='none';
    document.querySelector('#hobbies').style.display='none';
    document.querySelector('#area_computacao').style.display='none';
}
function aparecerJanelaHobbies(){
    document.querySelector('#perfil_pessoal').style.display='none';
    document.querySelector('#home').style.display='none';
    document.querySelector('#hobbies').style.display='block';
    document.querySelector('#area_computacao').style.display='none';
}
function aparecerJanelaAreaComp(){
    document.querySelector('#perfil_pessoal').style.display='none';
    document.querySelector('#home').style.display='none';
    document.querySelector('#hobbies').style.display='none';
    document.querySelector('#area_computacao').style.display='block';
}
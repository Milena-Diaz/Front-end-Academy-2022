$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

document.getElementById('tab1').style.transform= "translate(0px, 0px)";
document.getElementById('edu').style.display="none";
document.getElementById('cont').style.display="none";

document.getElementById('tab1').onclick = function () {
    document.getElementById('tab1').style.transform= "translate(0px, 0px)";
    document.getElementById('tab2').style.transform= "translate(1.5vw, 0px)";
    document.getElementById('tab3').style.transform= "translate(1.5vw, 0px)";
    document.getElementById('perfil').style.display="initial";
    document.getElementById('cont').style.display="none";
    document.getElementById('edu').style.display="none";
}

document.getElementById('tab2').onclick = function () {
    document.getElementById('tab2').style.transform= "translate(0px, 0px)";
    document.getElementById('tab1').style.transform= "translate(1.5vw, 0px)";
    document.getElementById('tab3').style.transform= "translate(1.5vw, 0px)";
    document.getElementById('perfil').style.display="none";
    document.getElementById('cont').style.display="none";
    document.getElementById('edu').style.display="initial";

}

document.getElementById('tab3').onclick = function () {
    document.getElementById('tab3').style.transform= "translate(0px, 0px)";
    document.getElementById('tab2').style.transform= "translate(1.5vw, 0px)";
    document.getElementById('tab1').style.transform= "translate(1.5vw, 0px)";
    document.getElementById('perfil').style.display="none";
    document.getElementById('cont').style.display="initial";
    document.getElementById('edu').style.display="none";
}

//PARTES
  //base
  const btnbase = document.getElementById('base');
  btnbase.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel').style.display = "block";
      document.getElementById('cores').style.visibility = "visible";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "visible";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "visible";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
//base branca
const bntcorbasebranco = document.getElementById('whitebase');
bntcorbasebranco.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fff");
  document.getElementById('CB').style.backgroundColor = "#fff";
});

//base preta
const btncorbasepreto = document.getElementById('blackbase');
btncorbasepreto.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fce9c9");
  document.getElementById('CB').style.backgroundColor = "#fce9c9";
});
//base azul
const btncorbaseazul = document.getElementById('bluebase');
btncorbaseazul.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#b5a397");
  document.getElementById('CB').style.backgroundColor = "#b5a397";
});    
//base vermelha
const btncorbasevermelha = document.getElementById('redbase');
btncorbasevermelha.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ffd3cf");
  document.getElementById('CB').style.backgroundColor = "#ffd3cf";
});  
//base amarela
const btncorbaseamarela = document.getElementById('yellowbase');
btncorbaseamarela.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#ad6681");
  document.getElementById('CB').style.backgroundColor = "#ad6681";
});  
//base verde
const btncorbaseverde = document.getElementById('greenbase');
btncorbaseverde.addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#88759d");
  document.getElementById('CB').style.backgroundColor = "#88759d";
});  

document.getElementById('base1').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#919594");
  document.getElementById('CB').style.backgroundColor = "#919594";
});  

document.getElementById('base2').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#a2c2b3");
  document.getElementById('CB').style.backgroundColor = "#a2c2b3";
}); 

document.getElementById('base3').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#bfe9ae");
  document.getElementById('CB').style.backgroundColor = "#bfe9ae";
}); 

document.getElementById('base4').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#64c49a");
  document.getElementById('CB').style.backgroundColor = "#64c49a";
}); 

document.getElementById('base5').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#584843");
  document.getElementById('CB').style.backgroundColor = "#584843";
}); 

document.getElementById('base6').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#005e89");
  document.getElementById('CB').style.backgroundColor = "#005e89";
}); 

document.getElementById('base7').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#366596");
  document.getElementById('CB').style.backgroundColor = "#366596";
}); 

document.getElementById('base8').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#021840");
  document.getElementById('CB').style.backgroundColor = "#021840";
}); 

document.getElementById('base9').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#f1d071");
  document.getElementById('CB').style.backgroundColor = "#f1d071";
}); 

document.getElementById('base10').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#fa501a");
  document.getElementById('CB').style.backgroundColor = "#fa501a";
}); 

document.getElementById('base1110').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#b6010b");
  document.getElementById('CB').style.backgroundColor = "#b6010b";
}); 

document.getElementById('base1111').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#a38a70");
  document.getElementById('CB').style.backgroundColor = "#a38a70";
}); 

document.getElementById('base1112').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#006246");
  document.getElementById('CB').style.backgroundColor = "#006246";
}); 

document.getElementById('base1113').addEventListener('click', function(e){
  document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#000");
  document.getElementById('CB').style.backgroundColor = "#000";
}); 
  //botoes
  const btnbotoes = document.getElementById('botoes');
  btnbotoes.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel1').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "visible";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "visible";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "visible";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //botoes branco
  const bntcorbotoesbranco = document.getElementById('whitebase1');
  bntcorbotoesbranco.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#fff";
    document.getElementById('BT').style.backgroundColor = "#fff";
  });

  //botoes preta
  const btncorbotoespreto = document.getElementById('blackbase1');
  btncorbotoespreto.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#fce9c9";
    document.getElementById('BT').style.backgroundColor = "#fce9c9";
  });
  //botoes azul
  const btncorbotoesazul = document.getElementById('bluebase1');
  btncorbotoesazul.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#b5a397";
    document.getElementById('BT').style.backgroundColor = "#b5a397";
  });    
  //botoes vermelha
  const btncorbotoesvermelha = document.getElementById('redbase1');
  btncorbotoesvermelha.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#ffd3cf";
    document.getElementById('BT').style.backgroundColor = "#ffd3cf";
  });  
  //botoes amarela
  const btncorbotoesamarela = document.getElementById('yellowbase1');
  btncorbotoesamarela.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#ad6681";
    document.getElementById('BT').style.backgroundColor = "#ad6681";
  });  
  //botoes verde
  const btncorbotoesverde = document.getElementById('greenbase1');
  btncorbotoesverde.addEventListener('click', function(e){
    document.getElementById('botao').style.fill = "#88759d";
    document.getElementById('BT').style.backgroundColor = "#88759d";
  });  

  document.getElementById('base11').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#919594");
    document.getElementById('BT').style.backgroundColor = "#919594";
  });  
  
  document.getElementById('base21').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#a2c2b3");
    document.getElementById('BT').style.backgroundColor = "#a2c2b3";
  }); 
  
  document.getElementById('base31').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#bfe9ae");
    document.getElementById('BT').style.backgroundColor = "#bfe9ae";
  }); 
  
  document.getElementById('base41').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#64c49a");
    document.getElementById('BT').style.backgroundColor = "#64c49a";
  }); 
  
  document.getElementById('base51').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#584843");
    document.getElementById('BT').style.backgroundColor = "#584843";
  }); 
  
  document.getElementById('base61').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#005e89");
    document.getElementById('BT').style.backgroundColor = "#005e89";
  }); 
  
  document.getElementById('base71').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#366596");
    document.getElementById('BT').style.backgroundColor = "#366596";
  }); 
  
  document.getElementById('base81').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#021840");
    document.getElementById('BT').style.backgroundColor = "#021840";
  }); 
  
  document.getElementById('base91').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#f1d071");
    document.getElementById('BT').style.backgroundColor = "#f1d071";
  }); 
  
  document.getElementById('base101').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#fa501a");
    document.getElementById('BT').style.backgroundColor = "#fa501a";
  }); 
  
  document.getElementById('base1120').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#b6010b");
    document.getElementById('BT').style.backgroundColor = "#b6010b";
  }); 
  
  document.getElementById('base1121').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#a38a70");
    document.getElementById('BT').style.backgroundColor = "#a38a70";
  }); 
  
  document.getElementById('base1122').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#006246");
    document.getElementById('BT').style.backgroundColor = "#006246";
  }); 
  
  document.getElementById('base1123').addEventListener('click', function(e){
    document.querySelectorAll(".botao").forEach(v => v.style.fill = "#000");
    document.getElementById('BT').style.backgroundColor = "#000";
  }); 



  //gola exterior
  const btngolaE = document.getElementById('gola1');
  btngolaE.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel2').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "visible";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "visible";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "visible";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //Gola exterior branco
  const bntcorgolaEbranco = document.getElementById('whitebase2');
  bntcorgolaEbranco.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#fff";
    document.getElementById('golaEE').style.fill = "#fff";
    document.getElementById('ge').style.backgroundColor = "#fff";
  });
  //Gola exterior preta
  const btncorgolaEpreto = document.getElementById('blackbase2');
  btncorgolaEpreto.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#fce9c9";
    document.getElementById('golaEE').style.fill = "#fce9c9";
    document.getElementById('ge').style.backgroundColor = "#fce9c9";
  });
  //Gola exterior azul
  const btncorgolaEazul = document.getElementById('bluebase2');
  btncorgolaEazul.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#b5a397";
    document.getElementById('golaEE').style.fill = "#b5a397";
    document.getElementById('ge').style.backgroundColor = "#b5a397";
  });    
  //Gola exterior vermelha
  const btncorgolaEvermelha = document.getElementById('redbase2');
  btncorgolaEvermelha.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#ffd3cf";
    document.getElementById('golaEE').style.fill = "#ffd3cf";
    document.getElementById('ge').style.backgroundColor = "#ffd3cf";
  });  
  //Gola exterior amarela
  const btncorgolaEamarela = document.getElementById('yellowbase2');
  btncorgolaEamarela.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#ad6681";
    document.getElementById('golaEE').style.fill = "#ad6681";
    document.getElementById('ge').style.backgroundColor = "#ad6681";
  });  
  //Gola exterior verde
  const btncorgolaEverde = document.getElementById('greenbase2');
  btncorgolaEverde.addEventListener('click', function(e){
    document.getElementById('golaE').style.fill = "#88759d";
    document.getElementById('golaEE').style.fill = "#88759d";
    document.getElementById('ge').style.backgroundColor = "#88759d";
  });  

  document.getElementById('base12').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#919594");
    document.getElementById('ge').style.backgroundColor = "#919594";
  });  
  
  document.getElementById('base22').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#a2c2b3");
    document.getElementById('ge').style.backgroundColor = "#a2c2b3";
  }); 
  
  document.getElementById('base32').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#bfe9ae");
    document.getElementById('ge').style.backgroundColor = "#bfe9ae";
  }); 
  
  document.getElementById('base42').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#64c49a");
    document.getElementById('ge').style.backgroundColor = "#64c49a";
  }); 
  
  document.getElementById('base52').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#584843");
    document.getElementById('ge').style.backgroundColor = "#584843";
  }); 
  
  document.getElementById('base62').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#005e89");
    document.getElementById('ge').style.backgroundColor = "#005e89";
  }); 
  
  document.getElementById('base72').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#366596");
    document.getElementById('ge').style.backgroundColor = "#366596";
  }); 
  
  document.getElementById('base82').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#021840");
    document.getElementById('ge').style.backgroundColor = "#021840";
  }); 
  
  document.getElementById('base92').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#f1d071");
    document.getElementById('ge').style.backgroundColor = "#f1d071";
  }); 
  
  document.getElementById('base102').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#fa501a");
    document.getElementById('ge').style.backgroundColor = "#fa501a";
  }); 

  document.getElementById('base1130').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#b6010b");
    document.getElementById('ge').style.backgroundColor = "#b6010b";
  }); 
  
  document.getElementById('base1131').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#a38a70");
    document.getElementById('ge').style.backgroundColor = "#a38a70";
  }); 
  
  document.getElementById('base1132').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#006246");
    document.getElementById('ge').style.backgroundColor = "#006246";
  }); 
  
  document.getElementById('base1133').addEventListener('click', function(e){
    document.querySelectorAll(".golaE").forEach(v => v.style.fill = "#000");
    document.getElementById('ge').style.backgroundColor = "#000";
  }); 
  



  //gola interior
  const btngolaI = document.getElementById('gola2');
  btngolaI.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel3').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "hidden";
      document.getElementById('btncorcarcela').style.visibility = "visible";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "visible";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "hidden";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "visible";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //Gola interior branco
  const bntcorgolaIbranco = document.getElementById('whitebase3');
  bntcorgolaIbranco.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#fff";
    document.getElementById('gi').style.backgroundColor = "#fff";
  });
  //Gola interior preta
  const btncorgolaIpreto = document.getElementById('blackbase3');
  btncorgolaIpreto.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#fce9c9";
    document.getElementById('gi').style.backgroundColor = "#fce9c9";
  });
  //Gola interior azul
  const btncorgolaIazul = document.getElementById('bluebase3');
  btncorgolaIazul.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#b5a397";
    document.getElementById('gi').style.backgroundColor = "#b5a397";
  });    
  //Gola interior vermelha
  const btncorgolaIvermelha = document.getElementById('redbase3');
  btncorgolaIvermelha.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#ffd3cf";
    document.getElementById('gi').style.backgroundColor = "#ffd3cf";
  });  
  //Gola interior amarela
  const btncorgolaIamarela = document.getElementById('yellowbase3');
  btncorgolaIamarela.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#ad6681";
    document.getElementById('gi').style.backgroundColor = "#ad6681";
  });  
  //Gola interior verde
  const btncorgolaIverde = document.getElementById('greenbase3');
  btncorgolaIverde.addEventListener('click', function(e){
    document.getElementById('golaI').style.fill = "#88759d";
    document.getElementById('gi').style.backgroundColor = "#88759d";
  });  

  document.getElementById('base13').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#919594");
    document.getElementById('gi').style.backgroundColor = "#919594";
  });  
  
  document.getElementById('base23').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#a2c2b3");
    document.getElementById('gi').style.backgroundColor = "#a2c2b3";
  }); 
  
  document.getElementById('base33').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#bfe9ae");
    document.getElementById('gi').style.backgroundColor = "#bfe9ae";
  }); 
  
  document.getElementById('base43').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#64c49a");
    document.getElementById('gi').style.backgroundColor = "#64c49a";
  }); 
  
  document.getElementById('base53').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#584843");
    document.getElementById('gi').style.backgroundColor = "#584843";
  }); 
  
  document.getElementById('base63').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#005e89");
    document.getElementById('gi').style.backgroundColor = "#005e89";
  }); 
  
  document.getElementById('base73').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#366596");
    document.getElementById('gi').style.backgroundColor = "#366596";
  }); 
  
  document.getElementById('base83').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#021840");
    document.getElementById('gi').style.backgroundColor = "#021840";
  }); 
  
  document.getElementById('base93').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#f1d071");
    document.getElementById('gi').style.backgroundColor = "#f1d071";
  }); 
  
  document.getElementById('base103').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#fa501a");
    document.getElementById('gi').style.backgroundColor = "#fa501a";
  }); 

  document.getElementById('base1140').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#b6010b");
    document.getElementById('gi').style.backgroundColor = "#b6010b";
  }); 
  
  document.getElementById('base1141').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#a38a70");
    document.getElementById('gi').style.backgroundColor = "#a38a70";
  }); 
  
  document.getElementById('base1142').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#006246");
    document.getElementById('gi').style.backgroundColor = "#006246";
  }); 
  
  document.getElementById('base1143').addEventListener('click', function(e){
    document.querySelectorAll(".gola_2").forEach(v => v.style.fill = "#000");
    document.getElementById('gi').style.backgroundColor = "#000";
  }); 
  

    //punho
    /*const btnpunho = document.getElementById('punho');
  btnpunho.addEventListener('click', function(e){
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "visible";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";
  });
//punho branca
  const bntcorpunhobranco = document.getElementById('whitebase4');
  bntcorpunhobranco.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#fff";
    document.getElementById('punho1').style.fill = "#fff";
    document.getElementById('PU').style.backgroundColor = "#fff";
  });

  //punho preta
  const btncorpunhopreto = document.getElementById('blackbase4');
  btncorpunhopreto.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#fce9c9";
    document.getElementById('punho1').style.fill = "#fce9c9";
    document.getElementById('PU').style.backgroundColor = "#fce9c9";
  });
  //punho azul
  const btncorpunhoazul = document.getElementById('bluebase4');
  btncorpunhoazul.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#b5a397";
    document.getElementById('punho1').style.fill = "#b5a397";
    document.getElementById('PU').style.backgroundColor = "#b5a397";
  });    
  //punho vermelha
  const btncorpunhovermelha = document.getElementById('redbase4');
  btncorpunhovermelha.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#ffd3cf";
    document.getElementById('punho1').style.fill = "#ffd3cf";
    document.getElementById('PU').style.backgroundColor = "#ffd3cf";
  });  
  //punho amarela
  const btncorpunhoamarela = document.getElementById('yellowbase4');
  btncorpunhoamarela.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#ad6681";
    document.getElementById('punho1').style.fill = "#ad6681";
    document.getElementById('PU').style.backgroundColor = "#ad6681";
  });  
  //punho verde
  const btncorpunhoverde = document.getElementById('greenbase4');
  btncorpunhoverde.addEventListener('click', function(e){
    document.getElementById('punho2').style.fill = "#88759d";
    document.getElementById('punho1').style.fill = "#88759d";
    document.getElementById('PU').style.backgroundColor = "#88759d";
  });

  document.getElementById('base14').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#919594");
    document.getElementById('CB').style.backgroundColor = "#919594";
  });  
  
  document.getElementById('base24').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#a2c2b3");
    document.getElementById('CB').style.backgroundColor = "#a2c2b3";
  }); 
  
  document.getElementById('base34').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#bfe9ae");
    document.getElementById('CB').style.backgroundColor = "#bfe9ae";
  }); 
  
  document.getElementById('base44').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#64c49a");
    document.getElementById('CB').style.backgroundColor = "#64c49a";
  }); 
  
  document.getElementById('base54').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#584843");
    document.getElementById('CB').style.backgroundColor = "#584843";
  }); 
  
  document.getElementById('base64').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#005e89");
    document.getElementById('CB').style.backgroundColor = "#005e89";
  }); 
  
  document.getElementById('base74').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#366596");
    document.getElementById('CB').style.backgroundColor = "#366596";
  }); 
  
  document.getElementById('base84').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#021840");
    document.getElementById('CB').style.backgroundColor = "#021840";
  }); 
  
  document.getElementById('base94').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#f1d071");
    document.getElementById('CB').style.backgroundColor = "#f1d071";
  }); 
  
  document.getElementById('base104').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#000");
    document.getElementById('CB').style.backgroundColor = "#000";
  }); 
  
  document.getElementById('base114').addEventListener('click', function(e){
    document.querySelectorAll(".corbase").forEach(v => v.style.fill = "#000");
    document.getElementById('CB').style.backgroundColor = "#000";
  }); */

   //vistaE
   const btnvistaE = document.getElementById('vista');
  btnvistaE.addEventListener('click', function(e){
    if(window.innerWidth <= 768){
      document.getElementById('acabamentos').style.display = "none";
      document.getElementById('deletebaselabel4').style.display = "block";
      document.getElementById('btncorbtn').style.visibility = "hidden";
      document.getElementById('btncor').style.visibility = "hidden";
      document.getElementById('btncorgola').style.visibility = "hidden";
      document.getElementById('btncorvista').style.visibility = "visible";
      document.getElementById('btncorcarcela').style.visibility = "hidden";
      document.getElementById('cores').style.visibility = "hidden";
      document.getElementById('coresb').style.visibility = "hidden";
      document.getElementById('coresGE').style.visibility = "hidden";
      document.getElementById('coresGI').style.visibility = "hidden";
      document.getElementById('coresP').style.visibility = "hidden";
      document.getElementById('coresVE').style.visibility = "visible";
      document.getElementById('coresVD').style.visibility = "hidden";
      document.getElementById('coresBF').style.visibility = "hidden";
      document.getElementById('coresBB').style.visibility = "hidden";
    }else{
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "visible";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";}
  });
  //vistaE branco
  const bntcorvistaEbranco = document.getElementById('whitebase5');
  bntcorvistaEbranco.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#fff";
    document.getElementById('VE').style.backgroundColor = "#fff";
  });

  //vistaE preta
  const btncorvistaEpreto = document.getElementById('blackbase5');
  btncorvistaEpreto.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#fce9c9";
    document.getElementById('VE').style.backgroundColor = "#fce9c9";
  });
  //vistaE azul
  const btncorvistaEazul = document.getElementById('bluebase5');
  btncorvistaEazul.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#b5a397";
    document.getElementById('VE').style.backgroundColor = "#b5a397";
  });    
  //vistaE vermelha
  const btncorvistaEvermelha = document.getElementById('redbase5');
  btncorvistaEvermelha.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#ffd3cf";
    document.getElementById('VE').style.backgroundColor = "#ffd3cf";
  });  
  //vistaE amarela
  const btncorvistaEamarela = document.getElementById('yellowbase5');
  btncorvistaEamarela.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#ad6681";
    document.getElementById('VE').style.backgroundColor = "#ad6681";
  });  
  //vistaE verde
  const btncorvistaEverde = document.getElementById('greenbase5');
  btncorvistaEverde.addEventListener('click', function(e){
    document.getElementById('vista2').style.fill = "#88759d";
    document.getElementById('VE').style.backgroundColor = "#88759d";
  });

  document.getElementById('base15').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#919594");
    document.getElementById('VE').style.backgroundColor = "#919594";
  });  
  
  document.getElementById('base25').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#a2c2b3");
    document.getElementById('VE').style.backgroundColor = "#a2c2b3";
  }); 
  
  document.getElementById('base35').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#bfe9ae");
    document.getElementById('VE').style.backgroundColor = "#bfe9ae";
  }); 
  
  document.getElementById('base45').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#64c49a");
    document.getElementById('VE').style.backgroundColor = "#64c49a";
  }); 
  
  document.getElementById('base55').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#584843");
    document.getElementById('VE').style.backgroundColor = "#584843";
  }); 
  
  document.getElementById('base65').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#005e89");
    document.getElementById('VE').style.backgroundColor = "#005e89";
  }); 
  
  document.getElementById('base75').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#366596");
    document.getElementById('VE').style.backgroundColor = "#366596";
  }); 
  
  document.getElementById('base85').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#021840");
    document.getElementById('VE').style.backgroundColor = "#021840";
  }); 
  
  document.getElementById('base95').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#f1d071");
    document.getElementById('VE').style.backgroundColor = "#f1d071";
  }); 
  
  document.getElementById('base105').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#fa501a");
    document.getElementById('VE').style.backgroundColor = "#fa501a";
  }); 

  document.getElementById('base1160').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#b6010b");
    document.getElementById('VE').style.backgroundColor = "#b6010b";
  }); 
  
  document.getElementById('base1161').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#a38a70");
    document.getElementById('VE').style.backgroundColor = "#a38a70";
  }); 
  
  document.getElementById('base1162').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#006246");
    document.getElementById('VE').style.backgroundColor = "#006246";
  }); 
  
  document.getElementById('base1163').addEventListener('click', function(e){
    document.querySelectorAll(".vista2").forEach(v => v.style.fill = "#000");
    document.getElementById('VE').style.backgroundColor = "#000";
  }); 



  //vistaD
  const btnvistaD = document.getElementById('vista1');
  btnvistaD.addEventListener('click', function(e){
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "visible";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "hidden";
  });
  //vistaD branco
  const bntcorvistaDbranco = document.getElementById('whitebase6');
  bntcorvistaDbranco.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#fff";
    document.getElementById('VD').style.backgroundColor = "#fff";
  });

  //vistaD preta
  const btncorvistaDpreto = document.getElementById('blackbase6');
  btncorvistaDpreto.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#B8A78E";
    document.getElementById('VD').style.backgroundColor = "#B8A78E";
  });
  //vistaD azul
  const btncorvistaDazul = document.getElementById('bluebase6');
  btncorvistaDazul.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#6F5E4F";
    document.getElementById('VD').style.backgroundColor = "#6F5E4F";
  });    
  //vistaD vermelha
  const btncorvistaDvermelha = document.getElementById('redbase6');
  btncorvistaDvermelha.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#8AB7D8";
    document.getElementById('VD').style.backgroundColor = "#8AB7D8";
  });  
  //vistaD amarela
  const btncorvistaDamarela = document.getElementById('yellowbase6');
  btncorvistaDamarela.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#517EA8";
    document.getElementById('VD').style.backgroundColor = "#517EA8";
  });  
  //vistaD verde
  const btncorvistaDverde = document.getElementById('greenbase6');
  btncorvistaDverde.addEventListener('click', function(e){
    document.getElementById('vista3').style.fill = "#8BBFA8";
    document.getElementById('VD').style.backgroundColor = "#8BBFA8";
  });



  //Bolso Faixa
  const btnbolsoF = document.getElementById('bolsobtn');
  btnbolsoF.addEventListener('click', function(e){
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "visible";
    document.getElementById('coresBB').style.visibility = "hidden";
  });
  //Bolso Faixa branco
  const bntcorbolsoFbranco = document.getElementById('whitebase7');
  bntcorbolsoFbranco.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#fff";
    document.getElementById('BSF').style.backgroundColor = "#fff";
  });

  //Bolso Faixa preta
  const btncorbolsoFpreto = document.getElementById('blackbase7');
  btncorbolsoFpreto.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#B8A78E";
    document.getElementById('BSF').style.backgroundColor = "#B8A78E";
  });
  //Bolso Faixa azul
  const btncorbolsoFazul = document.getElementById('bluebase7');
  btncorbolsoFazul.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#6F5E4F";
    document.getElementById('BSF').style.backgroundColor = "#6F5E4F";
  });    
  //Bolso Faixa vermelha
  const btncorbolsoFvermelha = document.getElementById('redbase7');
  btncorbolsoFvermelha.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#8AB7D8";
    document.getElementById('BSF').style.backgroundColor = "#8AB7D8";
  });  
  //Bolso Faixa amarela
  const btncorbolsoFamarela = document.getElementById('yellowbase7');
  btncorbolsoFamarela.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#517EA8";
    document.getElementById('BSF').style.backgroundColor = "#517EA8";
  });  
  //Bolso Faixa verde
  const btncorbolsoFverde = document.getElementById('greenbase7');
  btncorbolsoFverde.addEventListener('click', function(e){
    document.getElementById('bolsofaixa').style.fill = "#8BBFA8";
    document.getElementById('BSF').style.backgroundColor = "#8BBFA8";
  });



  //Bolso Faixa
  const btnbolsoB = document.getElementById('bolso1');
  btnbolsoB.addEventListener('click', function(e){
    document.getElementById('coresb').style.visibility = "hidden";
    document.getElementById('cores').style.visibility = "hidden";
    document.getElementById('coresGE').style.visibility = "hidden";
    document.getElementById('coresGI').style.visibility = "hidden";
    document.getElementById('coresP').style.visibility = "hidden";
    document.getElementById('coresVE').style.visibility = "hidden";
    document.getElementById('coresVD').style.visibility = "hidden";
    document.getElementById('coresBF').style.visibility = "hidden";
    document.getElementById('coresBB').style.visibility = "visible";
  });
  //Bolso Faixa branco
  const bntcorbolsoBbranco = document.getElementById('whitebase8');
  bntcorbolsoBbranco.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#fff";
    document.getElementById('BB').style.backgroundColor = "#fff";
  });

  //Bolso Faixa preta
  const btncorbolsoBpreto = document.getElementById('blackbase8');
  btncorbolsoBpreto.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#B8A78E";
    document.getElementById('BB').style.backgroundColor = "#B8A78E";
  });
  //Bolso Faixa azul
  const btncorbolsoBazul = document.getElementById('bluebase8');
  btncorbolsoBazul.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#6F5E4F";
    document.getElementById('BB').style.backgroundColor = "#6F5E4F";
  });    
  //Bolso Faixa vermelha
  const btncorbolsoBvermelha = document.getElementById('redbase8');
  btncorbolsoBvermelha.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#8AB7D8";
    document.getElementById('BB').style.backgroundColor = "#8AB7D8";
  });  
  //Bolso Faixa amarela
  const btncorbolsoBamarela = document.getElementById('yellowbase8');
  btncorbolsoBamarela.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#517EA8";
    document.getElementById('BB').style.backgroundColor = "#517EA8";
  });  
  //Bolso Faixa verde
  const btncorbolsoBverde = document.getElementById('greenbase8');
  btncorbolsoBverde.addEventListener('click', function(e){
    document.getElementById('bolso12').style.fill = "#8BBFA8";
    document.getElementById('BB').style.backgroundColor = "#8BBFA8";
  });


  //bolso on/off
  const bolsoligadesliga = document.getElementById('switch-shadow');
  bolsoligadesliga.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow').checked){
      document.getElementById('bolsofrente').style.visibility = "visible";
    }else {
      document.getElementById('bolsofrente').style.visibility = "hidden";
    }
  });
  

  document.getElementById('switch-shadow3').addEventListener('click', function(e){
    if(document.getElementById('switch-shadow3').checked){
      document.getElementById('frente4').style.visibility = "visible";
      document.getElementById('lapela').style.visibility = "visible";
      document.getElementById('frente3').style.visibility = "hidden";
    }else {
      document.getElementById('frente4').style.visibility = "hidden";
      document.getElementById('lapela').style.visibility = "hidden";
      document.getElementById('frente3').style.visibility = "visible";
    }
  });


  // download
$(document).ready(function(){
  $("#download").click(function(){
    domtoimage.toBlob(document.getElementById('social_masculino')).then(function(blob){
      window.saveAs(blob, "Uniformizar.png");
      
    })
  })
 });

 //upload
 var deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

 var imga = document.createElement('img');
 imga.src = deleteIcon;
 
   var canvas = new fabric.Canvas('list');
   let uploader = document.getElementById("uploader");
   uploader.addEventListener('change',function(e){
 var reader = new FileReader();
 reader.onload = function(e) {
   var image = new Image();
   image.src = e.target.result;
   image.onload = function() {
     var img = new fabric.Image(image);
     img.set({
       left: 100,
       top: 60
     });
     img.scaleToWidth(200);
     canvas.add(img).setActiveObject(img).renderAll();
     }
 }
 reader.readAsDataURL(e.target.files[0]);
 setTimeout(() => {
   document.getElementById("uploader").value = "";
 }, 1)
 });
 fabric.Object.prototype.controls.deleteControl = new fabric.Control({
   x: 0.5,
   y: -0.5,
   offsetY: 16,
   cursorStyle: 'pointer',
   mouseUpHandler: deleteObject,
   render: renderIcon,
   cornerSize: 24
 });
 
 
 function deleteObject(eventData, transform) {
       var target = transform.target;
       var canvas = target.canvas;
           canvas.remove(target);
       canvas.requestRenderAll();
   };
 
 function renderIcon(ctx, left, top, styleOverride, fabricObject) {
   var size = this.cornerSize;
   ctx.save();
   ctx.translate(left, top);
   ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
   ctx.drawImage(imga, -size/2, -size/2, size, size);
   ctx.restore();
 };
 

///////////Responsivo
///////Celular
const lado = document.getElementById('switch-shadow2');
  lado.addEventListener('click', function(e){
    if(document.getElementById('switch-shadow2').checked){
      document.getElementById('frente').style.display = "none";
      document.getElementById('costas').style.display = "block";
      document.getElementById('bolsofrente').style.visibility = "hidden";
      document.getElementById('switch-shadow').disabled = true;
    }else {
      document.getElementById('switch-shadow').disabled = false;
      document.getElementById('frente').style.display = "block";
      document.getElementById('costas').style.display = "none"; 
      document.getElementById('bolsofrente').style.visibility = "hidden";
      if(document.getElementById('switch-shadow').checked){
        document.getElementById('bolsofrente').style.visibility = "visible";

    }else {
      document.getElementById('bolsofrente').style.visibility = "hidden";
    }
  }
});


function sizeOfThings() {
    if (window.innerWidth > 768){
        document.getElementById('costas').style.display = "block";
        document.getElementById('frente').style.visibility = "visible";
        document.getElementById('acabamentos').style.display = "block";
        document.getElementById('cores').style.visibility = "visible";
    }else{
        document.getElementById('costas').style.display = "none";
        document.getElementById('acabamentos').style.display = "none";
        document.getElementById('cores').style.visibility = "hidden";
        document.getElementById('coresb').style.visibility = "hidden";
        document.getElementById('coresGE').style.visibility = "hidden";
        document.getElementById('coresGI').style.visibility = "hidden";
        document.getElementById('coresP').style.visibility = "hidden";
        document.getElementById('coresVE').style.visibility = "hidden";
        document.getElementById('coresVD').style.visibility = "hidden";
        document.getElementById('coresBF').style.visibility = "hidden";
        document.getElementById('coresBB').style.visibility = "hidden";

    }
 };
window.addEventListener('resize', function(){
	sizeOfThings();
});
 

document.getElementById('botaocor').addEventListener('click', function(e){
  console.log('teste')
});

document.getElementById('btnacabalabel').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "block";
  document.getElementById('deletelabel').style.display = "block";
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
})

document.getElementById('deleteb').addEventListener('click', function(e){
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('deletebase').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocor').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "visible";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresP').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "block";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorbotoes').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "visible";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "block";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorgola').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "visible";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "block";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorvista').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "hidden";
  document.getElementById('coresVE').style.visibility = "visible";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "none";
  document.getElementById('deletebaselabel4').style.display = "block";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});

document.getElementById('botaocorcarcela').addEventListener('click', function(e){
  document.getElementById('cores').style.visibility = "hidden";
  document.getElementById('coresb').style.visibility = "hidden";
  document.getElementById('coresGE').style.visibility = "hidden";
  document.getElementById('coresGI').style.visibility = "visible";
  document.getElementById('coresVE').style.visibility = "hidden";
  document.getElementById('coresVD').style.visibility = "hidden";
  document.getElementById('coresBF').style.visibility = "hidden";
  document.getElementById('coresBB').style.visibility = "hidden";
  document.getElementById('deletebaselabel').style.display = "none";
  document.getElementById('deletebaselabel1').style.display = "none";
  document.getElementById('deletebaselabel2').style.display = "none";
  document.getElementById('deletebaselabel3').style.display = "block";
  document.getElementById('deletebaselabel4').style.display = "none";
  document.getElementById('acabamentos').style.display = "none";
  document.getElementById('deletelabel').style.display = "none";
});



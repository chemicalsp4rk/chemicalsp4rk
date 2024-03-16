function memulai(){if(fungsiAwal==0){audio.play();fungsiAwal=1;suratin.style="transition:all .8s ease;transform:scale(10);opacity:0";wallpaper.style="transform: scale(1.5);";ket.style="display:none";setTimeout(pesanAwal,700)}}
  
  async function mulaikonten() {Content.style = "opacity:1;margin-top:0";bodyblur.style="opacity:.7";wallpaper.style="transform: scale(1);"; stiker.style="display:inline-flex;";setTimeout(ftmuncul,200);setTimeout(kethalo,500);}
  function kethalo(){if(ahalo<vketikhalo.length){halo.innerHTML += vketikhalo.charAt(ahalo);ahalo++;setTimeout(kethalo,60);}if(ahalo==vketikhalo.length){setTimeout(bqmuncul,200);}}
  function bqmuncul(){bq.style = "position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0";mulaiketik1();fungsi=1;}

  kal1=kalimat.innerHTML;kalimat.innerHTML = "";var aa=0,kal1;
  function mulaiketik1(){
  if(aa<kal1.length){
    kalimat.innerHTML += kal1.charAt(aa);aa++;
    setTimeout(mulaiketik1,150);
  }
  if(aa==kal1.length){mulaiketik2();}
  }
  kal2=kalimat2.innerHTML;kalimat2.innerHTML = "";var aaa=0,kal2;
  function mulaiketik2(){
  if(aaa<kal2.length){
    kalimat2.innerHTML += kal2.charAt(aaa);aaa++;
    setTimeout(mulaiketik2,200);
  }
  if(aaa==kal2.length){setInterval(createHeart,800);setTimeout(munculbwh,1000);setTimeout(tombol,3000);}
  }
  defkalimatbawah = kalimatbawah.innerHTML;
  function munculbwh(){kalimatbawah.innerHTML=defkalimatbawah;setTimeout(munculbwh2,2000);otomatis();}
  function munculbwh2(){kalimatbawah.innerHTML=kalimatbawah2.innerHTML;setTimeout(munculbwh3,2000);otomatis();}
  function munculbwh3(){kalimatbawah.innerHTML=kalimatbawah3.innerHTML;setTimeout(munculbwh,2000);otomatis();}
  function otomatis() {kalimatbawah.style="position:relative;opacity:0;transform:scale(.3);";setTimeout(anim,300);} 
  function anim() {kalimatbawah.style="position:relative;opacity:1;transform:scale(1);";}

  function ftmuncul(){if(ftganti==0){stiker.style="display:inline-flex;opacity:1;transform:scale(1)";}} function fthilang(){stiker.style="display:inline-flex;opacity:1;transition:all .7s ease;transform:scale(.1)";}
  
  function tombol(){ftom=1;Tombol.style="opacity:1;transform: scale(1);";}
  function multifungsi(){if(ftom==1){menuju();}

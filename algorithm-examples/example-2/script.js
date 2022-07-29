//1.JavaScript ile Mesaj Penceresi kullanarak ekranda “Merhaba Dünya” yazdırınız.

//alert("Merhaba Dünya");


//2.JavaScript ile sayfadaki bir elemana (p, div, h1, h2, vb.) “Merhaba Dünya” yazdırınız.

document.getElementById("baslik").innerHTML="Merhaba JavaScript";
document.getElementById("p1").innerHTML="Merhaba Dünya";
//document.querySelector("#p1").innerHTML="Merhaba Dünya";

//3.JavaScript ile değişken oluşturarak iki metni birleştiren ve mesaj penceresinde gösteren örneği oluşturunuz.

//var metin1="Tasarım";
//var metin2="Kodlama";

 //console.log(metin1+metin2);


 // 4. JavaScript ile değişken oluşturarak iki sayıyı toplayan ve sonucu bir div içinde gösteren örneği oluşturunuz.

 var s1=34;
 var s2=16;
 var sonuc=s1+s2;
 
 document.getElementById("sonuc").innerHTML= sonuc; 

 // 5. JavaScript ile kullanıcıdan input içinde adını girmesini isteyerek, Buttona basıldığında alert ekranında “Merhaba [kullanici]” yazdırılmasını sağlayan örneği oluşturunuz.

        var btnYaz= document.getElementById("btn");
        btnYaz.onclick=function(){
        var sedat = document.getElementById("txtAd").value;
         alert("Merhaba "+sedat );
        }
       
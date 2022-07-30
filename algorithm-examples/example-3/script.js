//Örnek 6: JavaScript ile input lara girilen 2 sayıyı toplayan ve sonucu gösteren örneği oluşturunuz.

// let btnTopla=document.getElementById("btn");
        
//         btnTopla.onclick=function(){
//             let s1=Number(document.getElementById("txtSayi1").value);
//             let s2=Number(document.getElementById("txtSayi2").value);
//             let toplam=s1+s2;
//             document.getElementById("sonuc").innerHTML=s1+"+"+s2+"="+toplam;
//         }

    // Örnek 7: JavaScript ile kenar uzunluğu girilen karenin alan ve çevresini hesaplayan örneği oluşturunuz.

            var btnHesapla=document.getElementById("btn");
        
            btnHesapla.onclick=function(){
            var kenar=Number(document.getElementById("txtKenar").value);
            var alan=kenar*kenar;
            var cevre=4*kenar;
            document.getElementById("sonuc").innerHTML="Alan : "+alan+"<br>"+"Çevre : "+cevre;
        }


       // Örnek 8: JavaScript ile kullanıcının girdiği yazılı notlarının ortalamasını hesaplayan örneği oluşturunuz.

       function notHesapla(){
        not1 =Number( document.querySelector("#not1").value )
        not2 =Number( document.querySelector("#not2").value )
        document.querySelector("#sonuc").innerText = (not1 + not2) / 2
    }

    //Örnek 9: JavaScript ile Kısa ve Uzun Kenarı girilen Dikdörtgenin  Alanı ve Çevresini Hesaplayan örneği oluşturunuz.

        function hesapla(){
        let kk =Number( document.querySelector("#kisakenar").value )
        let uk =Number( document.querySelector("#uzunkenar").value )
        let alan  = kk * uk
        let cevre = (kk + uk) * 2
         document.querySelector("#sonuc").innerText = `Çevre : ${cevre} ve Alan: ${alan}`
     }

     // Örnek 11: JavaScript ile dört adet button ile (Topla, Çıkar, Çarp, Böl) dört işlem örneğini oluşturunuz.

     function topla(){
        sonuc.innerText = "Toplam:" +Number(sayi1.value) + Number(sayi2.value)
     }

     function cikar(){
        sonuc.innerText = "Çıkarma:" +Number(sayi1.value) - Number(sayi2.value)
     }

     function carp(){
        sonuc.innerText = "Çarpma:" +Number(sayi1.value) * Number(sayi2.value)
     }

     function bol(){
        sonuc.innerText = "Bölme:" +Number(sayi1.value) / Number(sayi2.value)
     }


     // Örnek 12: JavaScript ile input nesnesine girilen metni sayfadaki listeye liste elemanı olarak ekleyen örneği oluşturunuz.

     var btnEkle=document.getElementById("btn");
     var lst=document.getElementById("liste");
     btnEkle.onclick=function(){
         var eleman=document.getElementById("txt1").value;
         lst.innerHTML+="<li>"+eleman+"</li>";
     }


     // Örnek 13: JavaScript ile girilen sayının tek mi çift mi olduğunu bulan örneği oluşturunuz.

         var btnHesap=document.getElementById("btn");
        
         btnHesap.onclick=function(){
         var sayi=Number(document.getElementById("txtSayi").value);
         
         if(sayi%2==0){
             alert(sayi+" Sayısı Çifttir.");
         }
         else{
             alert(sayi+" Sayısı Tektir.");
         }
         
     }

     // Örnek 14 JavaScript ile 0-100 arası girilen notu 5 lik sisteme çeviren örneği oluşturunuz.

     var btnCevir=document.getElementById("btn");
     var notu;
     btnCevir.onclick=function(){
         var puan=Number(document.getElementById("txtPuan").value);
         if(puan>=0 && puan<50){
             notu=1;
         }
         else if(puan>=50 && puan<60){
             notu=2;
         }
         else if(puan>=60 && puan<70){
             notu=3;
         }
         else if(puan>=70 && puan<85){
             notu=4;
         }
         else if(puan>=85 && puan<=100){
             notu=5;
         }
         else
             {
                 notu=-1;
                 alert("Geçersiz Puan Girdiniz.");
             }
         
         document.getElementById("sonuc").innerHTML="Notunuz : "+notu;
     }
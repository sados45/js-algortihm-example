

const person = {
    firstName:'Bruce',
    lastName: 'willes'
}
console.log(person)

// 1. 10 ile 15 sayıları arasındaki tamsayıların çarpımını hesaplayıp ekrana yazdıran Javacsript kodunu yazınız.

a=1;
for (s=10; s<=15; s=s+1)
{
a = a * s;
}
console.log(a);

// 2. 100 ile 200 sayılarının arasında 23 ün katı olan sayıların toplamını hesaplayıp ekrana yazdıran Javascript kodunu yazınız.

a=0;

for (s=0; s<=200; s=s+23)
{
   if (s >= 100)
   {
   a = a + s;
   }
}
console.log(a);

// 3. x y ve z sayılarının en küçüğünü ekrana yazan javascript kodunu yazınız.

// k = x;
// if ( y < k ) 
// {
// k = y;
// }
// if ( z < k )
// {
// k = z;
// }
// console.log(k);

// 100 lük değerlendirme sisteminde dönem içinde 55 puan üzerinden 50 puan toplayan bir öğrencinin B+ harf notu alması için (86 puan) %45 I hesaplanacak final sınavında 100 üzerinden en az kaç puan alması gerektiğini ekrana yazan javascript kodunu yazınız.


n = 50;
x = 86-n;
y = x*100/45;
console.log(y);

 

// 5. Günlük 210 ton yağ rafine etme ve işleme kapasitesine sahip bir fabrikanın 7550 tonluk üretimi karşılamak için kaç gün çalışması gerektiğini ve çalışma sonucu kaç ton zeytinyağı üretileceğini hesaplayan Javascript kodunu yazınız.


let g=0 ;
let u=0 ;

while (u<=7550)
{
u = u + 210 ;
g = g + 1 ;
}
console.log (u,g) ;


// Günlük 1150 şişe süt üreten bir tesisin 24 günlük kümülatif süt üretimini alt alta ekrana yazdıran Javascript kodunu yazınız.

ts=0;
for (s=1;s<=24;s=s+1)
{
ts= ts + 1150;
document.write (ts+"<br>");
}


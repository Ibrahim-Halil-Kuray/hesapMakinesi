/*** 4 islemi barindiran bir ek modul yazilacak.
 * 
Kriterler:
- Analiz bölümünün bulunmasi (user interaction ve technical details)
- Programin düzgün calismasi
- Kod içine yorumların eklenmesi
- Kod makyajina dikkat edilmesi
- require/module.exports ikilisini code ihrac ve ithalatinda kullanilmasi
 * 
 Adimlar
 -istenen fonsiyonlari olustur.
 -fonksiyonlari export et fonk dan.
 -fonksiyonlari import et index e.
 */

const dortIslem = require("./fonksiyon");

dortIslem.toplamaFonk(5, 7);
dortIslem.fark(3, 1);
dortIslem.carpim(2, 5);
dortIslem.bolum(24, 2);
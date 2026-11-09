# Ratio uygulaması: kurulum

Bu klasör olduğu gibi GitHub Pages'e yüklenir. Uygulama bir kez açıldıktan sonra internetsiz çalışır. İlerleme, Firebase ile telefon, iPad ve bilgisayar arasında eşitlenir.

## 1. GitHub Pages (adres)
1. github.com › New repository › ad: `ratio` › Public › Create.
2. Bu klasörün içindekileri depoya yükle (ya da Claude'a depoya erişim ver, o yüklesin).
3. Settings › Pages › Source: *Deploy from a branch* › Branch: `main`, klasör `/ (root)` › Save.
4. Bir iki dakika sonra adres: `https://<kullanıcı-adın>.github.io/ratio/`

## 2. Firebase (eşitleme)
1. console.firebase.google.com › Add project › ad: `ratio` (Analytics gerekmez).
2. Build › Authentication › Get started › Sign-in method:
   - **Google** › Enable.
   - **Email/Password** › Enable (ana ekrandaki uygulamada Google penceresi açılmazsa bununla girilir).
3. Authentication › Settings › Authorized domains › Add domain: `<kullanıcı-adın>.github.io`
4. Build › Firestore Database › Create database › konum `eur3 (europe-west)` › *production mode*.
5. Firestore › Rules sekmesi › `firestore.rules` dosyasının içeriğini yapıştır › Publish.
6. Proje ayarları (dişli) › General › Your apps › Web (`</>`) › ad: `ratio` › Register.
   Gösterilen `firebaseConfig` nesnesini `firebase-config.js` içinde `window.RATIO_FIREBASE = { ... };` olarak yaz.
   (Bu değerler gizli değildir; erişimi kurallar ve giriş korur.)

## 3. Cihazlara kurma
- **iPhone / iPad:** Safari'de adresi aç › Paylaş › Ana Ekrana Ekle. Ana ekrandaki simgeden aç.
- **Android:** Chrome › menü › Uygulamayı yükle.
- **Bilgisayar:** Chrome/Edge › adres çubuğundaki yükle simgesi.
- Her cihazda Hesap ekranından (sağ üstteki kayıt noktası) **aynı hesapla** gir.

## Güncellemeler
Claude yeni paketleri üretip depoya yükler. Uygulama açıkken yeni sürümü arka planda indirir. Hesap ekranında “Şimdi yenile” düğmesi çıkar.

## Claude içindeki sürümden ilerleme taşımak
Claude içindeki Ratio › Hesap › Dışa aktar › dosyayı kaydet. Uygulamada › Hesap › İçe aktar. Hiçbir şey silinmez, kayıtlar birleşir.

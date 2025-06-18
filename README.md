# Web Tabanlı Gramer ve Token Analiz Uygulaması

Bu proje, kullanıcıdan alınan metinleri analiz etmek üzere gramer ve sözcük düzeyinde işleyen bir sistem sunar. Node.js tabanlı bir backend ile çalışan bu sistem, gramer kurallarını tanımlar, lexical analiz (tokenization) gerçekleştirir ve sonuçları kullanıcıya sunar.

## 📁 Proje Yapısı

webServer/
├── gramer.py # Gramer kurallarını tanımlar (Python)
├── lexical.py # Lexical (token) analiz işlemleri
├── token.py # Token sınıfları ve veri yapıları
├── topdown.py # Top-down parser uygulaması (gramer analizi)
├── tkinter.py # Tkinter ile görsel arayüz prototipi
├── main.py # Python tarafının çalıştırıcısı
├── node_modules/ # Node.js bağımlılıkları
├── package.json # Node.js bağımlılık tanımlamaları
├── app.js / server.js # Web sunucusunu başlatan dosya
└── public/ # Statik dosyalar (HTML, CSS, JS)
└── index.html # Kullanıcı arayüzü sayfası

bash
Kopyala
Düzenle

## 🚀 Başlangıç

### Kurulum

```bash
git clone https://github.com/kullaniciadi/proje-adi.git
cd proje-adi/webServer
npm install
Sunucuyu Başlatma
bash
Kopyala
Düzenle
node app.js
# veya
npm start
Erişim
Uygulama varsayılan olarak http://localhost:3000 adresinde çalışır.

🔍 Fonksiyonlar
1. Tokenizasyon
lexical.py dosyası, kullanıcıdan alınan metni kelimelere ve sembollere ayırarak token listesi oluşturur.

2. Gramer Kontrolü
topdown.py dosyası ile top-down parser algoritması kullanılarak girilen cümle gramer kurallarına göre analiz edilir.

3. Python – Node.js Entegrasyonu
Python betikleri, Node.js backend’i tarafından child_process modülüyle çalıştırılarak çıktı alınır ve kullanıcıya gönderilir.

4. Web Arayüzü
public/index.html dosyası aracılığıyla kullanıcı, tarayıcı üzerinden metin girip analizi başlatabilir. Arka planda ilgili Python kodları çalıştırılır.

⚙️ Kullanılan Teknolojiler
Node.js

Express.js

Python 3 (Lexical & Gramer analiz için)

HTML / CSS / JavaScript

Tkinter (demo GUI)

💡 Katkı Sağlamak
Projeye katkıda bulunmak isterseniz:

Fork alın

Yeni bir branch oluşturun (feature/yeniozellik)

Değişiklikleri commit'leyin

Pull Request oluşturun

📄 Lisans
MIT Lisansı altında lisanslanmıştır.

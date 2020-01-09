## CouchSurfing App (Ev Arama Uygulaması)

Uygulama açıldığında sisteme kaydolma veya giriş yapma ekranı gelmektedir. 
Kullanıcı kayıt/giriş yaptıktan sonra profil sayfasına yönlendirilmekte ve burada çeşitli ayarlamalar yapabilmektedir. 
Sistemin kararlılığı açısından kullanıcıya email gibi bazı bilgilerinin değiştirilmesine izin verilmemektedir. 
Kullanıcı profil ayarlarından misafir ağırlayabileceği veya misafir olarak gitmek istediği şehirleri plaka kodu olarak profiline eklemekte ve plakalara karşılık gelen veri tabanı kayıtlarını ana sayfasında görebilmektedir.
Uygulama üzerinden başka bir kullanıcı ile mesajlaşmak mümkündür. 
Mesajlar bir dizi içerinde, gönderici, alıcı ve mesaj öğelerinden oluşan objelerle tutulmakta ve iletilmektedir.

#

### Geliştiriciler
- **150201200 Emil Mammadov**
- **110201102 Magsud Hajiyev**

#

### Uygulamada Kullanılan modüller, sayfalar ve amaçları
- #### **`Posts` Modülü**
Kullanıcı bu modül üzerinden ev aradığı şehire uygun gönderi paylaşabilir ve zaman tünelinde,
başka kullanıcılar tarafından paylaşılmış olan gönderileri görebilir. Kullanıcı sadece profil sayfasından
takip ettiği şehirlerde olan ev arama gönderilerini görmektedir. Bununla yanısıra kullanıcı
sadece kendi gönderilerine profil sayfasından, bu modül üzerinden ulaşabilmektedir.

- #### **`Messaging` Modülü**
Bu modülde kullanıcı evine almak istediği veya misafir olabileceği kullanıcı ile sohbet edebilir.
Sohbet modülü 2 sayfadan oluşmaktadır. İlk sayfada kullanıcı konuştuğu kişileri görür. 
İkinci sayfada ise sohbet başlatılabilir.

- #### **`Profile-Edit` Sayfası**
Kullanıcı bu sayfada profilini düzenlerken cihazı üzerinden `Native API` vasıtasıyla fotoğrafını çekebilir ve 
profil resmi olarak ayarlayabilir. Bununla yanısıra kullanıcı gönderilerini görmek istediği birden fazla şehri buradan profiline ekleyebilir.

- #### **`Profile` Sayfası**
Bu sayfada kullanıcı gönderilerini görmek için seçmiş olduğu şehirleri ve profil bilgilerini görüntüler.
Aynı zamanda buradan mesajlarına, kendi paylaşmış olduğu gönderilere ve zaman tuneline erişebilir.

- #### **`SignUp` ve `Login` Sayfaları**

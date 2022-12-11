# React Native Yükseklik ve Genişlik 
----

## Sabit Boyutlar
### React Native'de tüm boyutlar birimsizdir.Bir bileşenin boyutlarını ayarlamanın genel yolu, bir sabit width ve height stil eklemektir.
![Sabit](https://user-images.githubusercontent.com/99039655/201407741-01c671b3-aeb1-451e-8344-4453655c9de3.png)
#### Boyutları bu şekilde ayarlamak, boyutları her zaman bir dizi noktaya sabitlenmesi gereken ve ekran boyutuna göre hesaplanmaması gereken bileşenler için yaygındır.
----
## Esnek Boyutlar 
### Flex Bileşenin kullanılabilir alana göre dinamik olarak genişlemesini ve küçülmesini sağlamak için bir bileşenin stilinde kullanın . Normalde flex: 1, bir bileşene aynı ebeveyne sahip diğer bileşenler arasında eşit olarak paylaşılan tüm kullanılabilir alanı doldurmasını söyleyen öğesini kullanırsınız. Verilenler ne kadar büyük flexolursa, bir bileşenin kardeşlerine kıyasla alacağı alan oranı o kadar yüksek olur.
![Flex](https://user-images.githubusercontent.com/99039655/201410369-9585a4af-0036-467b-b915-8f58bf26acc5.png)
#### Bir bileşenin boyutunu kontrol ettikten sonraki adım, onu ekrana nasıl yerleştireceğinizi öğrenmektir .
----
## Yüzde Boyutları
### Ekranın belirli bir bölümünü doldurmak istiyor ancak düzeni kullanmak istemiyorsanız , bileşenin stilinde yüzde değerlerini kullanabilirsiniz . Esnek boyutlara benzer şekilde, yüzde boyutları tanımlı bir boyuta sahip üst öğe gerektirir.flex
![Yüzde](https://user-images.githubusercontent.com/99039655/201411036-30793d0b-a3dd-4ca6-bfd7-9bc96dfd29f9.png)

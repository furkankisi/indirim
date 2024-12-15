const urunler = [
    { isim: "Ekmek", fiyat: 10 },
    { isim: "Süt", fiyat: 15 },
    { isim: "Peynir", fiyat: 50 },
    { isim: "Yumurta", fiyat: 30 },
    { isim: "Zeytin", fiyat: 40 }
  ];
  
 
  const indirimOrani = prompt("Lütfen indirim oranını yüzde olarak giriniz : ");
  
 
  const indirimliUrunler = urunler.map(urun => {
    const indirimliFiyat = urun.fiyat - (urun.fiyat * (indirimOrani / 100));
    return {
      isim: urun.isim,
      eskiFiyat: urun.fiyat,
      indirimliFiyat: indirimliFiyat
    };
  });
  

  console.log("İndirimli Ürünler:");
  indirimliUrunler.forEach(urun => {
    console.log(`${urun.isim}: Eski Fiyat - ${urun.eskiFiyat} TL, İndirimli Fiyat - ${urun.indirimliFiyat} TL`);
  });
  
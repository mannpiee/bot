var alreadyConnected = false;

client.on('qr', async(qr) =>{
  console.log('Scan Qr Di Atas')
  await f.delay(7000)
  });

client.on('connecting', (anu,ena) => { 
if (alreadyConnected) {
f.animate.add('Connecting',{text:'Menghubungkan Ulang Ke Koneksi '+client.user.name});
} else {
f.animate.add('Connecting',{text:'Menghubungkan Ke Koneksi....'});
}
});

client.on('open', () => {
alreadyConnected = true
f.animate.succeed('Connecting',{text: 'Sukses Terhubung Ke '+client.user.name});
bot.session = client.base64EncodedAuthInfo();
f.fs.writeFileSync('./src/json/bot.json',JSON.stringify(bot,null,2));
});

client.on('close',({isReconnecting,reason}) => {
isReconnecting?console.log(f.logColor(`✖ Koneksi Terputus, Mencoba Mengubungkan Ulang Ke `+client.user.name,'red')):console.log(f.logColor(`✖ Koneksi Terputus, Menutup Koneksi`,'red')) && process.send('close')
})

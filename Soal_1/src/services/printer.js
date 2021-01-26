function print(req, res) {
  let shopname = req.body.shopname
  let date = req.body.date
  let cashier = req.body.cashier
  let products = req.body.products
  let str = ''
  let max = 30
  let total = 0

  // menentukan jumlah spasi di depan n belakang nama toko
  let shopnameSpan = Math.round((max - shopname.length) / 2)
  if(shopnameSpan > 0)
    shopnameSpan = (new Array(shopnameSpan+1)).join("-")
  else
    shopnameSpan = ''

  str += shopnameSpan+shopname+shopnameSpan+'\n'
  str += "Tanggal\xA0:\xA0\xA0"+date+'\n'

  // menentukan spasi diantara string nama kasir dan input nama kasir
  let casherSpan = 18 - cashier.length
  if( casherSpan > 0 )
    str += 'Nama Kasir :'+ Array(casherSpan).fill('\xa0').join('') +cashier+'\n'
  else
    str += 'Nama Kasir :'+cashier+'\n'
  
  str += '=============================='+'\n'

  // iterasi produk
  for (var i = 0; i < products.length; i++) {
    // number format 
    let price = products[i].price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    // menentukan jumlah titik diantara nama produk dan harga
    let productSpan = max - 2 - products[i].name.length - price.length
    // menghitung total
    total += parseInt(products[i].price)
    str += products[i].name + (new Array(productSpan+1)).join(".") + 'Rp' + price +'\n'
  }

  // number format
  total = total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  // mementukan jumlah titik diantara total dan nominal total
  let totalSpan = max - 7 - total.length

  str += "\xA0\xA0\xA0\n"
  str += 'Total' + (new Array(totalSpan+1)).join(".") + 'Rp' + total

  // return text
  return res.send(str)
}

module.exports = {
  print: print
};

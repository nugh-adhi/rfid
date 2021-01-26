###Soal No 5 Soal cerita

####Run file js

`$ node app.js`

####POST DATA

```
{
    "shopname": "Warung Makan Sederhana",
    "date": "20/12/2020 15:30:00",
    "cashier": "John Doe",
    "products": [
        {
            "name": "Nasi",
            "price": 5000
        },
        {
            "name": "Lauk",
            "price": 10000
        },
        {
            "name": "Minum",
            "price": 5000
        }
    ]
}

```

####CONTOH OUTPUT

```
----Warung Makan Sederhana----
Tanggal :  20/12/2020 15:30:00
Nama Kasir :          John Doe
==============================
Nasi...................Rp5,000
Lauk..................Rp10,000
Minum..................Rp5,000
   
Total.................Rp20,000

```
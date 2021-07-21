let pembeli = document.getElementById("buyer");
let belanjaan = document.getElementById("products");
document.getElementById("details").addEventListener("click", function () {
    alert('Terima kasih ' +  pembeli.value + " " + 'telah membeli produk ' +  belanjaan.value);
})   

function setup() {
  createCanvas(400, 400);
  background(255);

  // Menggunakan for loop untuk menggambar garis vertikal
  for (let x = 20; x < width; x += 20) {
    stroke(0);
    line(x, 0, x, height); // Garis vertikal dari atas ke bawah
  }
}

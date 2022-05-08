var images, numbers;

images = [
  "https://i1.sndcdn.com/avatars-000754019632-3ewkg8-t500x500.jpg",
  "http://www.wallpapername.com/thumbnails/detail/20121101/shakira%201451x2000%20wallpaper_www.wallpapername.com_37.jpg",
  "https://cdns-images.dzcdn.net/images/artist/69c569506a8ff6ab0edfecbd1adf94b0/500x500.jpg"
];
numbers = [1, 2, 3];
let element_number = document.getElementById("number");
element_number.innerText = numbers[0];
let element_images = document.getElementById("images");
element_images.setAttribute("src", images[0]);

document.getElementById("next").addEventListener("click", (event) => {
  numbers.push(numbers.shift());
  images.push(images.shift());
  let element_number2 = document.getElementById("number");
  element_number2.innerText = numbers[0];
  let element_images2 = document.getElementById("images");
  element_images2.setAttribute("src", images[0]);
});

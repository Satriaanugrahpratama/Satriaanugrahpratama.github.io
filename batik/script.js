// Slider Otomatis + Navigasi
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");

  let currentIndex = 0;
  let slideInterval;

  // Buat tombol navigasi
  prevBtn.innerHTML = "&#10094;"; // panah kiri
  nextBtn.innerHTML = "&#10095;"; // panah kanan
  prevBtn.className = "absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition";
  nextBtn.className = "absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition";

  slider.parentElement.appendChild(prevBtn);
  slider.parentElement.appendChild(nextBtn);

  // Fungsi tampil slide
  function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Auto Slide
  function startSlide() {
    slideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 4000);
  }

  function stopSlide() {
    clearInterval(slideInterval);
  }

  // Event tombol
  prevBtn.addEventListener("click", () => {
    stopSlide();
    showSlide(currentIndex - 1);
    startSlide();
  });
  nextBtn.addEventListener("click", () => {
    stopSlide();
    showSlide(currentIndex + 1);
    startSlide();
  });

  // Hover pause
  slider.addEventListener("mouseenter", stopSlide);
  slider.addEventListener("mouseleave", startSlide);

  // Inisialisasi
  showSlide(currentIndex);
  startSlide();
});

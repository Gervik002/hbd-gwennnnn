document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const cakeSection = document.getElementById('cakeSection');
    const cake = document.getElementById('cake');
    const cakeGifOverlay = document.getElementById('cakeGifOverlay');
    const cakeSurpriseImg = document.getElementById('cakeSurpriseImg');

    // --- Logika Amplop (SAMA DENGAN ASLI) ---
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('open');
        
        if(envelope.classList.contains('open')) {
            console.log("Surat dibuka!");
            
            // --- Logika Baru saat Amplop Buka ---
            // 1. Tambahkan class ke body untuk memicu scroll dan animasi kue
            document.body.classList.add('show-cake');
            
            // 2. Halus: Ganti instruksi amplop
            const envelopeInst = envelope.querySelector('.instruction');
            envelopeInst.innerText = "Scroll ke bawah yaaa 👇";
            envelopeInst.style.opacity = "1"; // Pastikan kelihatan
            
        } else {
            // Jika user menutup amplop (opsional)
            document.body.classList.remove('show-cake');
            const envelopeInst = envelope.querySelector('.instruction');
            envelopeInst.innerText = "Klik dpe amplop bos ✨";
        }
    });

    // --- Logika Baru saat Kue Di-klik ---
    cake.addEventListener('click', () => {
        // TARUH LINK GIF KEJUTANMU DI SINI
        const linkGifKejutan = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTV2Nm1va2Z5ZTh0cWJkY2NoZnpmYmN3cmUzdGxhMmpxOTlxZ3Z2YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KbsIGSDcUSfMk/giphy.gif"; 

        // Set sumber gambar dan tampilkan overlay
        cakeSurpriseImg.src = linkGifKejutan;
        cakeGifOverlay.classList.add('show');
        
        console.log("Kue diketok! Surprise!");

        // Opsional: Matikan lilin
        const flame = cake.querySelector('.flame');
        if(flame) flame.style.display = 'none';

        // Opsional: Sembunyikan GIF setelah beberapa detik jika ingin bisa di-klik lagi
        /*
        setTimeout(() => {
            cakeGifOverlay.classList.remove('show');
        }, 5000);
        */
    });

    // Opsional: Klik di overlay GIF untuk menutupnya kembali
    cakeGifOverlay.addEventListener('click', (e) => {
        // Cegah klik pada gambar itu sendiri menutup overlay (jika ingin)
        if (e.target !== cakeSurpriseImg) {
            cakeGifOverlay.classList.remove('show');
        }
    });
});
document.getElementById('nameTitle').addEventListener('dblclick', function() {
            const newName = prompt("Nama dia siapa?", "Someone");
            if (newName) {
                this.textContent = `Untuk ${newName}`;
            }
        });
        
        function ubahUcapan() {
            const newUcapan = prompt("Apa nak cakap?", "Terima kasih sebab selalu ada.");
            if (newUcapan) {
                document.getElementById('reasonText').innerHTML = newUcapan;
            }
        }
        
        const card = document.querySelector('.card');
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
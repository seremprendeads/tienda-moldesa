// Esperar a que los elementos estén disponibles
document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightbox-modal');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    // Close Lightbox when clicking on X
    if (closeLightbox) {
        closeLightbox.addEventListener('click', () => {
            if (lightboxModal) {
                lightboxModal.style.display = 'none';
            }
        });
    }

    // Close Lightbox when clicking outside the image
    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.style.display = 'none';
            }
        });
    }

    // Close Lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.style.display === 'flex') {
            lightboxModal.style.display = 'none';
        }
    });
});

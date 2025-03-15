// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightbox-modal');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    if (closeLightbox && lightboxModal) {
        // Close Lightbox when clicking on X
        closeLightbox.addEventListener('click', () => {
            lightboxModal.style.display = 'none';
        });

        // Close Lightbox when clicking outside the image
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.style.display = 'none';
            }
        });

        // Close Lightbox with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxModal.style.display === 'flex') {
                lightboxModal.style.display = 'none';
            }
        });
    }
});

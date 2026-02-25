const portfolioLightbox = document.getElementById('portfolio-lightbox');
const lightboxImage = document.getElementById('portfolio-lightbox-image');
const lightboxCaption = document.getElementById('portfolio-lightbox-caption');
const closeButton = document.querySelector('.portfolio-lightbox-close');
const prevButton = document.querySelector('.portfolio-lightbox-prev');
const nextButton = document.querySelector('.portfolio-lightbox-next');
const imageLinks = Array.from(document.querySelectorAll('.portfolio-image-link'));

if (portfolioLightbox && lightboxImage && lightboxCaption && imageLinks.length > 0) {
  let activeIndex = 0;

  function getImageData(index) {
    const link = imageLinks[index];
    const image = link.querySelector('img');
    const captionNode = link.querySelector('strong');
    return {
      src: link.getAttribute('href') || '',
      alt: image ? image.getAttribute('alt') || '' : '',
      caption: captionNode ? captionNode.textContent || '' : ''
    };
  }

  function openLightbox(index) {
    activeIndex = index;
    const imageData = getImageData(activeIndex);
    lightboxImage.src = imageData.src;
    lightboxImage.alt = imageData.alt;
    lightboxCaption.textContent = imageData.caption;
    portfolioLightbox.classList.add('is-open');
    portfolioLightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    portfolioLightbox.classList.remove('is-open');
    portfolioLightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    document.body.style.overflow = '';
  }

  function showPrevious() {
    activeIndex = (activeIndex - 1 + imageLinks.length) % imageLinks.length;
    openLightbox(activeIndex);
  }

  function showNext() {
    activeIndex = (activeIndex + 1) % imageLinks.length;
    openLightbox(activeIndex);
  }

  imageLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      openLightbox(index);
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  prevButton.addEventListener('click', showPrevious);
  nextButton.addEventListener('click', showNext);

  portfolioLightbox.addEventListener('click', (event) => {
    if (event.target === portfolioLightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!portfolioLightbox.classList.contains('is-open')) {
      return;
    }

    if (event.key === 'Escape') {
      closeLightbox();
    }

    if (event.key === 'ArrowLeft') {
      showPrevious();
    }

    if (event.key === 'ArrowRight') {
      showNext();
    }
  });
}

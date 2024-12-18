const headings = document.querySelectorAll('.section-title');
const contentHeading = document.querySelector('.about__content-wrapper').querySelector('h2');

const updateContentHeadingsShadow = () => {
  contentHeading.setAttribute('data-shadow', contentHeading.textContent);
};


export const updateHeadingsShadow = () => {
  updateContentHeadingsShadow();
  headings.forEach((heading) => {
    heading.setAttribute('data-shadow', heading.textContent);
  });
};

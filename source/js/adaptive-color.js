const STARTING_NUMBER = 0;
const RGBA_CHANNELS = 4;

export const analyzeImageColor = (image) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, STARTING_NUMBER, STARTING_NUMBER, canvas.width, canvas.height);

  const imageData = ctx.getImageData(STARTING_NUMBER, STARTING_NUMBER, canvas.width, canvas.height);
  const pixels = imageData.data;

  let r = STARTING_NUMBER, g = STARTING_NUMBER, b = STARTING_NUMBER;

  for (let i = 0; i < pixels.length; i += RGBA_CHANNELS) {
    r += pixels[i];
    g += pixels[i + 1];
    b += pixels[i + 2];
  }

  const pixelCount = pixels.length / RGBA_CHANNELS;
  r = Math.floor(r / pixelCount);
  g = Math.floor(g / pixelCount);
  b = Math.floor(b / pixelCount);

  return `rgb(${r}, ${g}, ${b})`;
};

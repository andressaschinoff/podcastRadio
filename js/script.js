let inputFrequency = null;
let inputRange = null;
let divContent = null;

window.addEventListener('load', () => {
  inputFrequency = document.querySelector('#inputFrequency');
  inputRange = document.querySelector('#inputRange');
  divContent = document.querySelector('#divContent');

  inputRange.addEventListener('input', handleRangeChange);
});

function handleRangeChange(event) {
  const frequencyValue = event.target.value;
  inputFrequency.value = frequencyValue;

  renderPodcast(frequencyValue);
}

function renderPodcast(frequencyValue) {
  const foundPodcast = realPodcasts.find(
    (podcast) => podcast.id === frequencyValue
  );

  if (!foundPodcast) {
    divContent.textContent = 'Nenhum podcast encontrado!';
  } else {
    divContent.innerHTML = `
      <img src='./img/${foundPodcast.img}' >
      <h2>${foundPodcast.title}</h2>
      <p>${foundPodcast.description}</p>
      `;
  }
}

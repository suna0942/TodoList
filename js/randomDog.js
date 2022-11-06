const dogRandomBtn = document.querySelector("#dogBtn");
dogRandomBtn.addEventListener('click', async () => {
  const {data} = await axios('https://dog.ceo/api/breeds/image/random');
  const img = await loadDogImg(data);
  img.remove();
});

const loadDogImg = (data) => {
  return new Promise((resolve) => {
    const {message, status} = data;
      if(status === 'success'){
        const img = document.createElement('img');
        img.src = message;
        img.onload = () => {
          setTimeout(() => {
            resolve(img);
          }, 3000);
        }
        const wrapper = document.querySelector('.dog');
        wrapper.innerHTML = '';
        wrapper.append(img);
      }
  });
};
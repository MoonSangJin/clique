export const scrollTo = () => {
  console.log('scroll called');
  window.scrollTo({
    top: 30,
    behavior: 'smooth',
  });
};

export const getNewModal = () => {
  // Todo(maitracle): modal 안쪽의 scroll To button이 동작하지 않는다.
  let script = document.createElement('script');
  script.innerHTML = `
    function scrollTo() {
      console.log('scroll called');
      window.scrollTo({
        top: 30,
        behavior: 'smooth',
      });
    }
  `;
  let div = document.createElement('div');
  div.innerHTML = `
    <div style="padding: 20px; border: solid 1px black; position: fixed; top: 0; z-index: 99999; background: white;">
      This page is saved at Clique.\n do you want to scroll to saved position?
      <button onclick="scrollTo()">button!!</button>
    </div>`;

  return div;
};


export const hideModal = (modal) => {
  modal.style.display = 'none';
};

export const showModal = (modal) => {
  modal.style.display = 'block';
};

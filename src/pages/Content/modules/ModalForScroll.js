export const scrollTo = (top) => {
  return `
  window.scrollTo({
    top: ${top},
    behavior: 'smooth',
  });
  document.getElementById('clique-modal').style.display = 'none';
  `;
};

export const getNewModal = (topPositionToScroll) => {
  let div = document.createElement('div');
  div.innerHTML = `
    <div id="clique-modal" style="padding: 20px; border: solid 1px black; position: fixed; top: 0; z-index: 99999; background: white;">
      This page is saved at Clique.\n do you want to scroll to saved position?
      <button onclick="${scrollTo(topPositionToScroll)}">button!!</button>
    </div>`;

  return div;
};

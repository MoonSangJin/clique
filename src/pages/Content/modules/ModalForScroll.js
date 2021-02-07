export const scrollTo = (top) => {
  return `
  window.scrollTo({
    top: ${top},
    behavior: 'smooth',
  });
  document.getElementById('clique-modal').style.display = 'none';
  `;
};

export const closeModal = () => {
  return `
  document.getElementById('clique-modal').style.display = 'none';
  `;
};

export const getNewModal = (topPositionToScroll) => {
  let div = document.createElement('div');
  div.innerHTML = `
    <div id="clique-modal"
      style="padding: 27px 32px; border-radius: 8px; box-shadow: 0 0 30px rgba(0, 0, 0, 0.8); position: fixed; top: 20px; left: 50%; margin-left: -185px; z-index: 99999; background: white;"
    >
      Do you want to go back to the scroll position you saved?
      <div style="margin-top: 40px; width: 152px; margin-left: auto;">
        <button
          style="
            width: 72px; height: 33px; border: 1px solid #7785FF; background-color: white; border-radius: 3px;
            font-weight: bold; font-size: 10px; line-height: 15px; letter-spacing: -0.02em; color: #7785FF;"
          onclick="${closeModal()}"
        >
          No
        </button>
        <button
          style="
            width: 72px; height: 33px; border: 1px solid #7785FF; background-color: #7785FF; border-radius: 3px;
            font-weight: bold; font-size: 10px; line-height: 15px; letter-spacing: -0.02em; color: white;"
          onclick="${scrollTo(topPositionToScroll)}"
        >
          Yes
        </button>
      </div>
    </div>`;

  return div;
};

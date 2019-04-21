window.onload = () => {
  const portfolio = document.getElementById('portfolio');
  const accordion = document.getElementsByClassName('accordion')[0];
  let isActive = false;
  console.log('portfolio');

  portfolio.addEventListener('click', togglePortfolio, false);

  function togglePortfolio() {
    console.log('click');
    isActive = !isActive;
    // accordion.setAttribute("style", "display:block");

    isActive ? accordion.setAttribute("style", "display:block") : accordion.setAttribute("style", "display:none");
  }
}
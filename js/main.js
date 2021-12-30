
const shareClose = document.getElementById("share-close");
const shareOpen = document.getElementById("share-open");
const menu = document.getElementById("media-container");

shareClose.addEventListener('click', () => {
  menu.classList.toggle('visible');
});
shareOpen.addEventListener('click', () => {
  menu.classList.remove('visible');
})
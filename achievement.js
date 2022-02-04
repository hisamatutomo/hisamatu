{
  const open = document.getElementById("open1");
  const close = document.getElementById("close1");
  const modal = document.getElementById("modal1");
  const mask = document.getElementById("mask1");

  open.addEventListener("click", function () {
    modal.classList.remove("hidden1");
    mask.classList.remove("hidden1");
  });
  close.addEventListener("click", function () {
    modal.classList.add("hidden1");
    mask.classList.add("hidden1");
  });
  mask.addEventListener("click", function () {
    modal.classList.add("hidden1");
    mask.classList.add("hidden1");
  });
}
{
  const open = document.getElementById("open2");
  const close = document.getElementById("close2");
  const modal = document.getElementById("modal2");
  const mask = document.getElementById("mask2");

  open.addEventListener("click", function () {
    modal.classList.remove("hidden2");
    mask.classList.remove("hidden2");
  });
  close.addEventListener("click", function () {
    modal.classList.add("hidden2");
    mask.classList.add("hidden2");
  });
  mask.addEventListener("click", function () {
    modal.classList.add("hidden2");
    mask.classList.add("hidden2");
  });
}

function togglemode() {
  const html = document.documentElement
  html.classList.toggle(
    "light"
  ) /* o toggle faz a msm funçao dos codigos abaixo*/

  //if (html.classList.contains("light"))
  // html.classList.remove("light")
  //} else {
  //html.classList.add("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatarlight.png")
  } else {
    //se tiver sem ligh mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}

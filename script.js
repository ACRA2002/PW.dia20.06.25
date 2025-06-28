function mudarCor() {
  const cores = ["#8B4500", "#8B0A50", "#8B008B", "#008B00", "#8B814C", "#8B6914", "#8B3A3A", "#5D478B", "#8B7B8B", "#8B3A3A"];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;
}




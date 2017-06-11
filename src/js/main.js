export function startApp(aScene) {
  const container = document.getElementById('container');
  container.innerHTML = aScene({});
}

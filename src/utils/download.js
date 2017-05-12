export function downloadFile(url, fileName) {
  // emulates trigger of download creating a link in memory and clicking on it
  const a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

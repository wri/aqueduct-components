export function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  const byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i += 1) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  return new Blob([ab], { type: mimeString });
}

export function saveAsFile(obj, type, fileName) {
  const dataToBlob = dataURItoBlob(obj, type);
  const url = window.URL.createObjectURL(dataToBlob);
  // emulates trigger of download creating a link in memory and clicking on it
  const a = document.createElement('a');
  a.href = url;
  a.style.display = 'none';
  a.download = fileName;
  document.body.appendChild(a);
  a.click();

  // releases the existing object URL once we are not going to use it any longer.
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

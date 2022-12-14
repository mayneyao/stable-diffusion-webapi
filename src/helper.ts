// export const b64Image2Blob = (b64Data: string, contentType: string = "image/png", sliceSize: number = 512) => {
//   const byteCharacters = atob(b64Data);
//   const byteArrays = [];
//   for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//     const slice = byteCharacters.slice(offset, offset + sliceSize);
//     const byteNumbers = new Array(slice.length);
//     for (let i = 0; i < slice.length; i++) {
//       byteNumbers[i] = slice.charCodeAt(i);
//     }
//     const byteArray = new Uint8Array(byteNumbers);
//     byteArrays.push(byteArray);
//   }
//   return new Blob(byteArrays, { type: contentType });
// }
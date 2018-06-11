export let findData = (source, id, callback) => {
    if (source && source.length) {
        for (let item of source) {
            if (item.icon_id === id) {
                callback(item);
                return;
            } else if (item.child && item.child.length) {
                findData(item.child, id, callback);
            }
        }
    }
}

export const b64toFile = (b64Data, contentType, fileName, sliceSize) => {
    contentType = contentType || '';
    fileName = fileName || new Date() * 1 + Math.random();
    sliceSize = sliceSize || 512;
    let byteCharacters = atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);

        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        let byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    return new File(byteArrays, fileName, { type: contentType });
};

// Generate Image

export const createBackgroundImage = (img, color) => {
    return generateBackgroundImage(img, 200, 50, false, color);
};

export const createRoundBackroundImage = (img, imageSize, iconSize, isRound, color) => {
    return generateBackgroundImage(img, imageSize, iconSize, isRound = true, color);
};

export const createRoundCornerBackroundImage = (img, imageSize, iconSize, color, Corner) => {
    return generateBackgroundImage(img, imageSize, iconSize, true, color, Corner);
};

// Drawing

/* 生成白底图，将图片的颜色强制设为白底，忽略 alpha 通道 */
export const generateTransparentWhiteImage = img => {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var context = canvas.getContext('2d');

    context.drawImage(img, 0, 0, canvas.width, canvas.height);

    var pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    var pixeldata = pixels.data;
    for (var i = 0, len = pixeldata.length; i < len; i += 4) {
        pixels.data[i] = 255;
        pixels.data[i + 1] = 255;
        pixels.data[i + 2] = 255;
    }

    context.putImageData(pixels, 0, 0);
    return canvas.toDataURL('image/png');
}

/* 生成指定背景色、指定大小的圆形、圆角矩形、矩形图 */
function generateBackgroundImage (img, imageSize, iconSize, isRound, backgroundColor, radius) {
    var canvas = document.createElement('canvas');
    canvas.width = imageSize;
    canvas.height = imageSize;

    var context = canvas.getContext('2d');

    context.fillStyle = backgroundColor;

    if (radius) {
        context.beginPath();

        context.moveTo(radius, 0);
        context.arcTo(canvas.width, 0, canvas.width, canvas.height, radius);
        context.arcTo(canvas.width, canvas.height, 0, canvas.height, radius);
        context.arcTo(0, canvas.height, 0, 0, radius);
        context.arcTo(0, 0, canvas.width, 0, radius);

        context.closePath();
        context.fill();
    } else if (isRound) {
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var r = Math.min(centerX, centerY);

        context.beginPath();
        context.arc(centerX, centerY, r, 0, 2 * Math.PI, false);
        context.closePath();
        context.fill();
    } else {
        context.fillRect(0, 0, canvas.width, canvas.height);
    }

    context.drawImage(img, (imageSize - iconSize) / 2, (imageSize - iconSize) / 2, iconSize, iconSize);

    return canvas.toDataURL('image/png');
}

/* 生成#747474颜色的icon */
export const generate747474Image = img => {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var context = canvas.getContext('2d');

    context.drawImage(img, 0, 0, canvas.width, canvas.height);

    var pixels = context.getImageData(0, 0, canvas.width, canvas.height);
    var pixeldata = pixels.data;
    for (var i = 0, len = pixeldata.length; i < len; i += 4) {
        pixels.data[i] = 74;
        pixels.data[i + 1] = 74;
        pixels.data[i + 2] = 74;
    }
    context.putImageData(pixels, 0, 0);
    return canvas.toDataURL('image/png');
}

export const generateThumbImage = (img, w, h) => {
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
}

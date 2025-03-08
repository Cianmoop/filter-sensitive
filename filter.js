const fs = require('fs');

// filter txt sensitive stop words
function filter(file, content) {
    // Read the file and get the sensitive words
    const sensitiveWords = fs.readFileSync(file, 'utf-8').split(',');

    // Find the sensitive words in the content
    const foundWords = sensitiveWords.filter(word => content.includes(word.trim()));

    return foundWords;
}

// 循环过滤
function filter_loop(path, content) {
    // 读取路径下所有文件
    const files = fs.readdirSync(path);

    let allFoundWords = new Set();

    // 遍历每个文件
    for (const file of files) {
        const filePath = `${path}/${file}`;
        const foundWords = filter(filePath, content);
        foundWords.forEach(word => {
            allFoundWords.add(word);
        });
        if (allFoundWords.size > 5) {
            break;
        }
    }

    return Array.from(allFoundWords);
}

// Export the filter function
module.exports = filter_loop;

// const arr = filter_loop('./stop_words', '你是不是傻逼，天天和你他妈的神经一样，操你妈的，和个妓女一样，fuck you bitch');

// console.log('您的内容含有如下等违禁词', arr);

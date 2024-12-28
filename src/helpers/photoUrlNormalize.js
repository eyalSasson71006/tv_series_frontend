
const photoUrlNormalize = (url) => {
    if (!url) return null;
    const regex = /^https:\/\//;
    if (regex.test(url)) {
        return url;
    } else {
        return "http://localhost:8181/" + url;
    }
};

export default photoUrlNormalize;
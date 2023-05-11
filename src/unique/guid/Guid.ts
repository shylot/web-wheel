const get = () => {
    return (g() + g() + "-" + g() + "-" + g() + "-" + g() + "-" + g() + g() + g());
}

const g = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}


export default {
    get
}

export const isNumber = (val) => {
    let reg = /^[0-9]*$/;
    return  reg.test(val)
};
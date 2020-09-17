/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

function indexOf(haystack, needle) {
    // return 0 if needle is emptry string
    if (needle === "") return 0;
    // check if haystack is shorter than needle
    if (needle.length > haystack.length) return -1;
    
    // let's look for the needle in haystack
    for (let i = 0; i <= haystack.length-needle.length; i++) {
      if (haystack.slice(i, i+needle.length) === needle) return i;
      console.log (haystack.slice(i, i+needle.length));
    };
    // if no needle found return -1
    return -1;
};

console.log(indexOf("mississippi", "pi"));

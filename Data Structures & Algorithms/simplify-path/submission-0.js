class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
    let stack = [];
    let parts = path.split('/');

    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        
        if (part === '' || part === '.') {
            continue;
        } else if (part === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(part);
        }
    }

    return '/' + stack.join('/');
}
 }


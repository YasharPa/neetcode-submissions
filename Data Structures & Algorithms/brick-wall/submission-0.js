class Solution {
    /**
     * @param {number[][]} wall
     * @return {number}
     */
    leastBricks(wall) {
        let  myMap = new Map();
        let maxJoint = 0;
        for(let i = 0; i < wall.length; i++){
            let counter = 0;
            for(let j = 0; j < wall[i].length - 1; j++){
                counter += wall[i][j];
                if(myMap.has(counter)){
                    myMap.set(counter, myMap.get(counter) + 1);
                }else{
                    myMap.set(counter, 1);
                }
            }
        }

        myMap.forEach((val, key) =>{
            if(val > maxJoint){
                maxJoint = val
            }
        })
        return wall.length - maxJoint;
    }
}
// 0123456789101112
// 0100100100101
//      |  
// 000101001
//      |
// 010001001
//      |
// 00100001
//      |
// 000101001
//      |
// 0100010101

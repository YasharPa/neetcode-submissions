class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if(position.length === 0) return 0;
        let fleetCounter = 1;
        let cars = [];

        for(let i = 0; i < position.length; i++) {
           let time = (target - position[i]) / speed[i];
            cars.push({ pos: position[i], time: time });
        }

        cars.sort((a, b) => b.pos - a.pos);
        let currentFleetTime = cars[0].time;

        for(let i = 1; i< position.length;i++){
          if (cars[i].time > currentFleetTime) {
            fleetCounter++;
            currentFleetTime = cars[i].time; // מעדכנים את הזמן של הצי החדש
        }   
        }

        return fleetCounter;
    }
}

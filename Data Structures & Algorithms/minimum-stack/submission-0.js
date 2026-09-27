class MinStack {
    constructor() {
        this.head = null;

    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
       if(this.head === null){
            let newNode = {
                number: val,
                next: this.head,
                minNumer: val
            }
            this.head = newNode;
        }else{
            let newNode = {
                number: val,
                next: this.head,
                minNumer: Math.min(this.getMin(),val)
            }
            this.head = newNode;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.head = this.head.next;
        return null;    
    }


    /**
     * @return {number}
     */
    top() {
        return this.head.number;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.head.minNumer;
    }
}

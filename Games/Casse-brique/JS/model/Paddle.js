class Paddle {
    constructor(left) {
        this.left_ = left;
    }

    getLeft() {
        return this.left_;
    }

    moveTo(val) {
        if (val >= -50 && val <= 900) {
            this.left_ = val;
        }
    }
}

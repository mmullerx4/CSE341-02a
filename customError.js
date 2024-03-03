//file for custom error as chatGPt recommended
class YourClientErrorType extends Error {
    constructor(message) {
        super(message);
        this.name = 'YourClientErrorType';
    }
}

module.exports = YourClientErrorType;
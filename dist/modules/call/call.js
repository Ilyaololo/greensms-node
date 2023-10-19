import { V1_0 } from './v1.x';
export class Call {
    client;
    _v1;
    constructor(client) {
        this.client = client;
    }
    get v1() {
        return this._v1 ?? (this._v1 = new V1_0(this.client));
    }
}
//# sourceMappingURL=call.js.map
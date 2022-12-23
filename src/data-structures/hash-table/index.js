// @flow

export class HashTable {
  keyMap: Array<any>;
  constructor (size: number = 61) {
    this.keyMap = new Array(size);
  }

  _hash (key: string): number {
    let total = 0;
    const RANDOM_PRIME = 61;
    for (let char = 0; char < Math.min(key.length, 100); char++) {
      const value = key[char].charCodeAt(0) - 96;
      total = (RANDOM_PRIME + total + value) % this.keyMap.length;
    }
    return total;
  }

  _get (key: string): ?Array<any> {
    const hashValue = this._hash(key);
    const storedValues = this.keyMap[hashValue];
    if (storedValues) {
      for (let i = 0; i < storedValues.length; i++) {
        if (key === storedValues[i][0]) return storedValues[i][1];
      }
    }
    return undefined;
  }

  _set (key: string, value: any): null {
    const hashValue = this._hash(key);
    if (!this.keyMap[hashValue]) {
      this.keyMap[hashValue] = [];
    }
    this.keyMap[hashValue].push([ key, value ]);
    return null;
  }
}

export default HashTable;

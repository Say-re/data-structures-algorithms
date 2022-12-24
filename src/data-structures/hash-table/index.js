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

  _getValue (value: Array<any>, index: number, type: string): ?string {
    let returnValue;
    if (value[index]) {
      switch (type) {
        case 'value':
          [ , returnValue ] = value[index];
          break;
        case 'key':
        default:
          [returnValue] = value[index];
          break;
      }
    }
    return returnValue;
  }

  _iterateThroughHash (value: Array<any>, type: string): ?Array<?any> {
    const values = [];
    let returnValue;
    for (let i = 0; i < value.length; i++) {
      if (value[i] && Array.isArray(value[i]) && Array.isArray(value[i][0])) {
        for (let j = 0; j < value[i].length; j++) {
          returnValue = this._getValue(value[i], j, type);
          if (returnValue && (type === 'keys' && !values.includes(returnValue))) values.push(returnValue);
        }
        returnValue = null;
      } else {
        returnValue = this._getValue(value, i, type);
      }

      if (returnValue && (type === 'keys' && !values.includes(returnValue))) values.push(returnValue);
    }
    return values;
  }

  _keys (): ?Array<?string> {
    return this._iterateThroughHash(this.keyMap, 'keys');
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

  _values (): ?Array<?string> {
    return this._iterateThroughHash(this.keyMap, 'value');
  }
}

export default HashTable;

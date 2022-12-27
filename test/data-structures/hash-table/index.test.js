import { HashTable } from '../../../src/data-structures/hash-table';

describe('src/data-structures/hash-table/index.js', () => {
  it('Verifies consistent response from the hashing function. One input should always give one output.', () => {
    const sampleHashTable = new HashTable();
    const response1 = sampleHashTable._hash('Climate change - 30 x 30');
    const response2 = sampleHashTable._hash('Climate change - 30 x 30');
    const response3 = sampleHashTable._hash('California CERC report');
    const response4 = sampleHashTable._hash('California CERC report');

    expect(response1)
      .toEqual(response2);
    expect(response3)
      .toEqual(response4);
  });
  it('Verifies functionality of set method for HashTable instances', () => {
    const sampleHashTable = new HashTable(6);
    sampleHashTable._set('blueCarbon', 'Important notes regatding the state of blue carbon research.');

    expect(sampleHashTable.keyMap)
      // eslint-disable-next-line no-sparse-arrays
      .toEqual([ , , , , , [[ 'blueCarbon', 'Important notes regatding the state of blue carbon research.' ]]]);

    sampleHashTable._set('blueCarbon', 'Another note on COP 2022 meetings');
    expect(sampleHashTable.keyMap[5]).toEqual([
      [ 'blueCarbon', 'Important notes regatding the state of blue carbon research.' ],
      [ 'blueCarbon', 'Another note on COP 2022 meetings' ]]);
  });
  it('Verifies functionality of get method for HashTable instances', () => {
    const sampleHashTable = new HashTable(10);
    sampleHashTable._set('blueCarbon', 'Some notes on Blue Carbon');
    sampleHashTable._set('climateChange', 'Additional Notes on climate');

    let response = sampleHashTable._get('blueCarbon');
    expect(response)
      .toEqual('Some notes on Blue Carbon');
    response = sampleHashTable._get('climateChange');
    expect(response)
      .toEqual('Additional Notes on climate');
    response = sampleHashTable._get('unrecognizedValue');
    expect(response)
      .toEqual(undefined);
  });
  it('Verifies functionality of keys method, which retreives all keys in the HashTable instance', () => {
    const sampleHashTable = new HashTable(10);
    sampleHashTable._set('blueCarbon', 'Some notes on Blue Carbon!!');
    sampleHashTable._set('climateChange', 'Additional Notes on climate change');

    const keys = sampleHashTable._keys();
    expect(keys)
      .toEqual([ 'blueCarbon', 'climateChange' ]);
  });
  it('Verifies functionality of values method, which retreives all keys in the HashTable instance', () => {
    const sampleHashTable = new HashTable(10);
    sampleHashTable._set('blueCarbon', 'Some notes on Blue Carbon');
    sampleHashTable._set('climateChange', 'Additional Notes on climate');

    const keys = sampleHashTable._values();
    expect(keys)
      .toEqual([
        'Some notes on Blue Carbon',
        'Additional Notes on climate',
      ]);
  });
});

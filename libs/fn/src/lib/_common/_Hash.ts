import { hashClear } from './_hashClear';
import { hashDelete } from './_hashDelete';
import { hashGet } from './_hashGet';
import { hashHas } from './_hashHas';
import { hashSet } from './_hashSet';

/**
 * Creates a hash _object.
 *
 * constructor
 * @param entries The key-value pairs to cache.
 */
export function Hash(entries?: any[]): void {
  let index = -1;
  const length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    const entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
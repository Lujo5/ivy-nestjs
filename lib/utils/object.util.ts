export class ObjectUtil {
  static transfromKeysAndValues(
    object: any,
    newKey: (key: string, value: any, keyList?: string[]) => string = (key) => key,
    newValue: (key: string, value: any, keyList?: string[]) => any | { key: string; value: any }[] = (
      key,
      value
    ) => value,
    mergeKeyValue: (
      key: string,
      value: any,
      newKey: string,
      newValue: any,
      keyList?: string[]
    ) => { key: string; value: any; remove?: boolean } = (key, value, newKey, newValue) => ({
      key: newKey,
      value: newValue
    }),
    keyList: string[] = []
  ): any {
    if (!object || typeof object !== 'object' || Object.keys(object).length === 0) {
      return object;
    }

    const acc = {};

    for (const key of Object.keys(object)) {
      let val = object[key];

      if (val && typeof val === 'object') {
        keyList.push(key);
        if (!Array.isArray(val)) {
          val = this.transfromKeysAndValues(val, newKey, newValue, mergeKeyValue, keyList);
        } else {
          const items = [];
          for (let item of val) {
            items.push(this.transfromKeysAndValues(item, newKey, newValue, mergeKeyValue, keyList));
          }
          val = items;
        }
      }

      const newKeyResult = newKey(key, val);
      const newValueResult = newValue(key, val);

      if (newKeyResult) {
        if (Object.keys(acc).includes(newKeyResult)) {
          const {
            key: resolvedKey,
            value: resolvedValue,
            remove
          } = mergeKeyValue(key, acc[newKeyResult], newKeyResult, newValueResult);
          if (remove) {
            delete acc[newKeyResult];
          }
          acc[resolvedKey] = resolvedValue;
        } else {
          acc[newKeyResult] = newValueResult;
        }
      } else if (Array.isArray(newValueResult)) {
        let added = 0;
        for (const newResult of newValueResult) {
          if (!newResult.key || !newResult.value) {
            continue;
          }
          if (Object.keys(acc).includes(newResult.key)) {
            const {
              key: resolvedKey,
              value: resolvedValue,
              remove
            } = mergeKeyValue(key, acc[newResult.key], newResult.key, newResult.value, keyList);
            if (remove) {
              delete acc[newResult.key];
            }
            acc[resolvedKey] = resolvedValue;
          } else {
            acc[newResult.key] = newResult.value;
          }
          added++;
        }

        if (!added) {
          return newValueResult;
        }
      }

      keyList.pop();
    }

    return acc;
  }

  static async transfromKeysAndValuesAsync(
    object: any,
    newKey: (key: string, value: any, keyList?: string[]) => Promise<string> = async (key) => key,
    newValue: (
      key: string,
      value: any,
      keyList?: string[]
    ) => Promise<any | { key: string; value: any }[]> = async (key, value) => value,
    mergeKeyValue: (
      key: string,
      value: any,
      newKey: string,
      newValue: any,
      keyList?: string[]
    ) => Promise<{ key: string; value: any; remove?: boolean }> = async (key, value, newKey, newValue) => ({
      key: newKey,
      value: newValue
    }),
    keyList: string[] = []
  ): Promise<any> {
    if (!object || typeof object !== 'object' || Object.keys(object).length === 0) {
      return object;
    }

    const acc = {};

    for (const key of Object.keys(object)) {
      let val = object[key];

      if (val && typeof val === 'object') {
        keyList.push(key);
        if (!Array.isArray(val)) {
          val = await this.transfromKeysAndValuesAsync(val, newKey, newValue, mergeKeyValue, keyList);
        } else {
          const items = [];
          for (let item of val) {
            items.push(
              await this.transfromKeysAndValuesAsync(item, newKey, newValue, mergeKeyValue, keyList)
            );
          }
          val = items;
        }
      }

      const newKeyResult = await newKey(key, val, keyList);
      const newValueResult = await newValue(key, val, keyList);

      if (newKeyResult) {
        if (Object.keys(acc).includes(newKeyResult)) {
          const {
            key: resolvedKey,
            value: resolvedValue,
            remove
          } = await mergeKeyValue(key, acc[newKeyResult], newKeyResult, newValueResult, keyList);
          if (remove) {
            delete acc[newKeyResult];
          }
          acc[resolvedKey] = resolvedValue;
        } else {
          acc[newKeyResult] = newValueResult;
        }
      } else if (Array.isArray(newValueResult)) {
        let added = 0;
        for (const newResult of newValueResult) {
          if (!newResult.key || !newResult.value) {
            continue;
          }
          if (Object.keys(acc).includes(newResult.key)) {
            const {
              key: resolvedKey,
              value: resolvedValue,
              remove
            } = await mergeKeyValue(key, acc[newResult.key], newResult.key, newResult.value, keyList);
            if (remove) {
              delete acc[newResult.key];
            }
            acc[resolvedKey] = resolvedValue;
          } else {
            acc[newResult.key] = newResult.value;
          }
          added++;
        }

        if (!added) {
          return newValueResult;
        }
      }

      keyList.pop();
    }

    return acc;
  }
}

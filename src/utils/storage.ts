import AsyncStorage from '@react-native-async-storage/async-storage';

export async function save<T extends {}>(key: string, data: T): Promise<void> {
  const jsonValue = JSON.stringify(data);
  return await AsyncStorage.setItem(key, jsonValue);
}

export async function load<T extends {}>(key: string, defaultValue: T) {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }
  } catch (err) {
    // NOT HANDLE THE ERROR, RETURN VALUE
    return defaultValue;
  }
}

export async function remove(key: string): Promise<void> {
  try {
    return await AsyncStorage.setItem(key, '');
  } catch (err) {
    throw new Error(err);
  }
}

export default {
  save,
  load,
  remove,
};

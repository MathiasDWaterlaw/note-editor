export default function useLocalStorage(key) {
  if (!key) {
    throw new Error(
      "You need to provide a string key value for the useLocalStorage hook"
    );
  } else if (typeof key !== "string") {
    throw new TypeError("Key must be a string");
  } else {
    const setItem = (value) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    };

    const getItem = () => {
      try {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : null;
      } catch (error) {
        console.log(error);
      }
    };

    const removeItem = () => {
      try {
        window.localStorage.removeItem(key);
      } catch (error) {
        console.log(error);
      }
    };

    return [setItem, getItem, removeItem];
  }
}

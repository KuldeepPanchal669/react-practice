export const fetchProductList = <T>(): Promise<T> => {
    return fetch('https://dummyjson.com/products').then(res=>res.json())
}
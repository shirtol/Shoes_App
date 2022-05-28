import * as constants from "./constants/constants.js";

export const isValidImage = (url) =>
    /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);

export const isValidProductName = (productName) =>
    constants.MIN_PRODUCT_NAME_LENGTH <= productName.length &&
    productName.length <= constants.MAX_PRODUCT_NAME_LENGTH;

export const isValidPrice = (price) =>
    constants.MIN_PRICE_LENGTH <= price.length &&
    price.length <= constants.MAX_PRICE_LENGTH;

export const isValidCategory = (category) =>
    constants.MAX_CATEGORY_LENGTH >= category.length;

export const isValidSize = (size) =>
    constants.MIN_SIZE_LENGTH <= size.toString().length &&
    size.toString().length <= constants.MAX_SIZE_LENGTH;

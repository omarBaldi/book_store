import {
  BasketPage,
  CategoriesPage,
  CategoryPage,
  ProductPage,
} from '../pages';

export enum ROUTES_PATH {
  HOME = '/',
  PRODUCTS = '/products',
  CATEGORIES = '/categories',
  SPECIFIC_CATEGORY = '/categories/:category',
  BASKET = '/basket',
  NOT_FOUND = '*',
}

export const routes = [
  { path: ROUTES_PATH.HOME, component: ProductPage },
  { path: ROUTES_PATH.PRODUCTS, component: ProductPage },
  { path: ROUTES_PATH.CATEGORIES, component: CategoriesPage },
  { path: ROUTES_PATH.SPECIFIC_CATEGORY, component: CategoryPage },
  { path: ROUTES_PATH.BASKET, component: BasketPage },
  { path: ROUTES_PATH.NOT_FOUND, component: ProductPage },
];

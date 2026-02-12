/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type AbsolutePriceChange = {
  __typename: 'AbsolutePriceChange';
  amount: Money;
};

export type Attribute = {
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
};

export type AttributeFilter = {
  code: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type BooleanAttribute = Attribute & {
  __typename: 'BooleanAttribute';
  addedPrice?: Maybe<PriceChange>;
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  value: Scalars['Boolean']['output'];
};

export type Category = {
  __typename: 'Category';
  children: Array<Category>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Media>;
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  parentId?: Maybe<Scalars['ID']['output']>;
  products: ProductConnection;
  slug: Scalars['String']['output'];
};


export type CategoryProductsArgs = {
  filters?: InputMaybe<ProductFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<ProductSort>;
};

export type CategoryConnection = {
  __typename: 'CategoryConnection';
  edges: Array<CategoryEdge>;
  pageInfo: PageInfo;
};

export type CategoryEdge = {
  __typename: 'CategoryEdge';
  cursor: Scalars['String']['output'];
  node: Category;
};

export type CategoryFilters = {
  parentId?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type ColorAttribute = Attribute & {
  __typename: 'ColorAttribute';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options: Array<ColorOption>;
  required: Scalars['Boolean']['output'];
};

export type ColorOption = Option & {
  __typename: 'ColorOption';
  addedPrice?: Maybe<PriceChange>;
  description: Scalars['String']['output'];
  display: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  media: Media;
  order: Scalars['Int']['output'];
  selected: Scalars['Boolean']['output'];
  value: Scalars['String']['output'];
};

export type Communication = {
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  text: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
  userName: Scalars['String']['output'];
};

export type Compartment = {
  __typename: 'Compartment';
  id: Scalars['ID']['output'];
  options: Array<VariantOption>;
  order: Scalars['Int']['output'];
  size: Scalars['Float']['output'];
  unit: Scalars['String']['output'];
};

export enum CurrencyCode {
  Eur = 'EUR',
  Rub = 'RUB',
  Usd = 'USD'
}

export type DimensionAttribute = Attribute & {
  __typename: 'DimensionAttribute';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options: Array<DimensionOption>;
  required: Scalars['Boolean']['output'];
};

export type DimensionOption = Option & {
  __typename: 'DimensionOption';
  display: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  selected: Scalars['Boolean']['output'];
  unit: DimensionUnit;
  value: Scalars['String']['output'];
};

export enum DimensionUnit {
  Cm = 'CM',
  M = 'M',
  Mm = 'MM'
}

export type EquipmentAttribute = Attribute & {
  __typename: 'EquipmentAttribute';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options: Array<MultiSelectOption>;
  required: Scalars['Boolean']['output'];
};

export type GalleryItem = {
  __typename: 'GalleryItem';
  media: Media;
  order: Scalars['Int']['output'];
};

export type Image = {
  __typename: 'Image';
  alt?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  src: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type Installment = {
  __typename: 'Installment';
  payment: Money;
  period: Period;
};

export type Link = {
  __typename: 'Link';
  text: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Media = Image | Video;

export type Money = {
  __typename: 'Money';
  amount: Scalars['Float']['output'];
  currencyCode: CurrencyCode;
};

export type MultiSelectAttribute = Attribute & {
  __typename: 'MultiSelectAttribute';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options: Array<MultiSelectOption>;
  required: Scalars['Boolean']['output'];
};

export type MultiSelectOption = Option & {
  __typename: 'MultiSelectOption';
  addedPrice?: Maybe<PriceChange>;
  description: Scalars['String']['output'];
  display: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  maxQuantity: Scalars['Int']['output'];
  media: Media;
  minQuantity: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type NumberAttribute = Attribute & {
  __typename: 'NumberAttribute';
  addedPrice?: Maybe<PriceChange>;
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  step: Scalars['Float']['output'];
  unit: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type Option = {
  display: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type PageInfo = {
  __typename: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Pagination = {
  after?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PercentPriceChange = {
  __typename: 'PercentPriceChange';
  percent: Scalars['Int']['output'];
};

export type Period = {
  __typename: 'Period';
  length: Scalars['Int']['output'];
  unit: PeriodUnit;
};

export enum PeriodUnit {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type Price = {
  __typename: 'Price';
  list: Money;
  net: Money;
};

export type PriceChange = AbsolutePriceChange | PercentPriceChange;

export type Product = {
  __typename: 'Product';
  alsoProducts: Array<Product>;
  attributes: Array<Attribute>;
  collection?: Maybe<Link>;
  collectionProducts: Array<Product>;
  description: Scalars['String']['output'];
  discount?: Maybe<PriceChange>;
  extraTags?: Maybe<Array<Image>>;
  id: Scalars['ID']['output'];
  info: Scalars['String']['output'];
  installment?: Maybe<Installment>;
  isFreeDelivery: Scalars['Boolean']['output'];
  manuals: Array<Link>;
  name: Scalars['String']['output'];
  partNumber: Scalars['Int']['output'];
  price: Price;
  questions: Array<Question>;
  rating: Scalars['Float']['output'];
  reviews: Array<Review>;
  searched: Array<Link>;
  similarProducts: Array<Product>;
  slug: Scalars['String']['output'];
  systemGallery: Array<GalleryItem>;
  userGallery?: Maybe<Array<GalleryItem>>;
  warranty: Scalars['String']['output'];
};

export type ProductConnection = {
  __typename: 'ProductConnection';
  edges: Array<ProductEdge>;
  pageInfo: PageInfo;
};

export type ProductEdge = {
  __typename: 'ProductEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type ProductFilters = {
  attributes?: InputMaybe<Array<AttributeFilter>>;
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export enum ProductSort {
  CreatedAtDesc = 'CREATED_AT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  RatingDesc = 'RATING_DESC'
}

export type Query = {
  __typename: 'Query';
  categories: CategoryConnection;
  category?: Maybe<Category>;
  productById?: Maybe<Product>;
  productBySlug?: Maybe<Product>;
  products: ProductConnection;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFilters>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryCategoryArgs = {
  slug: Scalars['String']['input'];
};


export type QueryProductByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFilters>;
  pagination?: InputMaybe<Pagination>;
  sort?: InputMaybe<ProductSort>;
};

export type Question = Communication & {
  __typename: 'Question';
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  rating?: Maybe<Rating>;
  text: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
  userName: Scalars['String']['output'];
};

export enum Rating {
  Five = 'FIVE',
  Four = 'FOUR',
  One = 'ONE',
  Three = 'THREE',
  Two = 'TWO'
}

export type Review = Communication & {
  __typename: 'Review';
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  rating: Rating;
  text: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
  userName: Scalars['String']['output'];
};

export type SelectAttribute = Attribute & {
  __typename: 'SelectAttribute';
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options: Array<SelectOption>;
  required: Scalars['Boolean']['output'];
};

export type SelectOption = Option & {
  __typename: 'SelectOption';
  addedPrice?: Maybe<PriceChange>;
  description: Scalars['String']['output'];
  display: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  media: Media;
  order: Scalars['Int']['output'];
  selected: Scalars['Boolean']['output'];
  value: Scalars['String']['output'];
};

export type Subscription = {
  __typename: 'Subscription';
  product?: Maybe<Product>;
};


export type SubscriptionProductArgs = {
  id: Scalars['ID']['input'];
};

export type VariantAttribute = Attribute & {
  __typename: 'VariantAttribute';
  code: Scalars['String']['output'];
  compartments: Array<Compartment>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
};

export type VariantOption = Option & {
  __typename: 'VariantOption';
  addedPrice: PriceChange;
  description: Scalars['String']['output'];
  display: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  maxQuantity: Scalars['Int']['output'];
  media: Media;
  minQuantity: Scalars['Int']['output'];
  order: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type Video = {
  __typename: 'Video';
  source: Array<VideoSource>;
};

export type VideoSource = {
  __typename: 'VideoSource';
  src: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CategoryPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  productsPagination: Pagination;
}>;


export type CategoryPageQuery = { __typename: 'Query', category?: { __typename: 'Category', id: string, slug: string, name: string, description: string, media?:
      | { __typename: 'Image', src: string, alt?: string | null }
      | { __typename: 'Video' }
     | null, products: { __typename: 'ProductConnection', edges: Array<{ __typename: 'ProductEdge', cursor: string, node: { __typename: 'Product', id: string, slug: string, name: string, price: { __typename: 'Price', list: { __typename: 'Money', amount: number, currencyCode: CurrencyCode }, net: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }, discount?:
            | { __typename: 'AbsolutePriceChange', amount: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }
            | { __typename: 'PercentPriceChange', percent: number }
           | null, systemGallery: Array<{ __typename: 'GalleryItem', order: number, media:
              | { __typename: 'Image', src: string, alt?: string | null }
              | { __typename: 'Video', source: Array<{ __typename: 'VideoSource', src: string, type: string }> }
             }>, attributes: Array<
            | { __typename: 'BooleanAttribute', code: string, name: string }
            | { __typename: 'ColorAttribute', code: string, name: string }
            | { __typename: 'DimensionAttribute', code: string, name: string, options: Array<{ __typename: 'DimensionOption', value: string, unit: DimensionUnit, display: string, selected: boolean }> }
            | { __typename: 'EquipmentAttribute', code: string, name: string }
            | { __typename: 'MultiSelectAttribute', code: string, name: string }
            | { __typename: 'NumberAttribute', value: number, unit: string, code: string, name: string }
            | { __typename: 'SelectAttribute', code: string, name: string }
            | { __typename: 'VariantAttribute', code: string, name: string }
          >, reviews: Array<{ __typename: 'Review', id: string, userName: string, rating: Rating, date: any, text: string }> } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null, hasPreviousPage: boolean, startCursor?: string | null } } } | null };

export type CategoriesQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type CategoriesQuery = { __typename: 'Query', categories: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', cursor: string, node: { __typename: 'Category', id: string, name: string, slug: string, description: string, media?:
          | { __typename: 'Image', src: string, alt?: string | null }
          | { __typename: 'Video', source: Array<{ __typename: 'VideoSource', src: string, type: string }> }
         | null } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null, hasPreviousPage: boolean } } };

export type HomeCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  productsPagination: Pagination;
}>;


export type HomeCategoryQuery = { __typename: 'Query', category?: { __typename: 'Category', id: string, slug: string, name: string, description: string, media?:
      | { __typename: 'Image', src: string, alt?: string | null }
      | { __typename: 'Video' }
     | null, products: { __typename: 'ProductConnection', edges: Array<{ __typename: 'ProductEdge', cursor: string, node: { __typename: 'Product', id: string, slug: string, name: string, price: { __typename: 'Price', list: { __typename: 'Money', amount: number, currencyCode: CurrencyCode }, net: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }, discount?:
            | { __typename: 'AbsolutePriceChange', amount: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }
            | { __typename: 'PercentPriceChange', percent: number }
           | null, systemGallery: Array<{ __typename: 'GalleryItem', order: number, media:
              | { __typename: 'Image', src: string, alt?: string | null }
              | { __typename: 'Video', source: Array<{ __typename: 'VideoSource', src: string, type: string }> }
             }>, reviews: Array<{ __typename: 'Review', rating: Rating }> } }>, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, endCursor?: string | null } } } | null };

export type ProductQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductQuery = { __typename: 'Query', productBySlug?: { __typename: 'Product', id: string, slug: string, name: string, info: string, description: string, warranty: string, partNumber: number, rating: number, price: { __typename: 'Price', list: { __typename: 'Money', amount: number, currencyCode: CurrencyCode }, net: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }, discount?:
      | { __typename: 'AbsolutePriceChange', amount: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }
      | { __typename: 'PercentPriceChange', percent: number }
     | null, systemGallery: Array<{ __typename: 'GalleryItem', order: number, media:
        | { __typename: 'Image', src: string, alt?: string | null, width?: number | null, height?: number | null }
        | { __typename: 'Video', source: Array<{ __typename: 'VideoSource', src: string, type: string }> }
       }>, attributes: Array<
      | { __typename: 'BooleanAttribute', code: string, name: string, required: boolean }
      | { __typename: 'ColorAttribute', code: string, name: string, required: boolean, options: Array<{ __typename: 'ColorOption', id: string, value: string, display: string, selected: boolean, description: string, media:
            | { __typename: 'Image', src: string, alt?: string | null }
            | { __typename: 'Video' }
          , addedPrice?:
            | { __typename: 'AbsolutePriceChange', amount: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }
            | { __typename: 'PercentPriceChange' }
           | null }> }
      | { __typename: 'DimensionAttribute', code: string, name: string, required: boolean, options: Array<{ __typename: 'DimensionOption', id: string, value: string, unit: DimensionUnit, display: string, selected: boolean }> }
      | { __typename: 'EquipmentAttribute', code: string, name: string, required: boolean, options: Array<{ __typename: 'MultiSelectOption', id: string, value: string, display: string, quantity: number, minQuantity: number, maxQuantity: number, order: number, media:
            | { __typename: 'Image', src: string, alt?: string | null }
            | { __typename: 'Video' }
          , addedPrice?:
            | { __typename: 'AbsolutePriceChange', amount: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }
            | { __typename: 'PercentPriceChange' }
           | null }> }
      | { __typename: 'MultiSelectAttribute', code: string, name: string, required: boolean }
      | { __typename: 'NumberAttribute', value: number, unit: string, min: number, max: number, step: number, code: string, name: string, required: boolean }
      | { __typename: 'SelectAttribute', code: string, name: string, required: boolean, options: Array<{ __typename: 'SelectOption', id: string, value: string, display: string, selected: boolean, description: string, media:
            | { __typename: 'Image', src: string, alt?: string | null }
            | { __typename: 'Video' }
          , addedPrice?:
            | { __typename: 'AbsolutePriceChange', amount: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }
            | { __typename: 'PercentPriceChange' }
           | null }> }
      | { __typename: 'VariantAttribute', code: string, name: string, required: boolean, compartments: Array<{ __typename: 'Compartment', id: string, size: number, unit: string, order: number, options: Array<{ __typename: 'VariantOption', id: string, value: string, display: string, description: string, minQuantity: number, maxQuantity: number, quantity: number, media:
              | { __typename: 'Image', src: string, alt?: string | null }
              | { __typename: 'Video' }
            , addedPrice:
              | { __typename: 'AbsolutePriceChange', amount: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }
              | { __typename: 'PercentPriceChange' }
             }> }> }
    >, reviews: Array<{ __typename: 'Review', id: string, userName: string, rating: Rating, date: any, text: string }>, questions: Array<{ __typename: 'Question', id: string, userName: string, rating?: Rating | null, date: any, text: string }> } | null };


export const CategoryPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CategoryPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsPagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsPagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"net"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbsolutePriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PercentPriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"systemGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NumberAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DimensionAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CategoryPageQuery, CategoryPageQueryVariables>;
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Categories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}}]}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const HomeCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomeCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productsPagination"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productsPagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"net"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbsolutePriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PercentPriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"systemGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomeCategoryQuery, HomeCategoryQueryVariables>;
export const ProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"warranty"}},{"kind":"Field","name":{"kind":"Name","value":"partNumber"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"net"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbsolutePriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PercentPriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"systemGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NumberAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"step"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DimensionAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ColorAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"addedPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbsolutePriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SelectAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"addedPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbsolutePriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VariantAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"compartments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"minQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"maxQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"addedPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbsolutePriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EquipmentAttribute"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"display"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"minQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"maxQuantity"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"addedPrice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbsolutePriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userName"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;
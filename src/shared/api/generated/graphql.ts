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

export type Category = {
  __typename: 'Category';
  children: Array<Category>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Media>;
  name: Scalars['String']['output'];
  parent?: Maybe<Category>;
  products: Array<Product>;
  slug: Scalars['String']['output'];
};


export type CategoryProductsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Color = Option & Priceable & Selectable & {
  __typename: 'Color';
  addedPrice?: Maybe<PriceChange>;
  group?: Maybe<OptionGroup>;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media: Media;
  name: Scalars['String']['output'];
  selected: Scalars['Boolean']['output'];
};

export type ColorCombo = {
  __typename: 'ColorCombo';
  bodyColor: Color;
  facadeColor: Color;
};

export type Communication = {
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  text: Scalars['String']['output'];
  user: Scalars['String']['output'];
};

export type Countable = {
  quantity?: Maybe<Scalars['Int']['output']>;
};

export enum CurrencyCode {
  Rub = 'RUB'
}

export type Depth = Dimension & Priceable & Selectable & {
  __typename: 'Depth';
  addedPrice?: Maybe<PriceChange>;
  selected: Scalars['Boolean']['output'];
  unit: DimensionUnit;
  value: Scalars['Int']['output'];
};

export type Dimension = {
  selected?: Maybe<Scalars['Boolean']['output']>;
  unit: DimensionUnit;
  value: Scalars['Int']['output'];
};

export enum DimensionUnit {
  M = 'M',
  Mm = 'MM',
  Sm = 'SM'
}

/** Доп. комплектация */
export type Equipment = Countable & Option & Priceable & {
  __typename: 'Equipment';
  addedPrice?: Maybe<PriceChange>;
  group?: Maybe<OptionGroup>;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media?: Maybe<Media>;
  name: Scalars['String']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type GalleryItem = {
  __typename: 'GalleryItem';
  media: Media;
  ordinalNumber: Scalars['Int']['output'];
};

export type Height = Dimension & Priceable & Selectable & {
  __typename: 'Height';
  addedPrice?: Maybe<PriceChange>;
  selected: Scalars['Boolean']['output'];
  unit: DimensionUnit;
  value: Scalars['Int']['output'];
};

export type Image = {
  __typename: 'Image';
  alt?: Maybe<Scalars['String']['output']>;
  src: Scalars['String']['output'];
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

export type Option = {
  group?: Maybe<OptionGroup>;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media?: Maybe<Media>;
  name: Scalars['String']['output'];
};

export type OptionGroup = {
  __typename: 'OptionGroup';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
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

export type Priceable = {
  addedPrice?: Maybe<PriceChange>;
};

export type Product = {
  __typename: 'Product';
  /** С этим товаром покупают */
  alsoProducts?: Maybe<Array<Product>>;
  bodyColor: Array<Color>;
  collection?: Maybe<Link>;
  /** Мебель из коллекции */
  collectionProducts?: Maybe<Array<Product>>;
  depth: Array<Depth>;
  /** Описание (HTML formatted) */
  description: Scalars['String']['output'];
  discount?: Maybe<PriceChange>;
  equipment: Array<Equipment>;
  extraTags?: Maybe<Array<Image>>;
  facadeColor: Array<Color>;
  height: Array<Height>;
  id: Scalars['ID']['output'];
  inCartAmount?: Maybe<Scalars['Int']['output']>;
  /** Важная информация (HTML formatted) */
  info: Scalars['String']['output'];
  installment?: Maybe<Installment>;
  isFreeDelivery?: Maybe<Scalars['Boolean']['output']>;
  isInFavourtes?: Maybe<Scalars['Boolean']['output']>;
  manuals?: Maybe<Array<Link>>;
  name: Scalars['String']['output'];
  partNumber: Scalars['Int']['output'];
  price: Price;
  questions?: Maybe<Array<Question>>;
  rating: Scalars['Int']['output'];
  recommendedColors: Array<ColorCombo>;
  reviews?: Maybe<Array<Review>>;
  schema: Array<Schema>;
  /** С этим товаром искали */
  searched?: Maybe<Array<Link>>;
  /** Похожие товары */
  similarProducts?: Maybe<Array<Product>>;
  slug: Scalars['String']['output'];
  systemGallery?: Maybe<Array<GalleryItem>>;
  userGallery?: Maybe<Array<GalleryItem>>;
  variant: Array<Variant>;
  warranty: Scalars['String']['output'];
  width: Array<Width>;
};

export type Query = {
  __typename: 'Query';
  categories: Array<Category>;
  category?: Maybe<Category>;
  productById?: Maybe<Product>;
  productBySlug?: Maybe<Product>;
  products: Array<Product>;
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
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type Question = Communication & {
  __typename: 'Question';
  date: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  media?: Maybe<Array<Media>>;
  text: Scalars['String']['output'];
  user: Scalars['String']['output'];
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
  user: Scalars['String']['output'];
};

/** Схемы наполнения */
export type Schema = Option & Priceable & Selectable & {
  __typename: 'Schema';
  addedPrice?: Maybe<PriceChange>;
  group?: Maybe<OptionGroup>;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media?: Maybe<Media>;
  name: Scalars['String']['output'];
  selected?: Maybe<Scalars['Boolean']['output']>;
};

export type Selectable = {
  selected?: Maybe<Scalars['Boolean']['output']>;
};

export type Subscription = {
  __typename: 'Subscription';
  product?: Maybe<Product>;
};


export type SubscriptionProductArgs = {
  id: Scalars['ID']['input'];
};

/** Опции */
export type Variant = Option & Priceable & Selectable & {
  __typename: 'Variant';
  addedPrice?: Maybe<PriceChange>;
  group?: Maybe<OptionGroup>;
  hint?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  media?: Maybe<Media>;
  name: Scalars['String']['output'];
  selected?: Maybe<Scalars['Boolean']['output']>;
};

export type Video = {
  __typename: 'Video';
  source: Array<VideoSource>;
};

export type VideoSource = {
  __typename: 'VideoSource';
  src: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type Width = Dimension & Priceable & Selectable & {
  __typename: 'Width';
  addedPrice?: Maybe<PriceChange>;
  selected: Scalars['Boolean']['output'];
  unit: DimensionUnit;
  value: Scalars['Int']['output'];
};

export type CategoryPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoryPageQuery = { __typename: 'Query', category?: { __typename: 'Category', id: string, slug: string, name: string, description: string, products: Array<{ __typename: 'Product', id: string, slug: string, name: string, price: { __typename: 'Price', list: { __typename: 'Money', amount: number, currencyCode: CurrencyCode }, net: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }, discount?:
        | { __typename: 'AbsolutePriceChange', amount: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }
        | { __typename: 'PercentPriceChange', percent: number }
       | null, systemGallery?: Array<{ __typename: 'GalleryItem', media:
          | { __typename: 'Image', src: string, alt?: string | null }
          | { __typename: 'Video' }
         }> | null, recommendedColors: Array<{ __typename: 'ColorCombo', facadeColor: { __typename: 'Color', id: string, name: string, media:
            | { __typename: 'Image', src: string, alt?: string | null }
            | { __typename: 'Video' }
           }, bodyColor: { __typename: 'Color', id: string, name: string, media:
            | { __typename: 'Image', src: string, alt?: string | null }
            | { __typename: 'Video' }
           } }>, reviews?: Array<{ __typename: 'Review', rating: Rating }> | null, width: Array<{ __typename: 'Width', value: number, unit: DimensionUnit }>, height: Array<{ __typename: 'Height', value: number, unit: DimensionUnit }>, depth: Array<{ __typename: 'Depth', value: number, unit: DimensionUnit }> }> } | null };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename: 'Query', categories: Array<{ __typename: 'Category', id: string, name: string, slug: string, media?:
      | { __typename: 'Image', src: string, alt?: string | null }
      | { __typename: 'Video' }
     | null }> };

export type HomeCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type HomeCategoryQuery = { __typename: 'Query', category?: { __typename: 'Category', id: string, slug: string, name: string, products: Array<{ __typename: 'Product', id: string, slug: string, name: string, price: { __typename: 'Price', list: { __typename: 'Money', amount: number, currencyCode: CurrencyCode }, net: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }, discount?:
        | { __typename: 'AbsolutePriceChange', amount: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }
        | { __typename: 'PercentPriceChange', percent: number }
       | null, systemGallery?: Array<{ __typename: 'GalleryItem', media:
          | { __typename: 'Image', src: string, alt?: string | null }
          | { __typename: 'Video', source: Array<{ __typename: 'VideoSource', src: string, type?: string | null }> }
         }> | null, recommendedColors: Array<{ __typename: 'ColorCombo', facadeColor: { __typename: 'Color', id: string, name: string, media:
            | { __typename: 'Image', src: string, alt?: string | null }
            | { __typename: 'Video' }
           }, bodyColor: { __typename: 'Color', id: string, name: string, media:
            | { __typename: 'Image', src: string, alt?: string | null }
            | { __typename: 'Video' }
           } }>, reviews?: Array<{ __typename: 'Review', rating: Rating }> | null }> } | null };

export type ProductQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductQuery = { __typename: 'Query', productBySlug?: { __typename: 'Product', id: string, slug: string, name: string, description: string, price: { __typename: 'Price', list: { __typename: 'Money', amount: number, currencyCode: CurrencyCode }, net: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }, discount?:
      | { __typename: 'AbsolutePriceChange', amount: { __typename: 'Money', amount: number, currencyCode: CurrencyCode } }
      | { __typename: 'PercentPriceChange', percent: number }
     | null, systemGallery?: Array<{ __typename: 'GalleryItem', media:
        | { __typename: 'Image', src: string, alt?: string | null }
        | { __typename: 'Video', source: Array<{ __typename: 'VideoSource', src: string, type?: string | null }> }
       }> | null, recommendedColors: Array<{ __typename: 'ColorCombo', facadeColor: { __typename: 'Color', id: string, name: string, selected: boolean, media:
          | { __typename: 'Image', src: string, alt?: string | null }
          | { __typename: 'Video' }
         }, bodyColor: { __typename: 'Color', id: string, name: string, selected: boolean, media:
          | { __typename: 'Image', src: string, alt?: string | null }
          | { __typename: 'Video' }
         } }>, reviews?: Array<{ __typename: 'Review', rating: Rating }> | null, height: Array<{ __typename: 'Height', value: number, unit: DimensionUnit, selected: boolean }>, width: Array<{ __typename: 'Width', value: number, unit: DimensionUnit, selected: boolean }>, depth: Array<{ __typename: 'Depth', value: number, unit: DimensionUnit, selected: boolean }> } | null };


export const CategoryPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CategoryPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"net"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbsolutePriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PercentPriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"systemGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"recommendedColors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facadeColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}},{"kind":"Field","name":{"kind":"Name","value":"width"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"height"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CategoryPageQuery, CategoryPageQueryVariables>;
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const HomeCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HomeCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"net"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbsolutePriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PercentPriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"systemGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"recommendedColors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facadeColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomeCategoryQuery, HomeCategoryQueryVariables>;
export const ProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Product"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"list"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}},{"kind":"Field","name":{"kind":"Name","value":"net"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"discount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbsolutePriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currencyCode"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PercentPriceChange"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"percent"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"systemGallery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"source"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"recommendedColors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"facadeColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bodyColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}},{"kind":"Field","name":{"kind":"Name","value":"media"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"reviews"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rating"}}]}},{"kind":"Field","name":{"kind":"Name","value":"height"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}}]}},{"kind":"Field","name":{"kind":"Name","value":"width"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}}]}},{"kind":"Field","name":{"kind":"Name","value":"depth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"unit"}},{"kind":"Field","name":{"kind":"Name","value":"selected"}}]}}]}}]}}]} as unknown as DocumentNode<ProductQuery, ProductQueryVariables>;
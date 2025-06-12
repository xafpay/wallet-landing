/**
 * Enum for platform supported languages.
 */
export enum SupportedLanguageEnum {
  En = 'ENGLISH',
  Fr = 'FRENCH',
}

/**
 * Interface for payment method images
 */
export interface IPaymentMethods {
  link: string;
  alt: string;
}

interface IImage {
  link: string;
  label: string;
}

/* Interface for why trust section*/
export interface IWhyTrust {
  title: string;
  description: string;
  image: IImage;
}

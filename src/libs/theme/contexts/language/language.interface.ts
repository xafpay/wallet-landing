import React from 'react';

export interface LanguageContextProviderProps {
  children: React.ReactElement;
}

export type LanguageType = 'En' | 'Fr';

export type Action = { type: 'USE_ENGLISH' | 'USE_FRENCH' };

export interface Language {
  activeLanguage: LanguageType;
  languageDispatch: React.Dispatch<Action>;
}

export type State = Language;

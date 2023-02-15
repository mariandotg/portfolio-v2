import { IPageFields } from '@/models/contentful/generated/contentful';
import { Action } from '@reduxjs/toolkit';

export interface ActionHYDRATE extends Action {
  type: string;
  payload?: {
    pageContent: {
      sections: IPageFields;
      loading: string;
      locale: string;
    };
  };
}

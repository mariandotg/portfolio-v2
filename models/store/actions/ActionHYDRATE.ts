import { IPageFields } from '@/models/contentful/generated/contentful';
import { Action } from '@reduxjs/toolkit';

export interface ActionHYDRATE extends Action {
  type: string;
  payload?: {
    pageContent: {
      name: string;
      sections: IPageFields;
      loading: string;
      locale: string;
    };
  };
}

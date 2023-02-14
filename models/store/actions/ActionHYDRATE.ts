import { ISection } from '@/models/contentful/generated/contentful';
import { Action } from '@reduxjs/toolkit';

export interface ActionHYDRATE extends Action {
  type: string;
  payload?: {
    data: {
      sections: Array<ISection>;
      loading: string;
      language: string;
    };
  };
}

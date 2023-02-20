import { Action } from '@reduxjs/toolkit';
import { PageConstants } from '../state/PageConstants';
import { PageContent } from '../state/PageContent';

export interface ActionHYDRATE extends Action {
  type: string;
  payload?: {
    pageContent: PageContent;
    pageConstants: PageConstants;
  };
}

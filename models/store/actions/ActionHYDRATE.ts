import { Action } from '@reduxjs/toolkit';
import { PageContent } from '../state/PageContent';
import { PageConstants } from '../state/PageConstants';
import { PageSeo } from '../state/PageSeo';

export interface ActionHYDRATE extends Action {
  type: string;
  payload?: {
    pageContent: PageContent;
    pageConstants: PageConstants;
    pageSeo: PageSeo;
  };
}

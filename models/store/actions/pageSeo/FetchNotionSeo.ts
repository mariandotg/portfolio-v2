export interface ResponseParams {
  slug: string;
}

export interface ResponseObj {
  response: {
    [key: string]: string;
  };
  slug: string;
}

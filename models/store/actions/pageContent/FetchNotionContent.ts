export interface ResponseParams {
  section: string;
  property: string;
  filter: {
    property: string;
    select: {
      equals: string;
    };
  };
  databaseId: string;
}

export interface ResponseObj {
  response: Array<any>;
  section: string;
  property: string;
}

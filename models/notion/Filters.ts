export type FilterObj = {
  property: string;
  select: {
    equals: string;
  };
};

export type CompoundFilterObj = {
  and: Array<FilterObj>;
};

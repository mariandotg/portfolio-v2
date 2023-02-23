export const notionDataAdapter = (data) => {
  const response: any[] | PromiseLike<any[]> = [];
  data.results.forEach(
    (element, index) =>
      (response[index] = {
        object: element.object,
        id: element.id,
        properties: element.properties,
      })
  );
  return response;
};

const mapStatsToObject = (
  properties: string[],
  arrayToMap: Record<string, unknown>,
  totalSubName?: string
) => {
  return properties.map(attribute => {
    const numVal = arrayToMap[attribute as keyof typeof arrayToMap];
    const strVal = numVal ? numVal.toString() : '0';
    return {
      attribute: attribute === 'total' ? (totalSubName as string) : attribute,
      value: strVal
    };
  });
};

export default mapStatsToObject;

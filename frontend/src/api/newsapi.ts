export const fetchNewsDefaultParams = {
  query:
    '{"$query":{"$and":[{"conceptUri":"http://en.wikipedia.org/wiki/Association_football"},{"lang":"eng"}]},"$filter":{"forceMaxDataTimeWindow":"31"}}',
  resultType: 'articles',
  articlesSortBy: 'date',
  articlesCount: 10,
  includeArticleImage: true,
  articleBodyLen: -1,
  includeConceptLabel: false,
  apiKey: '2d1d58b3-b611-40df-92b0-423aad0c411f'
};

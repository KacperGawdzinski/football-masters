import React from 'react';
import ResponsiveAppBar from './components/Header';
import axios from 'axios';
import { fetchNewsDefaultParams } from './api/newsapi';
import { settings } from './api/apiFootball';
// const x = async () => {
//   const y = await axios.get(
//     'http://eventregistry.org/api/v1/article/getArticles',
//     { data: fetchNewsDefaultParams }
//   );
//   console.log(y);
// };
// x();

// const z = async () => {
//   const y = await axios(settings);
//   console.log(y);
// };
// z();

const h = async () => {
  const manifest = await axios.get(
    'https://api.sportradar.us/soccer-images-t3/reuters/headshots/players/2022/manifest.json?api_key=vtzedxfp47w49gcmc3zej89m'
  );
  // const hh = await axios.get(
  //   'https://api.sportradar.us/soccer-images-t3/reuters/ligue-1/full-body/players/{asset_id}/{file_name}.{format}?api_key={your_api_key}'
  // );
  console.log(manifest);
};
h();
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ResponsiveAppBar></ResponsiveAppBar>
      </header>
    </div>
  );
}

export default App;

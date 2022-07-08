import { useState, useEffect } from 'react';
import axios from 'axios';
import '../node_modules/vital-css/dist/css/vital.min.css';
import MetadataItem from './components/MetadataItem';
import ItemTitle from './components/ItemTitle';
import ItemDescription from './components/ItemDescription';
import ReviewItem from './components/ReviewItem';

const App = () => {
  const [itemIdentifier] = useState('InformationM');
  const [dataFetched, setDataFetched] = useState(false);
  const [itemMetadata, setItemMetadata] = useState({});

  const fetchData = () => {
    console.log('effect');
    const url = 'https://archive.org/metadata/' + itemIdentifier;
    console.log('url is: ', url);
    axios.get(url).then((response) => {
      console.log('promise fulfilled');
      setItemMetadata(response.data);
      setDataFetched(true);
    });
  };

  useEffect(fetchData, []);
  console.log(itemMetadata);

  //https://ia803008.us.archive.org/29/items/InformationM/InformationM_512kb.mp4

  if (dataFetched) {
    return (
      <>
        <div className="row">
          <div className="section">
            <h5>Item identifier:</h5>
            <h3>{itemIdentifier}</h3>
          </div>
        </div>

        <hr />
        <div className="row">
          <div className="section">
            <iframe
              title={itemIdentifier}
              src="https://archive.org/embed/InformationM"
              width="640"
              height="480"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen></iframe>
          </div>
        </div>

        <div className="row">
          <div className="section item-metadata">
            <ItemTitle title={itemMetadata.metadata.title} />
            <ItemDescription description={itemMetadata.metadata.description} />
            <div className="item-metadata-expandable-list">
              <h3>Metadata ({Object.keys(itemMetadata.metadata).length})</h3>
              {Object.keys(itemMetadata.metadata).map((key) => {
                return (
                  <MetadataItem key={key} label={key} description={itemMetadata.metadata[key]} />
                );
              })}
            </div>
          </div>

          <div className="section item-reviews">
            <h3>Reviews ({Object.keys(itemMetadata.reviews).length})</h3>
            {itemMetadata.reviews.map((review, index) => (
              <ReviewItem key={review.review_id ? review.review_id : index} review={review} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="row">
          <div className="section center">
            <span className="load large"></span>
            <h1>Loading...</h1>
          </div>
        </div>
      </>
    );
  }
};

export default App;

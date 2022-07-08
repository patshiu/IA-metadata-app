import { useState, useEffect } from 'react';
// import axios from 'axios';
import '../node_modules/vital-css/dist/css/vital.min.css';
import MetadataItem from './components/MetadataItem';
import ItemTitle from './components/ItemTitle';
import ItemDescription from './components/ItemDescription';
// import ReviewItem from './components/ReviewItem';
import MediaEmbed from './components/MediaEmbed';
import ReviewsSection from './components/ReviewsSection';

import metadataService from './services/metadata';
import dataParser from './services/dataParser';

const App = () => {
  const [itemIdentifier] = useState('InformationM');
  const [dataFetched, setDataFetched] = useState(false);
  const [itemMetadata, setItemMetadata] = useState({});

  // Parsed Metadata
  const [hasEmbed, setHasEmbed] = useState(false);

  useEffect(() => {
    metadataService.fetch(itemIdentifier).then((response) => {
      console.log('promise fulfilled');
      console.log(response.data);
      setItemMetadata(response.data);
      setHasEmbed(dataParser.mediaTypeHasEmbed(response.data.metadata.mediatype));
      setDataFetched(true);
    });
  }, []);
  //https://ia803008.us.archive.org/29/items/InformationM/InformationM_512kb.mp4

  if (dataFetched) {
    return (
      <>
        <div className="row">
          <div className="section">
            <h5>Item identifier:</h5>
            <h3>{itemIdentifier}</h3>
            <div>
              <label>
                <select name="name">
                  <option value="select option one">[text] artistfileeames</option>
                  <option value="select option two">
                    [etree] sy2012-06-09.sb.nak.shivaho.flac16
                  </option>
                  <option value="select option three">
                    [audio] emma-eames-who-is-sylvia-victrola-88013-1905
                  </option>
                  <option value="select option four">[movies] InformationM</option>
                  <option value="select option four">[software] SEAPATHS</option>
                  <option value="select option four">[image] archives_uml_077</option>
                  <option value="select option four">[data] thingiverse-4824942</option>
                  <option value="select option four">[web] perma_cc_D7HA-2FA4</option>
                  <option value="select option four">[collection] inlibrary</option>
                  <option value="select option four">[account] @memoriesofthedaize</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <hr />
        <MediaEmbed hasEmbed={hasEmbed} itemIdentifier={itemIdentifier} />

        <div className="row">
          <div className="section item-metadata">
            <ItemTitle title={itemMetadata.metadata.title} />
            <ItemDescription description={itemMetadata.metadata.description} />
            <div className="section item-key-metadata">{/* DISPLAY KEY METADATA HERE */}</div>

            <div className="item-metadata-expandable-list">
              <h3>Metadata ({Object.keys(itemMetadata.metadata).length})</h3>
              {Object.keys(itemMetadata.metadata).map((key) => {
                return (
                  <MetadataItem key={key} label={key} description={itemMetadata.metadata[key]} />
                );
              })}
            </div>
          </div>

          <ReviewsSection reviews={itemMetadata.reviews} />
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

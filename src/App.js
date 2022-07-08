import { useState, useEffect } from 'react';

import '../node_modules/vital-css/dist/css/vital.min.css';
import './App.scss';

import MetadataItem from './components/MetadataItem';
import ItemTitle from './components/ItemTitle';
import ItemDescription from './components/ItemDescription';
import MediaEmbed from './components/MediaEmbed';
import ReviewsSection from './components/ReviewsSection';
import RelatedItem from './components/RelatedItem';
import SectionTitle from './components/SectionTitle';

import fetchMetadata from './services/metadata';
import fetchRelated from './services/relatedItems';

const App = () => {
  const [itemIdentifier, setItemIdentifier] = useState('InformationM');
  const [dataFetched, setDataFetched] = useState(false);
  const [itemMetadata, setItemMetadata] = useState({});
  const [itemRelatedItems, setItemRelatedItems] = useState({});

  const fetchData = (itemIdentifier) => {
    fetchMetadata(itemIdentifier)
      .then((data) => {
        console.log('metadata promise fulfilled');
        console.log(data);
        setItemMetadata(data);
      })
      .then(() => {
        fetchRelated(itemIdentifier)
          .then((data) => {
            console.log('related items fetched');
            setItemRelatedItems(data);
            console.log(data);
          })
          .then(() => {
            console.log('Both metadata and related items fetched.');
            setDataFetched(true);
          });
      });
  };

  useEffect(() => {
    fetchData(itemIdentifier);
  }, [itemIdentifier]);

  const setExampleItem = (event) => {
    event.preventDefault();
    console.log('Chosen item: ', event.target.value);
    setItemIdentifier(event.target.value);
  };

  if (dataFetched) {
    return (
      <>
        <div className="test-items-controller row">
          <div className="section">
            <h3>[Media Type] Item Identifier:</h3>
            <div>
              <form>
                <select id="exampleItems" name="exampleItems" onChange={setExampleItem}>
                  <option value=""> — </option>
                  <option value="artistfileeames">[text] artistfileeames</option>
                  <option value="sy2012-06-09.sb.nak.shivaho.flac16">
                    [etree] sy2012-06-09.sb.nak.shivaho.flac16
                  </option>
                  <option value="emma-eames-who-is-sylvia-victrola-88013-1905">
                    [audio] emma-eames-who-is-sylvia-victrola-88013-1905
                  </option>
                  <option value="InformationM">[movies] InformationM</option>
                  <option value="SEAPATHS">[software] SEAPATHS</option>
                  <option value="archives_uml_077">[image] archives_uml_077</option>
                  <option value="thingiverse-4824942">[data] thingiverse-4824942</option>
                  <option value="perma_cc_D7HA-2FA4">[web] perma_cc_D7HA-2FA4</option>
                  <option value="inlibrary">[collection] inlibrary</option>
                  <option value="%40memoriesofthedaize">[account] @memoriesofthedaize</option>
                </select>
              </form>
            </div>
          </div>
        </div>

        <MediaEmbed mediaType={itemMetadata.metadata.mediatype} itemIdentifier={itemIdentifier} />

        <div className="row">
          <div className="section item-metadata">
            <ItemTitle title={itemMetadata.metadata.title} />
            <ItemDescription description={itemMetadata.metadata.description} />
            <div className="section item-key-metadata">{/* DISPLAY KEY METADATA HERE */}</div>

            <div className="item-metadata-expandable-list">
              <SectionTitle
                title="Full Metadata"
                count={Object.keys(itemMetadata.metadata).length}
              />
              {Object.keys(itemMetadata.metadata).map((key) => {
                return (
                  <MetadataItem key={key} label={key} description={itemMetadata.metadata[key]} />
                );
              })}
            </div>
          </div>

          <ReviewsSection reviews={itemMetadata.reviews} />

          <div className="row">
            <div className="section">
              <SectionTitle title="Related Items" count={itemRelatedItems.length} />
              <div className="related-cards-container">
                {itemRelatedItems.map((item, index) => {
                  return (
                    <RelatedItem key={index} itemSource={item._source} itemIdentifier={item._id} />
                  );
                })}
              </div>
            </div>
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

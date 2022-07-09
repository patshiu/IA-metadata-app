import { useState, useEffect } from 'react';
import { useMatch } from 'react-router-dom';

import '../node_modules/vital-css/dist/css/vital.min.css';
import './App.scss';

import SampleItemsSelector from './components/SampleItemsSelector';
import ItemTitle from './components/ItemTitle';
import ItemDescription from './components/ItemDescription';
import MediaEmbed from './components/MediaEmbed';
import ReviewsSection from './components/ReviewsSection';
import MetadataFullList from './components/MetadataFullList';
import RelatedItemsSection from './components/RelatedItemsSection';

import fetchMetadata from './services/metadata';
import fetchRelated from './services/relatedItems';

const App = () => {
  const match = useMatch('/:id');
  let itemUID;
  if (match.params) {
    itemUID = match.params.id;
  }
  const [itemIdentifier, setItemIdentifier] = useState(itemUID ? itemUID : 'InformationM');
  const [dataFetched, setDataFetched] = useState(false);
  const [itemMetadata, setItemMetadata] = useState({});
  const [itemRelatedItems, setItemRelatedItems] = useState({});

  const fetchData = (itemIdentifier) => {
    setDataFetched(false);
    fetchMetadata(itemIdentifier)
      .then((data) => {
        console.log('metadata promise fulfilled');
        setItemMetadata(data);
      })
      .then(() => {
        fetchRelated(itemIdentifier)
          .then((data) => {
            console.log('related items fetched');
            setItemRelatedItems(data);
          })
          .then(() => {
            console.log('Both metadata and related items fetched.');
            setDataFetched(true);
            window.scrollTo(0, 0);
          });
      });
  };

  useEffect(() => {
    fetchData(itemIdentifier);
    document.title = itemIdentifier;
  }, [itemIdentifier]);

  if (dataFetched) {
    if (Object.keys(itemMetadata).length === 0) {
      return (
        <>
          <SampleItemsSelector setItemIdentifier={setItemIdentifier} />
          <div className="row center">
            <h1>Unable to find the item &apos;{itemIdentifier}&apos;.</h1>
          </div>
        </>
      );
    } else {
      return (
        <>
          <SampleItemsSelector setItemIdentifier={setItemIdentifier} />
          <MediaEmbed mediaType={itemMetadata.metadata.mediatype} itemIdentifier={itemIdentifier} />

          <div className="row">
            <div className="section item-metadata">
              <ItemTitle title={itemMetadata.metadata.title} />
              <ItemDescription description={itemMetadata.metadata.description} />
              <div className="section item-key-metadata">{/* DISPLAY KEY METADATA HERE */}</div>
            </div>
            <div className="row">
              <div className="section">
                <MetadataFullList metadata={itemMetadata.metadata} />
              </div>
              <div className="section">
                <ReviewsSection reviews={itemMetadata.reviews} />
              </div>
            </div>
            <RelatedItemsSection
              relatedItems={itemRelatedItems}
              setItemIdentifier={setItemIdentifier}
            />
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <SampleItemsSelector setItemIdentifier={setItemIdentifier} />
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

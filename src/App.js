import { useState, useEffect } from 'react';
import { useMatch } from 'react-router-dom';

import './vitalCustom.scss';
import './App.scss';

import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import SampleItemsSelector from './components/SampleSelector/SampleItemsSelector';
import PromptSelectItem from './components/PromptSelectItem/PromptSelectItem';
import ItemNotFound from './components/ItemNotFound/ItemNotFound';
import Item from './components/Item';

import fetchMetadata from './api/metadata';
import fetchRelated from './api/relatedItems';

const App = () => {
  const match = useMatch('/:id');
  let itemUID;
  if (match) {
    itemUID = match.params.id;
  }

  const [dataFetched, setDataFetched] = useState(false);
  const [itemMetadata, setItemMetadata] = useState({});
  const [itemRelatedItems, setItemRelatedItems] = useState({});

  const fetchData = async (itemIdentifier, controller) => {
    let [metadata, related] = await Promise.all([
      fetchMetadata(itemIdentifier, controller),
      fetchRelated(itemIdentifier, controller)
    ]);

    if (typeof metadata !== 'undefined') {
      setItemMetadata(metadata);
    }
    if (typeof related !== 'undefined') {
      setItemRelatedItems(related);
    }
    if (typeof metadata !== 'undefined' && typeof related !== 'undefined') {
      setDataFetched(true);
    }
  };

  useEffect(() => {
    if (itemUID !== undefined) {
      setDataFetched(false);
      const controller = new AbortController();
      fetchData(itemUID, controller);
      window.scrollTo(0, 0);
      document.title = itemUID;
      return () => {
        controller.abort();
      };
    } else {
      document.title = 'IA Metata Viewer';
      setDataFetched(true);
    }
  }, [itemUID]);

  if (dataFetched) {
    if (itemUID === undefined) {
      return (
        <>
          <SampleItemsSelector />
          <PromptSelectItem />
        </>
      );
    } else if (Object.keys(itemMetadata).length === 0) {
      return (
        <>
          <SampleItemsSelector />
          <ItemNotFound itemIdentifier={itemUID} />
        </>
      );
    } else {
      return (
        <>
          <SampleItemsSelector />
          <Item
            itemIdentifier={itemUID}
            itemMetadata={itemMetadata}
            itemRelatedItems={itemRelatedItems}
          />
        </>
      );
    }
  } else {
    return (
      <>
        <SampleItemsSelector />
        <LoadingSpinner />
      </>
    );
  }
};

export default App;

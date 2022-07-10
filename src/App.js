import { useState, useEffect } from 'react';
import { useMatch } from 'react-router-dom';

import './vitalCustom.scss';
import './App.scss';

import LoadingSpinner from './components/LoadingSpinner';
import SampleItemsSelector from './components/SampleItemsSelector';
import PromptSelectItem from './components/PromptSelectItem';
import ItemNotFound from './components/ItemNotFound';
import ItemSection from './components/ItemSection';

import fetchMetadata from './services/metadata';
import fetchRelated from './services/relatedItems';

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
    const metadata = await fetchMetadata(itemIdentifier, controller);
    if (typeof metadata !== 'undefined') {
      setItemMetadata(metadata);
    }

    const related = await fetchRelated(itemIdentifier, controller);
    if (typeof related !== 'undefined') {
      setItemRelatedItems(related);
    }

    if (typeof metadata !== 'undefined' && typeof related !== 'undefined') {
      setDataFetched(true);
    }

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (itemUID !== undefined) {
      setDataFetched(false);
      const controller = new AbortController();
      fetchData(itemUID, controller);
      document.title = itemUID;
      return () => {
        controller.abort();
      };
    } else {
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
          <ItemSection
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

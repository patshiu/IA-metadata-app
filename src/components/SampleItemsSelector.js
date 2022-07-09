import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './SampleItemsSelector.scss';

const SampleItemsSelector = ({ setItemIdentifier }) => {
  const navigate = useNavigate();
  const setExampleItem = (event) => {
    event.preventDefault();
    setItemIdentifier(event.target.value);
    navigate('/' + event.target.value, { replace: false });
  };

  return (
    <div className="sample-items-section row">
      <div className="section">
        <h3>[Media Type] Item Identifier:</h3>
        <div>
          <form>
            <select id="example-items-dropdown" name="exampleItems" onChange={setExampleItem}>
              <option value="–"> — </option>
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
  );
};

SampleItemsSelector.propTypes = {
  setItemIdentifier: PropTypes.func.isRequired
};

export default SampleItemsSelector;

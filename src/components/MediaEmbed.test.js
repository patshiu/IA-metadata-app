import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import MediaEmbed from './MediaEmbed';

test('render media embed is media type is texts', () => {
  const mediaType = 'texts';
  const itemIdentifier = 'artistfileeames';

  render(<MediaEmbed mediaType={mediaType} itemIdentifier={itemIdentifier} />);

  const element = screen.getByTestId('media-embed-iframe');
  expect(element).toBeDefined();
});

test('render media embed is media type is etree', () => {
  const mediaType = 'etree';
  const itemIdentifier = 'sy2012-06-09.sb.nak.shivaho.flac16';

  render(<MediaEmbed mediaType={mediaType} itemIdentifier={itemIdentifier} />);

  const element = screen.getByTestId('media-embed-iframe');
  expect(element).toBeDefined();
});

test('render media embed is media type is audio', () => {
  const mediaType = 'audio';
  const itemIdentifier = 'emma-eames-who-is-sylvia-victrola-88013-1905';

  render(<MediaEmbed mediaType={mediaType} itemIdentifier={itemIdentifier} />);

  const element = screen.getByTestId('media-embed-iframe');
  expect(element).toBeDefined();
});

test('render media embed is media type is movies', () => {
  const mediaType = 'movies';
  const itemIdentifier = 'InformationM';

  render(<MediaEmbed mediaType={mediaType} itemIdentifier={itemIdentifier} />);

  const element = screen.getByTestId('media-embed-iframe');
  expect(element).toBeDefined();
});

test('render media embed is media type is software', () => {
  const mediaType = 'software';
  const itemIdentifier = 'SEAPATHS';

  render(<MediaEmbed mediaType={mediaType} itemIdentifier={itemIdentifier} />);

  const element = screen.getByTestId('media-embed-iframe');
  expect(element).toBeDefined();
});

test('render media embed is media type is image', () => {
  const mediaType = 'image';
  const itemIdentifier = 'archives_uml_077';

  render(<MediaEmbed mediaType={mediaType} itemIdentifier={itemIdentifier} />);

  const element = screen.getByTestId('media-embed-iframe');
  expect(element).toBeDefined();
});

test('do NOT render media embed is media type is data', () => {
  const mediaType = 'data';
  const itemIdentifier = 'thingiverse-4824942';

  const rendered = render(<MediaEmbed mediaType={mediaType} itemIdentifier={itemIdentifier} />);

  expect(rendered.queryByTestId('media-embed-iframe')).toBeNull();
});

test('do NOT render media embed is media type is web', () => {
  const mediaType = 'web';
  const itemIdentifier = 'perma_cc_D7HA-2FA4';

  const rendered = render(<MediaEmbed mediaType={mediaType} itemIdentifier={itemIdentifier} />);

  expect(rendered.queryByTestId('media-embed-iframe')).toBeNull();
});

test('do NOT render media embed is media type is collection', () => {
  const mediaType = 'collection';
  const itemIdentifier = 'inlibrary';

  const rendered = render(<MediaEmbed mediaType={mediaType} itemIdentifier={itemIdentifier} />);

  expect(rendered.queryByTestId('media-embed-iframe')).toBeNull();
});

test('do NOT render media embed is media type is account', () => {
  const mediaType = 'account';
  const itemIdentifier = '%40memoriesofthedaize';

  const rendered = render(<MediaEmbed mediaType={mediaType} itemIdentifier={itemIdentifier} />);

  expect(rendered.queryByTestId('media-embed-iframe')).toBeNull();
});

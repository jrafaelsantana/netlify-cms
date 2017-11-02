import React from 'react';
import { Button, BrowseButton } from 'react-toolbox/lib/button';
import Loader from '../UI/loader/Loader';

const MediaLibraryFooter = ({
  onDelete,
  onPersist,
  onClose,
  onInsert,
  hasSelection,
  forImage,
  canInsert,
  isPersisting,
  isDeleting,
}) => {
  const shouldShowLoader = isPersisting || isDeleting;
  const loaderText = isPersisting ? 'Uploading...' : 'Deleting...';
  const loader = (
    <div className="nc-mediaLibrary-button-loader">
      <Loader className="nc-mediaLibrary-button-loaderSpinner" active/>
      <strong className="nc-mediaLibrary-button-loaderText">{loaderText}</strong>
    </div>
  );
  return (
    <div>
      <Button
        label="Delete"
        onClick={onDelete}
        className="nc-mediaLibrary-buttonLeft"
        disabled={shouldShowLoader || !hasSelection}
        accent
        raised
      />
      <BrowseButton
        label="Upload"
        accept={forImage}
        onChange={onPersist}
        className="nc-mediaLibrary-buttonLeft"
        disabled={shouldShowLoader}
        primary
        raised
      />
      { shouldShowLoader ? loader : null }
      <Button
        label="Close"
        onClick={onClose}
        className="nc-mediaLibrary-buttonRight"
        raised
      />
      { !canInsert ? null :
        <Button
          label="Insert"
          onClick={onInsert}
          className="nc-mediaLibrary-buttonRight"
          disabled={!hasSelection}
          primary
          raised
        />
      }
    </div>
  );
};

export default MediaLibraryFooter;

import React from 'react';

function renderIcon(param) {
    switch (param) {
      case 'pptx': return <i className="far fa-file-powerpoint fa-3x"></i>;
      case 'ppt': return <i className="far fa-file-powerpoint fa-3x"></i>;
      case 'pdf': return <i className="far fa-file-pdf fa-3x"></i>;
      case 'movie': return <i className="far fa-file-video fa-3x"></i>
      case 'doc': return <i className="far fa-file-word fa-3x"></i>;
      case 'docx': return <i className="far fa-file-word fa-3x"></i>;
      default: return '';
    }
  }

  export default renderIcon;
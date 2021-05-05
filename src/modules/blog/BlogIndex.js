import React, { useRef } from 'react';
// import tinymce from 'tinymce/tinymce';
import '@tinymce/tinymce-react'
import BlogPost from './Components/BlogPost';

export default function BlogIndex() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <React.Fragment>
      <BlogPost />
    </React.Fragment>
  );
}

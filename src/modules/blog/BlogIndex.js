import React, { useRef } from 'react';
// import tinymce from 'tinymce/tinymce';
import '@tinymce/tinymce-react'
import { Editor } from '@tinymce/tinymce-react';

export default function BlogIndex() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="relative mx-4 my-4">
      <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        apiKey="42w1wak35v1aannpa8a8o5camazvi8cbr22t3zm8lmnw5bbu"
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          // menubar: 'insert',
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
            'bold italic underline backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help | image | code',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  );
}

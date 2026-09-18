import { useState, useEffect, useRef } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [Pdf, setPdf] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(1 / 1.414);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    import('react-pdf').then((mod) => {
      mod.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`;
      setPdf({ Document: mod.Document, Page: mod.Page });
    });
  }, []);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (!Pdf) return <p>Loading PDF...</p>;
  const { Document, Page } = Pdf;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onPageLoadSuccess(page) {
    setAspectRatio(page.width / page.height);
  }

  const buttonStyle = {
    position: 'relative',
    zIndex: '1',
    width: 'fit-content',
    aspectRatio: '1 / 1',
    border: '1px solid #161419',
    borderRadius: '50%',
    color: '#161419',
    background: '#fff',
    fontSize: '2vw',
    lineHeight: '1',
    cursor: 'pointer',
    margin: '1rem',
  };

  return (
    <div style={{ padding: '4rem 0rem' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
          style={buttonStyle}
        >
          ←
        </button>

        <div
          ref={containerRef}
          style={{
            width: '100%',
            maxWidth: '100vw',
            boxSizing: 'border-box',
            overflow: 'hidden',
            aspectRatio: aspectRatio,
          }}
        >
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {containerWidth > 0 && (
              <Page
                pageNumber={pageNumber}
                loading=""
                width={containerWidth}
                onLoadSuccess={onPageLoadSuccess}
              />
            )}
          </Document>
        </div>

        <button
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
          style={buttonStyle}
        >
          →
        </button>
      </div>
      <p style={{ textAlign: 'center', fontFamily: 'Playfair Display, serif' }}>
        {' '}
        {pageNumber} / {numPages}
      </p>
    </div>
  );
}

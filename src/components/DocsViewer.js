import "./DocsViewer.css";
const DocsViewer = () => {
  const htmlContent = "<p style='color:red'>This is your HTML content</p>";
  return (
    <div className="DocsViewer">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
};

export default DocsViewer;

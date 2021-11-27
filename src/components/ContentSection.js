import StyledDataGrid from "./DataGrid/StyledDataGrid.js";

const ContentSection = ({ bookmarks, setBookmarks, ...props }) => {

  return (
    <>
      <h1>Test</h1>
      <StyledDataGrid
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
    </>
  )
}


export default ContentSection
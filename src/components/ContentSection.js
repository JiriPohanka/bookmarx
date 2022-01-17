import StyledDataGrid from "./DataGrid/StyledDataGrid.js";

const ContentSection = ({ bookmarks, setBookmarks, ...props }) => {

  return (
    <>
      <StyledDataGrid
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
    </>
  )
}


export default ContentSection
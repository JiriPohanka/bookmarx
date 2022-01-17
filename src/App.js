import ContentSection from "./components/ContentSection"
import { useState } from "react"
import BookmarkObj from "./helpers/BookmarkObj"
import updateLocalStorage from "./helpers/updateLocalStorage"
import { v4 } from "uuid"
import Header from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom"

const App = () => {

    const [autoSubmit, setAutoSubmit] = useState(false)

    const sampleBookmark = new BookmarkObj("Example Bookmark", "most of these are automatically generated")

    const startingBookmarks = [sampleBookmark]

    const [bookmarks, setBookmarks] = useState(JSON.parse(window.localStorage.getItem('bookmarks'))
        ?.map(bookmark => new BookmarkObj(bookmark.title, bookmark.description, bookmark.url, bookmark.itemType)) ?? startingBookmarks)

    const addBookmark = (title, description, url, type, rating, keywords) => {
        const newBookmark = new BookmarkObj(title, description, url, type, rating, keywords)
        setBookmarks([newBookmark, ...bookmarks])
        updateLocalStorage(bookmarks, 'bookmarks')
    }

    function deleteBookmark(bookmarkId) {
        const i = bookmarks.map(bookmark => bookmark.id === bookmarkId).indexOf(true)
        const newBookmarks = bookmarks.map(bookmark => bookmark)
        newBookmarks.splice(i, 1)
        setBookmarks(newBookmarks)
        updateLocalStorage(newBookmarks, 'bookmarks')
    }

    return (
        <BrowserRouter>
            <Header autoSubmit={autoSubmit} setAutoSubmit={setAutoSubmit} />
            <ContentSection
                bookmarks={bookmarks}
                setBookmarks={setBookmarks}
                addBookmark={addBookmark}
                deleteBookmark={deleteBookmark}
            />
        </BrowserRouter>
    )
}

export default App

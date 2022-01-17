import { v4 } from "uuid"

class BookmarkObj {

    constructor(
        title = "",
        description = "No description available",
        url = "#",
        itemType = "buffer",
        keywords = [],
        rating = 0) {
        this.title = title
        this.description = description
        this.url = url
        this.id = v4()
        this.type = itemType
        this.keywords = keywords
        this.rating = rating
        this.moveToLibrary = this.moveToLibrary.bind(this)
        this.moveToBuffer = this.moveToBuffer.bind(this)
        this.moveToArchive = this.moveToArchive.bind(this)
        this.setRating = this.setRating.bind(this)
        this.setKeywords = this.setKeywords.bind(this)
    }

    setRating(num) {
        this.rating = num
    }

    setKeywords(hashtagArr) {
        this.keywords = hashtagArr
    }

    moveToLibrary() {
        this.type = "library"
    }

    moveToBuffer() {
        this.type = "buffer"
    }

    moveToArchive() {
        this.type = "archive"
    }
}

export default BookmarkObj

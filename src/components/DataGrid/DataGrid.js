import DragItem from "../DragItem.js";
import { DragDropContext } from "react-dnd";
import MultiBackend from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/lib/HTML5toTouch";
import produce from "immer";
import { Flipper, Flipped } from "react-flip-toolkit";
import arrayMove from "array-move";

// grid with dnd logic
const DataGrid = ({ className, bookmarks, setBookmarks }
) => {

    const moveCard = (dragIndex, hoverIndex) => {
        // Same group - just reorder
        setBookmarks(produce(bookmarks, draft => draft = arrayMove(draft, dragIndex, hoverIndex)))
    }

    let projectData,
        flipId = "";

    projectData =
        <div className={className}>
            {bookmarks.map((item, index) => (
                <Flipped key={item.id} flipId={item.id}>
                    <DragItem
                        item={item}
                        key={item.id}
                        index={index}
                        moveCard={moveCard}
                    />
                </Flipped>
            ))}
        </div>

    return (
        <Flipper flipKey={flipId} spring="stiff">
            {projectData}
        </Flipper>
    )
}

// highest component needs to be wrapped in DragDropContext
export default DragDropContext(MultiBackend(HTML5toTouch))(DataGrid)

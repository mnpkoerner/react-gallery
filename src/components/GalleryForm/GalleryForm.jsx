export default function GalleryForm({
    sendNewCard,
    newPath,
    newDescription,
    setNewPath,
    setNewDescription
}) {
    return(

            <form className="form-insert">
                <label for="pathIn">New Image Path:</label>
                <input
                    type="text"
                    id="pathIn"
                    placeholder="new image path"
                    onChange={(event)=> setNewPath(event.target.value)}
                    value={newPath}
                    />
                <label for="description">Description:</label>
                <textarea
                    rows="3"
                    cols="10"
                    maxlength="215"
                    id="description"
                    placeholder="image description..."
                    onChange={(event)=> setNewDescription(event.target.value)}
                    value={newDescription}
                    />
                <label for="submitButton">Submit your story: </label>
                <button
                id="submitButton"
                onClick={()=>sendNewCard()}
                >#itneverends</button>
            </form>


    )
}

const EditTutorial = ({
  title,
  setTitle,
  description,
  setDescription,
  editTutorial,
  id
}) => {
  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form  onSubmit={(e)=>{
                console.log("submit");
          
                editTutorial({
                  id:id,
                  title:title,
                  description:description,
                },e)
              }}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                  Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Enter your Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <button
             
                className="btn btn-primary"
                data-bs-dismiss={title && description ? "modal" :""}
        
              >
                Save changes
              </button>
              </form>
            </div>
            <div className="modal-footer">
           
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;

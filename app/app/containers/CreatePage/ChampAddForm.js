import React from 'react';

const ChampAddForm = ({ role }) => {
    return (
        <form className="form-horizontal">
            <fieldset>
                <legend>Add of a champion for the { role } role</legend>
                <div className="form-group">
                 <label forHtml="select" className="col-lg-2 control-label">Champ Name</label>
                 <div className="col-lg-10">
                   <select className="form-control" id="select">
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                   </select>
                 </div>
               </div>
                <div className="form-group">
                 <label forHtml="textArea" className="col-lg-2 control-label">Why picking it</label>
                 <div className="col-lg-10">
                   <textarea className="form-control" rows="3" id="textArea"></textarea>
                   <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                 </div>
               </div>
               <div className="form-group">
                <label forHtml="textArea" className="col-lg-2 control-label">Against wich champ</label>
                <div className="col-lg-10">
                  <textarea className="form-control" rows="3" id="textArea"></textarea>
                  <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                </div>
              </div>
              <div className="form-group">
               <label forHtml="textArea" className="col-lg-2 control-label">With wich champ</label>
               <div className="col-lg-10">
                 <textarea className="form-control" rows="3" id="textArea"></textarea>
                 <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
               </div>
             </div>
             <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button type="reset" className="btn btn-default">Back to List</button>
                <button type="submit" className="btn btn-primary">Add Champ</button>
              </div>
            </div>
            </fieldset>
        </form>
    );
}

export default ChampAddForm;
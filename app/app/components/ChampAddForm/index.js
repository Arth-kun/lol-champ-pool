import React from 'react';
import { Link } from 'react-router';

import ChampSelect from 'containers/ChampSelect/index';

const ChampAddForm = ({ role }) => {

    return (
        <form className="form-horizontal">
            <fieldset>
                <legend>Add a champion { role }</legend>
                <div className="form-group">
                 <label htmlFor="select" className="col-lg-2 control-label">Lane</label>
                 <div className="col-lg-10">
                 <select className="form-control" id="select">
                    <option value='top'>Top</option>
                    <option value='jungle'>Jungle</option>
                    <option value='mid'>Mid</option>
                    <option value='adc'>Adc</option>
                    <option value='support'>Support</option>
                 </select>
                 </div>
               </div>
                <div className="form-group">
                 <label htmlFor="select" className="col-lg-2 control-label">Champion</label>
                 <div className="col-lg-10">
                 <ChampSelect />
                 </div>
               </div>
                <div className="form-group">
                 <label htmlFor="textArea" className="col-lg-2 control-label">Why picking it</label>
                 <div className="col-lg-10">
                   <textarea className="form-control" rows="3" id="textArea"></textarea>
                   <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                 </div>
               </div>
               <div className="form-group">
                <label htmlFor="textArea" className="col-lg-2 control-label">Against wich champ</label>
                <div className="col-lg-10">
                  <textarea className="form-control" rows="3" id="textArea"></textarea>
                  <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                </div>
              </div>
              <div className="form-group">
               <label htmlFor="textArea" className="col-lg-2 control-label">With wich champ</label>
               <div className="col-lg-10">
                 <textarea className="form-control" rows="3" id="textArea"></textarea>
                 <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
               </div>
             </div>
             <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <Link to='/' type="reset" className="btn btn-default">Back to List</Link>
                <Link type="submit" className="btn btn-primary">Add Champ</Link>
              </div>
            </div>
            </fieldset>
        </form>
    );
}

export default ChampAddForm;

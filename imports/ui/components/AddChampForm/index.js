import React from 'react';
import { Link } from 'react-router';
import immutable from 'immutable';

import { lanes,  } from '../../utils/settings';

const AddChampForm = ({ champsList, champ, champId, image }) => (
  <form className="form-horizontal">
    <fieldset>
      <legend>Add a champion</legend>
      <div className="form-group">
       <label htmlFor="select" className="col-lg-2 control-label">Lane</label>
       <div className="col-lg-10">
       <select className="form-control" id="selectLanes">
        { lanes.map(lane => (
          <option key={lane} value={lane}>{lane}</option>
        )) }
       </select>
       </div>
     </div>
      <div className="form-group">
       <label htmlFor="select" className="col-lg-2 control-label">Champion</label>
       <div className="col-lg-10">
         <dl className="dl-horizontal">
             <dt>{image && <Img src={lolImageApiUrl + image} alt="Champ selected image sprite" />}</dt>
             <dd>
                 <select className="form-control" id="selectChamp" onChange={this.handleChange}>
                  { champsList.size > 0 && champsList.map(champ => (
                    <option key={champ.id} value={champ.id}>champ.name}</option>
                  )) }
                 </select>
                 <span className="help-block">{champ.title && champ.title.charAt(0).toUpperCase() + champ.title.slice(1)}</span>
             </dd>
         </dl>
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

export default AddChampForm;

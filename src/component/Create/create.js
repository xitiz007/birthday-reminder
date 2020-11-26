import React from 'react';
import Spinner from '../../component/Spinner/Spinner';
import Aux from '../../hoc/Aux';

const Create = (props) => 
{
    const Form = <Aux>
    <form className="formStyle" onSubmit={props.onSubmitHandler}>
        <div className="form-group">
            <label htmlFor="personName">Person Name</label>
            <input required type="text" className="form-control" id="personName" placeholder="full name..." value={props.fullname} onChange={props.fullNameChangeHandler} />
        </div>
        <div className="form-group">
            <label htmlFor="birthDate">Birth date : </label>
            <input required type="date" id="birthDate" onChange={props.dateChangeHandler} />
        </div>
        <div className="form-group">
            <label htmlFor="file">select person image</label>
            <input required type="file" onChange={props.fileChangeHandler} id="file" name="file" accept="image/x-png,image/gif,image/jpeg"/>
        </div>
        <button type="submit" className="btn btn-success btn-lg btn-block">Save</button>
    </form>
    </Aux>

    const UI = props.loading ? <Spinner /> : Form;

    return (
        <>
            {UI}
        </>
    )
}

export default Create;
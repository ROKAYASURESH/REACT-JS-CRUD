import React, { useEffect } from 'react'
import { useState } from 'react'
import { PostData } from '../api/PostApi';

export default function Form({ data , setData, setUpdateDataApi, updateDataApi}) {
	const [addData, setAddData] = React.useState({
		title: '',
		body: ''
	});

	// get the updatedata
	useEffect(() => {
		if (updateDataApi) {
			setAddData(updateDataApi)
		}
		
	},[updateDataApi])

	const handleInputChange = (e) => {
		// const { name, value } = e.target;
		// setAddData({ ...addData, [name]: value });

		const name=e.target.name;
		const value = e.target.value;
		setAddData((prevData) => ({
			...prevData,
			[name]: value	
		}
	))
	};


	const addPostData = async () => {
		const res = await PostData(addData)
		if (res.status === 201) {
			setData([...data, res.data])
			setAddData({ title: '', body: '' })
		}
		// setData([...data, res.data])
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(addData);
		addPostData();
	}

  return (
	<div>
	  <form action="" onSubmit={handleSubmit}>
		<div>
		  <label htmlFor="title">Title</label>
		  {/* <input type="text" name="title" id="title" value={addData.title} onChange={(e) => setAddData({ ...addData, title: e.target.value })} /> */}
		  <input type="text" name="title" id="title" value={addData.title} onChange={(e) => handleInputChange(e)}/>
		</div>
		<div>
		  <label htmlFor="title">body</label>
		  <input type="text" name="body" id="body" value={addData.body} onChange={(e) => setAddData({ ...addData, body: e.target.value }) } />
		</div>
		<div>
		  <button type="submit" style={{ marginTop: '10px', borderRadius: '5px', border: '1px solid black', backgroundColor: 'blue', color: 'white' }}>Submit</button>
		</div>
	  </form>
	</div>
  )
}

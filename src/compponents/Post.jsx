import React, { use , useEffect} from 'react'
import { getPosts, getDeletePost } from '../api/PostApi'
import Form from './Form'
export default function Post() {
	console.log(getPosts())
	const [data,setData]=React.useState([])

	const getPostData = async ()=>{
		const res = await getPosts()
		setData(res.data)
	}

	const handleDelete =async(id)=>{
		try{
			const res = await getDeletePost(id)
			if (res.status === 200) {
				const newDleteData = data.filter((item)=>{
					return item.id !== id
				})
				setData(newDleteData)
			}
			
		}catch(err){
		if(err.response){
			console.log(err.response.data)
		}else{
			console.log(err.message)
		}
		}
	}
	useEffect(()=>{
		getPostData()
	},[])

	// update
	const [updateDataApi, setUpdateDataApi] = React.useState({})
	const handleUpdatePost =(data)=>setUpdateDataApi(data)
  return (
	<section className='container'>	

	 <div>
		<Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi}/>
	 </div>
	<ul>
		{
			data.map((item)=>{
				const {id, title, body} = item
				return <li key={item.id}>
					<p>{id}</p>
					<p> {title}</p>
					<p>{body}</p>
					<button onClick={()=>handleUpdatePost(item)}>Edit</button>
					<button onClick={()=>handleDelete(id)}>Delete</button>
				</li>
			})
		}
	</ul>

	</section>
  )
}

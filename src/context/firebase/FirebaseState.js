import React,{useReducer} from 'react';
import axios from 'axios';
import {FirebaseContext} from './firebaseContext';
import {firebaseReducer} from './firebaseReducer';
import {ADD_NOTE, FETCH_NOTES,REMOVE_NOTE,SHOW_LOADER} from '../types';

const url = process.env.REACT_APP_DB_URL
export const FirebaseState=({children})=>{
	const initialState={
		notes:[],
		loading: false
	}
	const [state,dispatch]=useReducer(firebaseReducer,initialState)

	const showLoader=()=>dispatch({type:SHOW_LOADER})
	const fetchNotes=async()=>{
		showLoader()
		const res= await axios.get('https://react-hooks-1-45a70.firebaseio.com/notes.json').then(res=>{
			//console.log(res.data);
		const payload =	Object.keys(res.data).map(key=>{
				return{
					...res.data[key],
					id: key
				}
			})
		dispatch({
			type:FETCH_NOTES, payload
		})

		});
		//console.log('fetchNotes', res.data);
	}
	const addNote= async title=>{
		const note={
			title, date: new Date().toJSON()
		}
		try{
			const res=  await axios.post('https://react-hooks-1-45a70.firebaseio.com/notes.json', note
	).then(function(response){
			//console.log(response.data);
			const payload={
				...note,
				id: response.data.name
			}
			dispatch({
				type: ADD_NOTE,
				payload
			})
		})
		//console.log('addNote', res.data);

		} catch (e) {
			console.log("error");

	};
	 
    
		
	}
	const removeNote= async id=>{
		await axios.delete(`https://react-hooks-1-45a70.firebaseio.com/notes/${id}.json`)
		dispatch({
			type: REMOVE_NOTE,
			payload:id
		})

	}
	return(
		<FirebaseContext.Provider value={{
			showLoader, addNote,removeNote,fetchNotes,
			loading: state.loading,
			notes: state.notes

		}}>
		{children}
		</FirebaseContext.Provider>
		)

}
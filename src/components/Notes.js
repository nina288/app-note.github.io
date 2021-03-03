import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import '../index.css';
import {ListGroup} from 'react-bootstrap';


export const Notes=({notes, onRemove})=>(
	  <ListGroup style={{ marginBottom: '1rem' }}>
        <TransitionGroup className="list-group">
	
		{notes.map(note=>(
			<CSSTransition
			key={note.id}
			classNames={'note'}
			timeout={800}
			>
			 <ListGroup.Item className="notes">
			<div>
			<strong>{note.title}</strong>&nbsp;
			
			<small>{note.date}</small>
			</div>
			&nbsp; &nbsp;
			<button
			 type="button" 
			 className="btn btn-danger btn-sm"
			 onClick={()=>onRemove(note.id)}
			 >
			 &times;
			 </button>
			 </ListGroup.Item>
            </CSSTransition>

			))}
		  </TransitionGroup>
      </ListGroup>
		


		
	
	 
		)
	
		
		

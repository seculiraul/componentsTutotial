import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';


const App = () => {

    return (
    <div className='ui container comments'>
        <CommentDetail
            author= 'Sam'
            timeAgo= "Today"
            text="Nice"
            photo={faker.image.cats()}/>
        <CommentDetail
            author= 'Jane' 
            timeAgo="Yesterday" 
            text="Super" 
            photo={faker.image.cats()}/>
        <CommentDetail
            author= 'Alex'
            timeAgo="2 min ago"
            text="Great Blog"
            photo={faker.image.cats()}/>
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
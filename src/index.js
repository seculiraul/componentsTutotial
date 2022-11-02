import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import AprovalCard from './AprovalCard';
import faker from 'faker';
import './style/App.css'


const App = () => {

    return (
    <div className='ui container comments'>
        <AprovalCard>
            <div>
                <h2>Warning</h2>
            </div>
            Are you sure?
        </AprovalCard>
        <AprovalCard >
            <CommentDetail
                author= 'Sam'
                timeAgo= "Today"
                text="Nice"
                photo={faker.image.cats()}
            />
        </AprovalCard>
        <AprovalCard>
            <CommentDetail
                author= 'Jane' 
                timeAgo="Yesterday" 
                text="Super" 
                photo={faker.image.cats()}
            />
        </AprovalCard>
        <AprovalCard>
            <CommentDetail
                author= 'Alex'
                timeAgo="2 min ago"
                text="Great Blog"
                photo={faker.image.cats()}
            />
        </AprovalCard>
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));
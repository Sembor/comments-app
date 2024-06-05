import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

async function App() {
  const [count, setCount] = useState(0);
  const [comments, setComments] = useState({});

  const commentsRes = await getCommentsList();
  setComments(commentsRes);

  return (
    <>
      <div>
        <h1>Comments</h1>
      </div>
      <div>
        {comments ? comments.map((element) => <tableCell>element.name</tableCell>) : null}
      </div>
    </>
  );
}

async function getCommentsList() {
  let commentsList = null;
  let commentsListResponse = await fetch(
    'https://gorest.co.in/public/v2/comments'
  );
  commentsList = commentsListResponse.json();

  //let ;

  return commentsList;
}


const tableCell = (element) => {
  return (<div className='tableCell'>
      <h2 className='tableCellName'>element.name</h2>
      <p className='tableCellBody'> element.body </p>
      <image src='../public/assets/unlike.png' />
    </div>)
}

export default App;

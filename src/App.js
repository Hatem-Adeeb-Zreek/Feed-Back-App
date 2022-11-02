function App() {
  const title = 'Feed Back App';
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const comments = [
    {id:1, text: 'comment1'},
    {id:2, text: 'comment2'},
    {id:3, text: 'comment3'}
  ];
  const showComments = true; // false to hide
  const commentBlock = (
    <div className="comments">
    <h3>Comments: {comments.length}</h3>
    <ul>
      {comments.map((comment, index)=> (
        <li key={index}>{comment.text}</li>
      ))}
    </ul>
   </div>
  );
  return (
    <div className="container">
       <h1>{title}</h1>
       <p>{text}</p>
       {showComments && commentBlock}
      
    </div>
  )
}
export default App;
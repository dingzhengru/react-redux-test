import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function App() {
  const counter = useSelector(state => state.counter.value);
  const blogPostList = useSelector(state => state.blog.postList);
  const dispatch = useDispatch();

  const handleCounterIncrease = () => {
    dispatch({ type: 'counter/increase' });
  };

  useEffect(() => {
    async function fetchBlogPostList() {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: 'blog/setPostList', data: result.data });
      return result.data;
    }

    fetchBlogPostList();
  }, [dispatch]);

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="App-logo" alt="logo" width="100" />
      </header>
      <div>
        <h2>Redux</h2>
        <h2>Counter</h2>
        <div>
          counter: {counter}
          <button onClick={handleCounterIncrease}>dispatch('counter/increase')</button>
        </div>
        <h2>Blog PostList</h2>
        <div>
          <ul>
            {blogPostList.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

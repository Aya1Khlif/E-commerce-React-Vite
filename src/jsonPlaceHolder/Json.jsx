
//https://jsonplaceholder.typicode.com/posts
import  { useEffect, useState } from 'react';
import axios from 'axios';
export default function Json() {
  const [data, setData] = useState(null);
  const [newPostTitle, setNewPostTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data.slice(0, 10));
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  const handleAddPost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: newPostTitle,
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
      });
      setData([...data, response.data]);
      setNewPostTitle('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newPostTitle}
        onChange={(e) => setNewPostTitle(e.target.value)}
        placeholder="Enter post title"
      />
      <button onClick={handleAddPost}>Add Post</button>

      {data ? (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {data.map((post) => (
            <div key={post.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', margin: '10px' }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

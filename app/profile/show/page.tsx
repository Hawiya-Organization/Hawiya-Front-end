"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const PoemPage = () => {
  const [poem, setPoem] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchPoem = async () => {
        try {
          const response = await axios.get(`/api/poems/show/${id}`);
          setPoem(response.data);
        } catch (error) {
          setError('Failed to fetch poem');
        }
      };

      fetchPoem();
    }
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!poem) return <div className='justify-center items-center w-screen h-screen flex'><FontAwesomeIcon size='xl' icon={faSpinner} spinPulse style={{color: "#4ea664", width: '120px'}} /> </div>;

  return (
    <div>
      <h1>{poem.title}</h1>
      <p>{poem.author_name}</p>
      {poem.bayts.map((bayt, index) => (
        <div key={index}>
          <p>{bayt.content.sadr}</p>
          <p>{bayt.content.ajoz}</p>
        </div>
      ))}
    </div>
  );
};

export default PoemPage;

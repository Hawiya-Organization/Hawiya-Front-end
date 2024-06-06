"use client"
import PersonalPoemCard from '@/components/Profile/personal.poem'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function MyPoems() {
  const [poems, setPoems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const response = await axios.get('/api/poems/my_poems');
        console.log(response)
        setPoems(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching poems:', error);
        setError('Failed to fetch poems');
        setLoading(false);
      }
    };

    fetchPoems();
  }, []);

  if (loading) return <div className='justify-center items-center h-screen flex'><FontAwesomeIcon size='xl' icon={faSpinner} spinPulse style={{color: "#4ea664", width: '120px'}} /> </div>;
  ;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex gap-5 items-center">
      <div className="grid grid-cols-3 p-6 rounded-2xl border border-green h-[80vh] overflow-y-scroll gap-4">
        {poems.map((poem) => (
          <PersonalPoemCard 
            key={poem.id} 
            id={poem.id}
            title={poem.title} 
            date={new Date().toLocaleDateString()}
          />
        ))}
      </div>
    </div>
  );
}

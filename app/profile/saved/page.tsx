"use client"
import PoemCard from '@/components/Peoms/poem.card'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function SavedPoems() {
        const [savedPoems, setSavedPoems] = useState([])
        useEffect(() => {
        const fetchSavedPoems = async () => {
                try {
                  const response = await axios.get(`/api/poems/saved`);
                  console.log(response.data)
                  setSavedPoems(response.data.data)
                } catch (error) {
                        console.log(error)
                }
              };
        
              fetchSavedPoems();
        });
        return (
                <div className="flex gap-5 items-center">
                        <div className="grid grid-cols-3 p-6 rounded-2xl border border-green h-[80vh] overflow-y-scroll gap-4">
                                {savedPoems.map((poem) => (
                                        <PoemCard 
                                                key={poem.id}
                                                title={poem.title}
                                                author={poem.author_name} id={poem.id} writingType={poem.bahr_type}                                        />
                                        ))}
                        </div>
                </div>
        )
}

"use client"
import PersonalInfo from '@/components/Profile/personal.info'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../lib/store';


export default function Account() {
        const auth = useSelector((state: RootState) => state.auth);
        return (
                <div className="flex gap-5 items-center">
                        <PersonalInfo email={auth.user?.email} username={auth.user?.username} bio='someone who loves coffee only'></PersonalInfo>
                </div>
        )
}

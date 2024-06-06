import React from 'react'
import DeleteBtn from './delete.btn'
import EditBtn from './edit.btn'
import Link from 'next/link'

interface IPoem {
        id: number,
        title: string,
        date: string
}

export default function PersonalPoemCard({ title, date , id}: IPoem) {
        return (
                <Link href={`/display_poem?id=${id}`}>

                <div className="flex flex-col w-[280px] h-[160px] pt-8 px-8 pb-2 gap-6 justify-between rounded-xl bg-green-light ">
                        <div className="text-2xl font-amiri text-center text-green-darker">{title}</div>
                        <div className="flex w-full justify-between">
                                <EditBtn id='2' path='/'></EditBtn>
                                <DeleteBtn id='2'></DeleteBtn>
                        </div>

                </div>
                </Link>
        )
}

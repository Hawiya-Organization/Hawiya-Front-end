import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const search = String(formData.get('search'))

    const poems = [
        {
            poetry: 'اسم القصيدة 1',
            author: 'اسم الشاعر 1',
            content: [
                'هِيَ السِحرُ إِلّا أَنَّ لِلسِحرِ رُقيَةً ... وَأَنِّيَ لا أُلفي لَها الدَهرَ راقَيا',
                'إِذا نَحنُ أَدلَجنا وَأَنتِ أَمامَنا ... كَفا لِمَطايانا بِذِكراكِ هادِيا'
            ]
        },
        {
            poetry: 'اسم القصيدة 2',
            author: 'اسم الشاعر 2',
            content: [
                'هِيَ السِحرُ إِلّا أَنَّ لِلسِحرِ رُقيَةً ... وَأَنِّيَ لا أُلفي لَها الدَهرَ راقَيا',
                'إِذا نَحنُ أَدلَجنا وَأَنتِ أَمامَنا ... كَفا لِمَطايانا بِذِكراكِ هادِيا'
            ]
        },
        {
            poetry: 'اسم القصيدة 3',
            author: 'اسم الشاعر 3',
            content: [
                'هِيَ السِحرُ إِلّا أَنَّ لِلسِحرِ رُقيَةً ... وَأَنِّيَ لا أُلفي لَها الدَهرَ راقَيا',
                'إِذا نَحنُ أَدلَجنا وَأَنتِ أَمامَنا ... كَفا لِمَطايانا بِذِكراكِ هادِيا'
            ]
        }
    ]

    return NextResponse.json({ poems });
}

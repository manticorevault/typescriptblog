import { previewData } from "next/headers";
import { groq } from "next-sanity";

const query = groq`
    
`

export default function HomePage() {
    if (previewData()) {
        return (
            <div>
                Preview Mode
            </div>
        )
    }

    return (
        <div>
            Regular mode
        </div>
    )
}
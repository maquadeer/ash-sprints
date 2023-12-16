import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const postPreview = (props: PostMetadata) => {
    return(

     <div className="border border-violet-400 p-4 rounded-md shadow-md h-full w-full bg-purple-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100">
        <Link href={`/posts/${props.slug}`}>
            <h2 className="font-bold text-violet-600 hover:underline"> {props.slug} </h2>
        </Link>
        <p className="text-slate-600">{props.subtitle}</p>
        <p className="text-slate-400">{props.date}</p>
    </div>
    );
}
export default postPreview;

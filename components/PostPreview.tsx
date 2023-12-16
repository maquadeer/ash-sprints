import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const postPreview = (props: PostMetadata) => {
    return(

     <div className="border border-violet-400 p-4 rounded-md shadow-md bg-gradient-to-r from-rose-100 to-teal-100">
        <Link href={`/posts/${props.slug}`}>
            <h2 className="font-bold text-violet-600 hover:underline"> {props.slug} </h2>
        </Link>
        <p className="text-slate-600">{props.subtitle}</p>
        <p className="text-slate-400">{props.date}</p>
    </div>
    );
}
export default postPreview;

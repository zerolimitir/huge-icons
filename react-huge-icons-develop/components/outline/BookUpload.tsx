import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookUpload = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M9.47 7.055a.75.75 0 0 0 1.06 1.061l-1.06-1.06Zm3.237-.762-.53.53.53-.53Zm.763 1.823a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-2.22 3.47a.75.75 0 0 0 1.5 0h-1.5Zm1.5-5a.75.75 0 0 0-1.5 0h1.5Zm-2.22 1.53 1.293-1.293-1.06-1.06L9.47 7.055l1.06 1.061Zm1.647-1.293 1.293 1.293 1.06-1.06-1.293-1.293-1.06 1.06Zm-.354 0a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0l1.06 1.06Zm.927 4.763v-5h-1.5v5h1.5ZM7 2.75h10v-1.5H7v1.5ZM4.75 19V5h-1.5v14h1.5Zm14.5-14v11h1.5V5h-1.5ZM17 2.75A2.25 2.25 0 0 1 19.25 5h1.5A3.75 3.75 0 0 0 17 1.25v1.5ZM7 1.25A3.75 3.75 0 0 0 3.25 5h1.5A2.25 2.25 0 0 1 7 2.75v-1.5Zm0 15.5h13v-1.5H7v1.5ZM19.25 16v3h1.5v-3h-1.5ZM17 21.25H7v1.5h10v-1.5Zm-10 0A2.25 2.25 0 0 1 4.75 19h-1.5A3.75 3.75 0 0 0 7 22.75v-1.5ZM19.25 19A2.25 2.25 0 0 1 17 21.25v1.5A3.75 3.75 0 0 0 20.75 19h-1.5ZM7 15.25A3.75 3.75 0 0 0 3.25 19h1.5A2.25 2.25 0 0 1 7 16.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookUpload);
export default ForwardRef;

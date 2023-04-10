import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookMarked = (
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
            d='M9.75 2a.75.75 0 0 0-1.5 0h1.5ZM9 9h-.75a.75.75 0 0 0 1.194.605L9 9Zm3-2.2.444-.605a.75.75 0 0 0-.888 0L12 6.8ZM15 9l-.444.605A.75.75 0 0 0 15.75 9H15Zm.75-7a.75.75 0 0 0-1.5 0h1.5ZM7 16.75h13v-1.5H7v1.5ZM19.25 16v3h1.5v-3h-1.5ZM17 21.25H7v1.5h10v-1.5Zm-10 0A2.25 2.25 0 0 1 4.75 19h-1.5A3.75 3.75 0 0 0 7 22.75v-1.5ZM19.25 19A2.25 2.25 0 0 1 17 21.25v1.5A3.75 3.75 0 0 0 20.75 19h-1.5ZM7 15.25A3.75 3.75 0 0 0 3.25 19h1.5A2.25 2.25 0 0 1 7 16.75v-1.5Zm0-12.5h10v-1.5H7v1.5ZM19.25 5v11h1.5V5h-1.5ZM4.75 19V5h-1.5v14h1.5ZM17 2.75A2.25 2.25 0 0 1 19.25 5h1.5A3.75 3.75 0 0 0 17 1.25v1.5ZM7 1.25A3.75 3.75 0 0 0 3.25 5h1.5A2.25 2.25 0 0 1 7 2.75v-1.5ZM8.25 2v7h1.5V2h-1.5Zm1.194 7.605 3-2.2-.888-1.21-3 2.2.888 1.21Zm2.112-2.2 3 2.2.888-1.21-3-2.2-.888 1.21ZM15.75 9V2h-1.5v7h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookMarked);
export default ForwardRef;

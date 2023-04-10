import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBlackboard = (
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
            d='M21 19v.75a.75.75 0 0 0 .75-.75H21ZM3 19h-.75c0 .414.336.75.75.75V19Zm14 0v.75a.75.75 0 0 0 .75-.75H17Zm-4 0h-.75c0 .414.336.75.75.75V19Zm9 .75a.75.75 0 0 0 0-1.5v1.5Zm-20-1.5a.75.75 0 0 0 0 1.5v-1.5Zm10-8.5a.75.75 0 0 0 0-1.5v1.5Zm-5-1.5a.75.75 0 0 0 0 1.5v-1.5Zm0-2.5h10v-1.5H7v1.5ZM20.25 9v10h1.5V9h-1.5Zm.75 9.25H3v1.5h18v-1.5ZM3.75 19V9h-1.5v10h1.5ZM17 5.75A3.25 3.25 0 0 1 20.25 9h1.5A4.75 4.75 0 0 0 17 4.25v1.5ZM7 4.25A4.75 4.75 0 0 0 2.25 9h1.5A3.25 3.25 0 0 1 7 5.75v-1.5Zm7 12.5h2v-1.5h-2v1.5Zm2.25.25v2h1.5v-2h-1.5Zm.75 1.25h-4v1.5h4v-1.5Zm-3.25.75v-2h-1.5v2h1.5ZM16 16.75a.25.25 0 0 1 .25.25h1.5A1.75 1.75 0 0 0 16 15.25v1.5Zm-2-1.5A1.75 1.75 0 0 0 12.25 17h1.5a.25.25 0 0 1 .25-.25v-1.5Zm8 3H2v1.5h20v-1.5Zm-10-10H7v1.5h5v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBlackboard);
export default ForwardRef;

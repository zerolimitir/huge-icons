import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMailArrowLeft = (
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
            d='m16.707 4.707-.53.53.53-.53Zm.763 1.823a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-.763-3.237.53.53-.53-.53Zm1.823-.763a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM22 4.75a.75.75 0 0 0 0-1.5v1.5Zm-5-1.5a.75.75 0 0 0 0 1.5v-1.5ZM6.45 12.4a.75.75 0 1 0-.9 1.2l.9-1.2Zm1.75 2.25.45-.6-.45.6Zm3.6 0 .45.6-.45-.6Zm2.65-1.05a.75.75 0 1 0-.9-1.2l.9 1.2Zm1.727-8.363L17.47 6.53l1.06-1.06-1.293-1.293-1.06 1.06Zm1.06-1.414L18.53 2.53l-1.06-1.06-1.293 1.293 1.06 1.06ZM22 3.25h-5v1.5h5v-1.5Zm-4.763.927a.25.25 0 0 1 0-.354l-1.06-1.06a1.75 1.75 0 0 0 0 2.474l1.06-1.06ZM5 8.75h10v-1.5H5v1.5ZM17.25 11v8h1.5v-8h-1.5ZM15 21.25H5v1.5h10v-1.5ZM2.75 19v-8h-1.5v8h1.5ZM5 21.25A2.25 2.25 0 0 1 2.75 19h-1.5A3.75 3.75 0 0 0 5 22.75v-1.5ZM17.25 19A2.25 2.25 0 0 1 15 21.25v1.5A3.75 3.75 0 0 0 18.75 19h-1.5ZM15 8.75A2.25 2.25 0 0 1 17.25 11h1.5A3.75 3.75 0 0 0 15 7.25v1.5ZM5 7.25A3.75 3.75 0 0 0 1.25 11h1.5A2.25 2.25 0 0 1 5 8.75v-1.5Zm.55 6.35 2.2 1.65.9-1.2-2.2-1.65-.9 1.2Zm6.7 1.65 2.2-1.65-.9-1.2-2.2 1.65.9 1.2Zm-4.5 0c1.333 1 3.167 1 4.5 0l-.9-1.2c-.8.6-1.9.6-2.7 0l-.9 1.2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMailArrowLeft);
export default ForwardRef;

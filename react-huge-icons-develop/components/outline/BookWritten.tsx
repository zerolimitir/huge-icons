import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBookWritten = (
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
            d='M8 6.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-8 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5 5h13v-1.5H7v1.5Zm10 4.5H7v1.5h10v-1.5Zm-10 0A2.25 2.25 0 0 1 4.75 19h-1.5A3.75 3.75 0 0 0 7 22.75v-1.5Zm10 1.5A3.75 3.75 0 0 0 20.75 19h-1.5A2.25 2.25 0 0 1 17 21.25v1.5Zm-10-7.5A3.75 3.75 0 0 0 3.25 19h1.5A2.25 2.25 0 0 1 7 16.75v-1.5Zm0-12.5h10v-1.5H7v1.5ZM19.25 5v14h1.5V5h-1.5ZM4.75 19V5h-1.5v14h1.5ZM17 2.75A2.25 2.25 0 0 1 19.25 5h1.5A3.75 3.75 0 0 0 17 1.25v1.5ZM7 1.25A3.75 3.75 0 0 0 3.25 5h1.5A2.25 2.25 0 0 1 7 2.75v-1.5Zm1 6.5h8v-1.5H8v1.5Zm0 4h4v-1.5H8v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookWritten);
export default ForwardRef;

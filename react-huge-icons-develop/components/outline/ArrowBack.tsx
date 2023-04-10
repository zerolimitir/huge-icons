import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowBack = (
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
            d='m5 8-.45.6a.75.75 0 0 1 0-1.2L5 8Zm0 8.75a.75.75 0 0 1 0-1.5v1.5ZM8.55 4.4a.75.75 0 1 1 .9 1.2l-.9-1.2Zm.9 6a.75.75 0 1 1-.9 1.2l.9-1.2ZM5 7.25h10v1.5H5v-1.5Zm10 9.5H5v-1.5h10v1.5ZM4.55 7.4l4-3 .9 1.2-4 3-.9-1.2Zm.9 0 4 3-.9 1.2-4-3 .9-1.2Zm14.3 4.6A4.75 4.75 0 0 1 15 16.75v-1.5A3.25 3.25 0 0 0 18.25 12h1.5ZM15 7.25A4.75 4.75 0 0 1 19.75 12h-1.5A3.25 3.25 0 0 0 15 8.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowBack);
export default ForwardRef;

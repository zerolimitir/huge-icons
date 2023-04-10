import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMinimizeRectangleDoted = (
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
            fillRule='evenodd'
            d='M11.309 5.25c.36-2.267 2.323-4 4.691-4h2A4.75 4.75 0 0 1 22.75 6v2a4.751 4.751 0 0 1-4 4.691V18A4.75 4.75 0 0 1 14 22.75H6A4.75 4.75 0 0 1 1.25 18v-8A4.75 4.75 0 0 1 6 5.25h5.309Zm-.059 1.5H6A3.25 3.25 0 0 0 2.75 10v8A3.25 3.25 0 0 0 6 21.25h8A3.25 3.25 0 0 0 17.25 18v-5.25H16a4.728 4.728 0 0 1-2.787-.903L8.811 16.25H12a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v3.19l4.403-4.403A4.728 4.728 0 0 1 11.25 8V6.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinimizeRectangleDoted);
export default ForwardRef;

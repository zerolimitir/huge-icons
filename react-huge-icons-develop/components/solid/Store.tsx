import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStore = (
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
            d='M22 6v2.25c0 2.071-1.492 3.75-3.333 3.75-1.841 0-3.334-1.679-3.334-3.75 0 2.071-1.492 3.75-3.333 3.75-1.84 0-3.333-1.679-3.333-3.75 0 2.071-1.493 3.75-3.334 3.75C3.493 12 2 10.321 2 8.25V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4Zm-6.667 6.056c.844.881 1.996 1.444 3.334 1.444A4.5 4.5 0 0 0 21 12.857V18a4 4 0 0 1-4 4h-6v-3a2 2 0 1 0-4 0v3a4 4 0 0 1-4-4v-5.143a4.5 4.5 0 0 0 2.333.643c1.337 0 2.49-.563 3.334-1.444.843.881 1.996 1.444 3.333 1.444 1.337 0 2.49-.563 3.333-1.444ZM15 15a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStore);
export default ForwardRef;

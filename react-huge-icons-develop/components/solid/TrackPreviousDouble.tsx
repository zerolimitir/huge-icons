import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrackPreviousDouble = (
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
            d='M3.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0v-3.438c.075.06.156.115.242.165l6.031 3.518c1.333.778 3.008-.184 3.008-1.727v-1.185l4.992 2.912c1.333.778 3.008-.184 3.008-1.727V8.482c0-1.544-1.675-2.505-3.008-1.728l-4.992 2.913V8.482c0-1.544-1.675-2.505-3.008-1.728l-6.03 3.518a2.08 2.08 0 0 0-.243.165V7Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPreviousDouble);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMask = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18 11V8a2 2 0 1 1 4 0v4a4 4 0 0 1-4 4M6 11V8a2 2 0 1 0-4 0v4a4 4 0 0 0 4 4m4.211-8.106L6 10v5.127a4 4 0 0 0 1.44 3.072l.719.6a6 6 0 0 0 7.682 0l.72-.6A4 4 0 0 0 18 15.126V10l-4.211-2.106a4 4 0 0 0-3.578 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMask);
export default ForwardRef;

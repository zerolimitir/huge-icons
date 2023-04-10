import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBooks = (
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
            d='M1.25 3.75A.75.75 0 0 1 2 3h13a3 3 0 1 1 0 6h7a.75.75 0 0 1 0 1.5h-2v3h2a.75.75 0 0 1 0 1.5h-7a3 3 0 1 1 0 6H2a.75.75 0 0 1 0-1.5h2v-3H2A.75.75 0 0 1 2 15h7a3 3 0 1 1 0-6H2a.75.75 0 0 1 0-1.5h2v-3H2a.75.75 0 0 1-.75-.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBooks);
export default ForwardRef;

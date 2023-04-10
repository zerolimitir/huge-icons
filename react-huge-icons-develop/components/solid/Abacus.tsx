import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAbacus = (
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
            d='M4 2a2 2 0 0 0-2 2v16a2 2 0 1 0 4 0v-3.25h2.25v.75a.75.75 0 0 0 1.5 0v-.75h1.5v.75a.75.75 0 0 0 1.5 0v-.75H18V20a2 2 0 1 0 4 0V4a2 2 0 1 0-4 0v3.25h-2.25V6.5a.75.75 0 0 0-1.5 0v.75h-1.5V6.5a.75.75 0 0 0-1.5 0v.75H6V4a2 2 0 0 0-2-2Zm2 6.75v6.5h2.25v-.75a.75.75 0 0 1 1.5 0v.75h1.5v-.75a.75.75 0 0 1 1.5 0v.75H18v-6.5h-2.25v.75a.75.75 0 0 1-1.5 0v-.75h-1.5v.75a.75.75 0 0 1-1.5 0v-.75H6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgAbacus);
export default ForwardRef;

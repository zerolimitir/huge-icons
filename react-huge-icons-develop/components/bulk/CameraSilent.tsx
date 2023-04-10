import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraSilent = (
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
            d='M2 10a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M8.406 3.89 7 6h10l-1.406-2.11A2 2 0 0 0 13.93 3h-3.86a2 2 0 0 0-1.664.89Z'
        />
        <path
            fill='currentColor'
            d='M6 21h12a4 4 0 0 0 1.605-.335l1.865 1.865a.75.75 0 1 0 1.06-1.06l-20-20a.75.75 0 0 0-1.06 1.06l3.582 3.583A4.002 4.002 0 0 0 2 10v7a4 4 0 0 0 4 4Z'
        />
        <path
            fill='currentColor'
            d='M15 13.5a3 3 0 0 0-3.411-2.972l3.383 3.383c.019-.134.028-.271.028-.411Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraSilent);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDestinationDashedThree = (
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
            d='M21 7c0 2.21-2 6-4 6s-4-3.79-4-6a4 4 0 0 1 8 0Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M18.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.25 15A2.75 2.75 0 0 1 10 12.25h2a.75.75 0 0 1 0 1.5h-2a1.25 1.25 0 1 0 0 2.5h9a2.75 2.75 0 1 1 0 5.5H3a.75.75 0 0 1 0-1.5h16a1.25 1.25 0 1 0 0-2.5h-9A2.75 2.75 0 0 1 7.25 15Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDestinationDashedThree);
export default ForwardRef;

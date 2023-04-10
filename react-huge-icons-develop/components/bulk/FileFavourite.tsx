import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFileFavourite = (
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
            d='M3 6v12a4 4 0 0 0 4 4h6l8-8V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M13 18v4l8-8h-4a4 4 0 0 0-4 4ZM9.365 8.706l1.854 2.318a1 1 0 0 0 1.562 0l1.854-2.318c.236-.295.365-.662.365-1.04V7.59a1.591 1.591 0 0 0-2.716-1.125L12 6.75l-.284-.284A1.591 1.591 0 0 0 9 7.591v.075c0 .378.129.745.365 1.04Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFileFavourite);
export default ForwardRef;

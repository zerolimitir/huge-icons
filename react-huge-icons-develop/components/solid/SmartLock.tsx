import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartLock = (
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
            d='M8.75 6a3.25 3.25 0 0 1 6.5 0v2h-6.5V6ZM7.253 8.07A.759.759 0 0 1 7.25 8V6a4.75 4.75 0 0 1 9.5 0v2a.763.763 0 0 1-.003.07A4.001 4.001 0 0 1 20 12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6a4.001 4.001 0 0 1 3.253-3.93ZM12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4.462-3.712A5.231 5.231 0 0 1 12 12.75a5.23 5.23 0 0 1 3.712 1.538.75.75 0 1 0 1.06-1.061A6.731 6.731 0 0 0 12 11.25a6.731 6.731 0 0 0-4.773 1.977.75.75 0 0 0 1.06 1.06Zm2.121 2.121A2.24 2.24 0 0 1 12 15.75a2.24 2.24 0 0 1 1.591.659.75.75 0 1 0 1.06-1.06A3.74 3.74 0 0 0 12 14.25a3.74 3.74 0 0 0-2.652 1.098.75.75 0 0 0 1.061 1.061Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartLock);
export default ForwardRef;

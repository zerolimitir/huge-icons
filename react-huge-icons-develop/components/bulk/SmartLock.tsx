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
            d='M12 2.75A3.25 3.25 0 0 0 8.75 6v3a.75.75 0 0 1-1.5 0V6a4.75 4.75 0 0 1 9.5 0v3a.75.75 0 0 1-1.5 0V6A3.25 3.25 0 0 0 12 2.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M4 12a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z'
            opacity={0.4}
        />
        <path fill='currentColor' d='M12.75 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 12.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 1 1-1.061-1.061A6.731 6.731 0 0 1 12 11.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 12 12.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 1 1-1.06-1.06A3.74 3.74 0 0 1 12 14.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 12 15.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartLock);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSmartMusic = (
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
            d='M18.25 9.25A.75.75 0 0 1 19 10v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75Zm-8.5 2a.75.75 0 0 1 .75.75v8A.75.75 0 0 1 9 20v-8a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M19 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-8.5 2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M14 2.75a5.23 5.23 0 0 0-3.712 1.538.75.75 0 0 1-1.061-1.061A6.731 6.731 0 0 1 14 1.25a6.73 6.73 0 0 1 4.773 1.977.75.75 0 0 1-1.06 1.06A5.231 5.231 0 0 0 14 2.75Zm0 3a2.24 2.24 0 0 0-1.591.659.75.75 0 0 1-1.06-1.06A3.74 3.74 0 0 1 14 4.25a3.74 3.74 0 0 1 2.652 1.098.75.75 0 0 1-1.061 1.061A2.24 2.24 0 0 0 14 5.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M17.804 8.239a1 1 0 0 1 1.196.98v1.961a1 1 0 0 1-.804.98l-8 1.6A1 1 0 0 1 9 12.78v-1.96a1 1 0 0 1 .804-.981l8-1.6Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSmartMusic);
export default ForwardRef;

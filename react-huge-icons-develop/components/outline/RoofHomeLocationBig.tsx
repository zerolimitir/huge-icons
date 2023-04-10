import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHomeLocationBig = (
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
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M16.305 15.604c0 2.283-2.153 6.199-4.305 6.199-2.152 0-4.305-3.916-4.305-6.199 0-2.282 1.928-4.132 4.305-4.132s4.305 1.85 4.305 4.132Z'
        />
        <path
            stroke='currentColor'
            strokeWidth={1.5}
            d='M13.291 15.346a1.291 1.291 0 1 1-2.582 0 1.291 1.291 0 0 1 2.582 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeLocationBig);
export default ForwardRef;

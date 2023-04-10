import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHomeLink = (
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
            d='M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12.177 8.934a2.75 2.75 0 0 1 3.889 3.89l-.354.353a.75.75 0 1 1-1.06-1.06l.353-.354a1.25 1.25 0 1 0-1.768-1.768l-1.414 1.414a1.25 1.25 0 0 0 0 1.768l-1.06 1.06a2.75 2.75 0 0 1 0-3.889l1.414-1.414Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.823 17.066a2.75 2.75 0 1 1-3.889-3.89l.354-.353a.75.75 0 0 1 1.06 1.06l-.353.354a1.25 1.25 0 0 0 1.768 1.768l1.414-1.414a1.25 1.25 0 0 0 0-1.768l1.06-1.06a2.75 2.75 0 0 1 0 3.889l-1.414 1.414Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeLink);
export default ForwardRef;

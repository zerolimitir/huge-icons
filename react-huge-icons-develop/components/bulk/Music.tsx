import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusic = (
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
            d='M19 7.062v9.165a.75.75 0 0 0 1.5 0s.164-5.86 0-7.38A1.99 1.99 0 0 0 19 7.063Zm-9 2.915a4.06 4.06 0 0 0-1.5 2.925v5.325a.75.75 0 0 0 1.5 0v-8.25Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M20.5 16.227a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-10.5 2a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
        />
        <path
            fill='currentColor'
            d='m11.235 9.315 6.633-2.21A2 2 0 0 1 20.5 9.001v-5a2 2 0 0 0-2.633-1.898l-6.632 2.211A4 4 0 0 0 8.5 8.11v5a4 4 0 0 1 2.735-3.795Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusic);
export default ForwardRef;

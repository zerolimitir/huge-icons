import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInCircle = (
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
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m12 8 4 4m0 0-4 4m4-4H2'
        />
        <path
            fill='currentColor'
            d='M8.53 18.83a.75.75 0 0 1 .94-1.17l-.94 1.17Zm.94-12.49a.75.75 0 1 1-.94-1.17l.94 1.17ZM14 19.25A7.25 7.25 0 0 0 21.25 12h1.5A8.75 8.75 0 0 1 14 20.75v-1.5ZM21.25 12A7.25 7.25 0 0 0 14 4.75v-1.5A8.75 8.75 0 0 1 22.75 12h-1.5ZM9.47 17.66A7.216 7.216 0 0 0 14 19.25v1.5a8.717 8.717 0 0 1-5.47-1.92l.94-1.17ZM14 4.75c-1.715 0-3.29.595-4.53 1.59l-.94-1.17A8.716 8.716 0 0 1 14 3.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInCircle);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOutCircle = (
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
            d='m18 8 4 4m0 0-4 4m4-4H8'
        />
        <path
            fill='currentColor'
            d='M15.47 18.83a.75.75 0 1 0-.94-1.17l.94 1.17Zm-.94-12.49a.75.75 0 1 0 .94-1.17l-.94 1.17ZM10 19.25A7.25 7.25 0 0 1 2.75 12h-1.5A8.75 8.75 0 0 0 10 20.75v-1.5ZM2.75 12A7.25 7.25 0 0 1 10 4.75v-1.5A8.75 8.75 0 0 0 1.25 12h1.5Zm11.78 5.66A7.216 7.216 0 0 1 10 19.25v1.5a8.717 8.717 0 0 0 5.47-1.92l-.94-1.17ZM10 4.75c1.715 0 3.29.595 4.53 1.59l.94-1.17A8.716 8.716 0 0 0 10 3.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOutCircle);
export default ForwardRef;

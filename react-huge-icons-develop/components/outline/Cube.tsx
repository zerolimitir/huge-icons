import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCube = (
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
            d='M20 6.444 12 10 4 6.444'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m18.625 4.944-5-2.222a4 4 0 0 0-3.25 0l-5 2.222A4 4 0 0 0 3 8.6v6.8a4 4 0 0 0 2.375 3.656l5 2.222a4 4 0 0 0 3.25 0l5-2.222A4 4 0 0 0 21 15.4V8.6a4 4 0 0 0-2.375-3.656ZM12 10v11'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCube);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartWaveFull = (
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
            d='M6 1.25A4.75 4.75 0 0 0 1.25 6v12A4.75 4.75 0 0 0 6 22.75h12A4.75 4.75 0 0 0 22.75 18V6A4.75 4.75 0 0 0 18 1.25H6ZM2.75 6A3.25 3.25 0 0 1 6 2.75h12A3.25 3.25 0 0 1 21.25 6v8.438l-1.862-1.397a2 2 0 0 0-2.615.185l-.81.812a2 2 0 0 1-3.204-.52l-1.518-3.036a2 2 0 0 0-3.203-.52l-.811.812a2 2 0 0 1-2.615.185L2.75 9.563V6Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartWaveFull);
export default ForwardRef;

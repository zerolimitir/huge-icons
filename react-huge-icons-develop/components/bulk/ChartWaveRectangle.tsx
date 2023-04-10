import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartWaveRectangle = (
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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10 7.75c-.69 0-1.25.56-1.25 1.25v1A2.75 2.75 0 0 1 6 12.75H5a.75.75 0 0 1 0-1.5h1c.69 0 1.25-.56 1.25-1.25V9a2.75 2.75 0 0 1 5.5 0v6a1.25 1.25 0 1 0 2.5 0v-1A2.75 2.75 0 0 1 18 11.25h1a.75.75 0 0 1 0 1.5h-1c-.69 0-1.25.56-1.25 1.25v1a2.75 2.75 0 1 1-5.5 0V9c0-.69-.56-1.25-1.25-1.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartWaveRectangle);
export default ForwardRef;

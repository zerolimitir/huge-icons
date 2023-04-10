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
            fillRule='evenodd'
            d='M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm2.75 7a1.25 1.25 0 1 1 2.5 0v6a2.75 2.75 0 1 0 5.5 0v-1c0-.69.56-1.25 1.25-1.25h1a.75.75 0 0 0 0-1.5h-1A2.75 2.75 0 0 0 15.25 14v1a1.25 1.25 0 1 1-2.5 0V9a2.75 2.75 0 1 0-5.5 0v1c0 .69-.56 1.25-1.25 1.25H5a.75.75 0 0 0 0 1.5h1A2.75 2.75 0 0 0 8.75 10V9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartWaveRectangle);
export default ForwardRef;

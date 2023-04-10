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
            d='M2 6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M6 22h12a4 4 0 0 0 4-4v-3l-2.612-1.96a2 2 0 0 0-2.615.187l-.81.81a2 2 0 0 1-3.204-.519l-1.518-3.036a2 2 0 0 0-3.203-.52l-.811.812a2 2 0 0 1-2.615.185L2 9v9a4 4 0 0 0 4 4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartWaveFull);
export default ForwardRef;

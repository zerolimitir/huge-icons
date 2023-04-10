import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartPie = (
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
            d='M13.987 2.197a10.012 10.012 0 0 1 7.815 7.816C22.021 11.095 21.105 12 20 12h-6a2 2 0 0 1-2-2V4c0-1.105.905-2.02 1.987-1.803ZM2 13a9 9 0 0 1 8.5-8.986V10a3.5 3.5 0 0 0 3.5 3.5h5.986A9 9 0 0 1 2 13Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartPie);
export default ForwardRef;

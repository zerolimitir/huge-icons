import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPieChart = (
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
            d='M13.987.947a10.012 10.012 0 0 1 7.815 7.816c.219 1.083-.697 1.987-1.802 1.987h-6a2 2 0 0 1-2-2v-6c0-1.105.905-2.02 1.987-1.803ZM2 11.75a9 9 0 0 1 8.5-8.986V8.75a3.5 3.5 0 0 0 3.5 3.5h5.986A9 9 0 0 1 2 11.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPieChart);
export default ForwardRef;

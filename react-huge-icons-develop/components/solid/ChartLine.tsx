import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChartLine = (
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
            d='M2.75 2a.75.75 0 0 0-1.5 0v16A4.75 4.75 0 0 0 6 22.75h16a.75.75 0 0 0 0-1.5H6A3.25 3.25 0 0 1 2.75 18V2Zm18.842 7.46a.75.75 0 1 0-1.184-.92l-3.756 4.828a.397.397 0 0 1-.638 0l-2.966-3.814c-.7-.9-2.062-.9-2.763 0L6.408 14.54a.75.75 0 1 0 1.184.92l3.877-4.985a.25.25 0 0 1 .395 0l2.966 3.814a1.897 1.897 0 0 0 3.006 0l3.756-4.829Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChartLine);
export default ForwardRef;

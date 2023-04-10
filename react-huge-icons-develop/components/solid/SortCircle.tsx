import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSortCircle = (
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
            d='M4.945 19.817a2.75 2.75 0 0 0 4.11 0l1.506-1.694a.75.75 0 1 0-1.122-.996L7.934 18.82a1.28 1.28 0 0 1-.184.17V5.01c.066.05.127.106.184.17L9.44 6.873a.75.75 0 0 0 1.122-.996L9.055 4.183a2.75 2.75 0 0 0-4.11 0L3.439 5.877a.75.75 0 0 0 1.122.996L6.066 5.18a1.26 1.26 0 0 1 .184-.17v13.98a1.261 1.261 0 0 1-.184-.17L4.56 17.127a.75.75 0 1 0-1.122.996l1.506 1.694ZM14 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm0 10a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSortCircle);
export default ForwardRef;

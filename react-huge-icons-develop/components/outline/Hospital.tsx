import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHospital = (
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
            strokeWidth={1.5}
            d='M4 22V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v16M9 22v-5a3 3 0 1 1 6 0v5M12 5v6m3-3H9M2 22h20'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHospital);
export default ForwardRef;

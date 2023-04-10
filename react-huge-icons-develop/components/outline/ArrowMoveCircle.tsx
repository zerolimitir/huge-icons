import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgArrowMoveCircle = (
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
            d='M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Zm11 4-2 2m0 0-2-2m2 2V6m0 0 2 2m-2-2-2 2m-2 6-2-2m0 0 2-2m-2 2h12m0 0-2 2m2-2-2-2'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowMoveCircle);
export default ForwardRef;

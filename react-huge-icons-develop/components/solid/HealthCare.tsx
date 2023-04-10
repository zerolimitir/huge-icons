import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHealthCare = (
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
            d='m16 3.402.459-.456a3.258 3.258 0 0 1 4.59 0 3.217 3.217 0 0 1 0 4.566l-4.13 4.11a1.303 1.303 0 0 1-1.837 0l-4.131-4.11a3.217 3.217 0 0 1 0-4.566 3.258 3.258 0 0 1 4.59 0l.459.456ZM2 10h2l6.262 2.74a1.911 1.911 0 0 1 .757 2.906l2.714 1.72a6.001 6.001 0 0 0 2.683.634H18a2 2 0 1 1 0 4H9.889a8 8 0 0 1-3.578-.845L2 19v-9Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHealthCare);
export default ForwardRef;

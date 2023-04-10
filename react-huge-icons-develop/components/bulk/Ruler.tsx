import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRuler = (
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
            d='M2.646 18.236a2.205 2.205 0 0 1 0-3.118L15.118 2.646a2.205 2.205 0 0 1 3.118 0l3.118 3.118a2.205 2.205 0 0 1 0 3.118L8.882 21.354a2.205 2.205 0 0 1-3.118 0l-3.118-3.118Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.706 8.352a.75.75 0 0 1 1.06 0l1.56 1.559-1.061 1.06-1.56-1.559a.75.75 0 0 1 0-1.06Zm-3.118 3.118a.75.75 0 0 1 1.06 0l1.56 1.559-1.061 1.06-1.56-1.559a.75.75 0 0 1 0-1.06Zm-3.118 3.118a.75.75 0 0 1 1.06 0l1.56 1.559-1.061 1.06-1.56-1.559a.75.75 0 0 1 0-1.06Zm-3.118 3.118a.75.75 0 0 1 1.06 0l1.56 1.559-1.061 1.06-1.56-1.559a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRuler);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMinusThin = (
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
            d='M18 12.75a.75.75 0 0 0 0-1.5v1.5Zm-12-1.5a.75.75 0 0 0 0 1.5v-1.5Zm12 0H6v1.5h12v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMinusThin);
export default ForwardRef;

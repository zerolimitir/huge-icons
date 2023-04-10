import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutThree = (
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
        <path fill='currentColor' d='M22 18a4 4 0 0 1-4 4H8V8h14v10Z' opacity={0.4} />
        <path
            fill='currentColor'
            d='M2 8V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v2H12v14H6a4 4 0 0 1-4-4V8Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThree);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutThirdThree = (
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
        <path fill='currentColor' d='M6 2h12a4 4 0 0 1 4 4v2h-7v14H9V8H2V6a4 4 0 0 1 4-4Z' />
        <path
            fill='currentColor'
            d='M22 18a4 4 0 0 1-4 4h-3V8h7v10ZM6 22a4 4 0 0 1-4-4V8h7v14H6Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutThirdThree);
export default ForwardRef;

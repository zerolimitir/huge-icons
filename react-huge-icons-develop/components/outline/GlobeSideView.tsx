import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgGlobeSideView = (
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
            d='M20.535 16.107a10 10 0 0 1-7.07 2.928m0 0a9.999 9.999 0 0 1-7.072-17.07m7.071 17.07v3m0 0h-3m3 0h3m4-13a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgGlobeSideView);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTestTubeCylindrical = (
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
        <path fill='currentColor' d='M8 2h8v16a4 4 0 0 1-8 0V2Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M16 8H8v10a4 4 0 0 0 8 0V8Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgTestTubeCylindrical);
export default ForwardRef;

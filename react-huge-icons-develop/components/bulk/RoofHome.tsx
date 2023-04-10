import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHome = (
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
            d='M2.495 10.709a1.987 1.987 0 0 1 .317-2.913L9.659 2.77a3.978 3.978 0 0 1 4.71.002L21.19 7.79a1.987 1.987 0 0 1 .33 2.896l-.468.543a2.98 2.98 0 0 0-.72 1.943v4.853A3.975 3.975 0 0 1 16.356 22H7.673a3.975 3.975 0 0 1-3.976-3.974V13.2a2.98 2.98 0 0 0-.741-1.968l-.461-.524Z'
            opacity={0.4}
        />
        <path stroke='currentColor' strokeLinecap='round' strokeWidth={1.5} d='M10 18h4' />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHome);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCalculatorModern = (
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
            d='M22 8.75a.75.75 0 0 0 0-1.5v1.5ZM2 7.25a.75.75 0 0 0 0 1.5v-1.5ZM14.75 22a.75.75 0 0 0 1.5 0h-1.5Zm1.5-14a.75.75 0 0 0-1.5 0h1.5Zm-8.5 14a.75.75 0 0 0 1.5 0h-1.5Zm1.5-14a.75.75 0 0 0-1.5 0h1.5Zm6.25 7.75a.75.75 0 0 0 0-1.5v1.5ZM2 14.25a.75.75 0 0 0 0 1.5v-1.5Zm4-11.5h12v-1.5H6v1.5ZM21.25 6v12h1.5V6h-1.5ZM18 21.25H6v1.5h12v-1.5ZM2.75 18V6h-1.5v12h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM6 1.25A4.75 4.75 0 0 0 1.25 6h1.5A3.25 3.25 0 0 1 6 2.75v-1.5Zm16 6H2v1.5h20v-1.5ZM16.25 22V8h-1.5v14h1.5Zm-7 0V8h-1.5v14h1.5Zm6.25-7.75H2v1.5h13.5v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalculatorModern);
export default ForwardRef;

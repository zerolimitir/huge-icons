import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCalculator = (
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
            d='M20 18h-.75.75Zm-4 4v.75V22Zm0-20v.75V2Zm4 4h.75H20ZM8 2v-.75V2ZM4 18h-.75H4Zm4 4v-.75.75ZM8 5.25a.75.75 0 0 0 0 1.5v-1.5Zm8 1.5a.75.75 0 0 0 0-1.5v1.5ZM4.75 18V6h-1.5v12h1.5ZM8 2.75h8v-1.5H8v1.5ZM19.25 6v12h1.5V6h-1.5ZM16 21.25H8v1.5h8v-1.5ZM19.25 18A3.25 3.25 0 0 1 16 21.25v1.5A4.75 4.75 0 0 0 20.75 18h-1.5ZM16 2.75A3.25 3.25 0 0 1 19.25 6h1.5A4.75 4.75 0 0 0 16 1.25v1.5ZM4.75 6A3.25 3.25 0 0 1 8 2.75v-1.5A4.75 4.75 0 0 0 3.25 6h1.5Zm-1.5 12A4.75 4.75 0 0 0 8 22.75v-1.5A3.25 3.25 0 0 1 4.75 18h-1.5ZM8 6.75h8v-1.5H8v1.5ZM8.75 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-8 4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-8 4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm4 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCalculator);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMoneyDash = (
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
            d='M6 4.75h12v-1.5H6v1.5ZM21.25 8v8h1.5V8h-1.5ZM18 19.25H6v1.5h12v-1.5ZM2.75 16V8h-1.5v8h1.5ZM6 19.25A3.25 3.25 0 0 1 2.75 16h-1.5A4.75 4.75 0 0 0 6 20.75v-1.5ZM21.25 16A3.25 3.25 0 0 1 18 19.25v1.5A4.75 4.75 0 0 0 22.75 16h-1.5ZM18 4.75A3.25 3.25 0 0 1 21.25 8h1.5A4.75 4.75 0 0 0 18 3.25v1.5ZM6 3.25A4.75 4.75 0 0 0 1.25 8h1.5A3.25 3.25 0 0 1 6 4.75v-1.5Zm-1 3a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 0h2v-1.5H5v1.5Zm12 8.5a.75.75 0 0 0 0 1.5v-1.5Zm2 1.5a.75.75 0 0 0 0-1.5v1.5Zm-2 0h2v-1.5h-2v1.5ZM13.25 12c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 12h-1.5ZM12 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 12 14.75v-1.5ZM10.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 12h1.5ZM12 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 9.25v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMoneyDash);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBarcodeBorder = (
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
            d='M1.25 8a.75.75 0 0 0 1.5 0h-1.5ZM8 2.75a.75.75 0 0 0 0-1.5v1.5Zm8-1.5a.75.75 0 0 0 0 1.5v-1.5ZM21.25 8a.75.75 0 0 0 1.5 0h-1.5Zm1.5 7.944a.75.75 0 0 0-1.5 0h1.5ZM16 21.25a.75.75 0 0 0 0 1.5v-1.5Zm-8 1.5a.75.75 0 0 0 0-1.5v1.5Zm-5.25-6.806a.75.75 0 0 0-1.5 0h1.5ZM7 11.25a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5ZM15.25 9.5a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm-5.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm-5.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm2.5 9a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm2.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm-9.5 2a.75.75 0 0 0 1.5 0h-1.5Zm1.5-2a.75.75 0 0 0-1.5 0h1.5Zm-6-6.5V6h-1.5v2h1.5ZM6 2.75h2v-1.5H6v1.5Zm10 0h2v-1.5h-2v1.5ZM21.25 6v2h1.5V6h-1.5Zm0 9.944V18h1.5v-2.056h-1.5ZM18 21.25h-2v1.5h2v-1.5Zm-10 0H6v1.5h2v-1.5ZM2.75 18v-2.056h-1.5V18h1.5ZM6 21.25A3.25 3.25 0 0 1 2.75 18h-1.5A4.75 4.75 0 0 0 6 22.75v-1.5ZM21.25 18A3.25 3.25 0 0 1 18 21.25v1.5A4.75 4.75 0 0 0 22.75 18h-1.5ZM18 2.75A3.25 3.25 0 0 1 21.25 6h1.5A4.75 4.75 0 0 0 18 1.25v1.5ZM2.75 6A3.25 3.25 0 0 1 6 2.75v-1.5A4.75 4.75 0 0 0 1.25 6h1.5ZM7 12.75h10v-1.5H7v1.5Zm9.75-3.25v-2h-1.5v2h1.5Zm-4 0v-2h-1.5v2h1.5Zm-4 0v-2h-1.5v2h1.5Zm4 7v-2h-1.5v2h1.5Zm4 0v-2h-1.5v2h1.5Zm-8 0v-2h-1.5v2h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBarcodeBorder);
export default ForwardRef;

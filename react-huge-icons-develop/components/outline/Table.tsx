import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTable = (
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
            d='M17 2.25h-5v1.5h5v-1.5Zm-5 0H7v1.5h5v-1.5Zm-5 19.5h5v-1.5H7v1.5Zm5 0h5v-1.5h-5v1.5ZM11.25 3v18h1.5V3h-1.5Zm-9 12.177V17h1.5v-1.823h-1.5ZM21.75 17v-1.823h-1.5V17h1.5ZM3 15.927h18v-1.5H3v1.5Zm18.75-.75V11.47h-1.5v3.706h1.5ZM2.25 11.47v3.706h1.5V11.47h-1.5Zm0-4.47v1.824h1.5V7h-1.5Zm0 1.824v2.647h1.5V8.824h-1.5Zm19.5 2.647V8.824h-1.5v2.647h1.5Zm0-2.647V7h-1.5v1.824h1.5ZM3 9.574h18v-1.5H3v1.5ZM17 3.75A3.25 3.25 0 0 1 20.25 7h1.5A4.75 4.75 0 0 0 17 2.25v1.5Zm0 18A4.75 4.75 0 0 0 21.75 17h-1.5A3.25 3.25 0 0 1 17 20.25v1.5Zm-10-1.5A3.25 3.25 0 0 1 3.75 17h-1.5A4.75 4.75 0 0 0 7 21.75v-1.5Zm0-18A4.75 4.75 0 0 0 2.25 7h1.5A3.25 3.25 0 0 1 7 3.75v-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTable);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTripodBoard = (
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
            d='M22 5h.75H22ZM2 5h-.75H2Zm3-3v.75V2Zm0 15v.75V17Zm-3-3h.75H2Zm17 3v-.75.75Zm3-3h-.75.75ZM7 6.25a.75.75 0 0 0 0 1.5v-1.5Zm10 1.5a.75.75 0 0 0 0-1.5v1.5Zm-10 3.5a.75.75 0 0 0 0 1.5v-1.5Zm5 1.5a.75.75 0 0 0 0-1.5v1.5Zm4.643 3.864a.75.75 0 1 0-1.286.772l1.286-.772Zm1.714 5.772a.75.75 0 1 0 1.286-.772l-1.286.772Zm-9.714-5a.75.75 0 0 0-1.286-.772l1.286.772Zm-4.286 4.228a.75.75 0 0 0 1.286.772l-1.286-.772ZM12.75 17a.75.75 0 0 0-1.5 0h1.5Zm-1.5 3a.75.75 0 0 0 1.5 0h-1.5ZM19 16.25H5v1.5h14v-1.5ZM2.75 14V5h-1.5v9h1.5ZM5 2.75h14v-1.5H5v1.5ZM21.25 5v9h1.5V5h-1.5ZM19 2.75A2.25 2.25 0 0 1 21.25 5h1.5A3.75 3.75 0 0 0 19 1.25v1.5ZM2.75 5A2.25 2.25 0 0 1 5 2.75v-1.5A3.75 3.75 0 0 0 1.25 5h1.5ZM5 16.25A2.25 2.25 0 0 1 2.75 14h-1.5A3.75 3.75 0 0 0 5 17.75v-1.5Zm14 1.5A3.75 3.75 0 0 0 22.75 14h-1.5A2.25 2.25 0 0 1 19 16.25v1.5Zm-12-10h10v-1.5H7v1.5Zm0 5h5v-1.5H7v1.5Zm8.357 4.636 3 5 1.286-.772-3-5-1.286.772Zm-8-.772-3 5 1.286.772 3-5-1.286-.772ZM11.25 17v3h1.5v-3h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTripodBoard);
export default ForwardRef;

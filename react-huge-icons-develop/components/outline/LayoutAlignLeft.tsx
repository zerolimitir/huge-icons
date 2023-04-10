import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLayoutAlignLeft = (
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
            d='M2 10h-.75H2Zm3-3v-.75V7Zm0 10v-.75.75Zm-3-3h.75H2Zm16 0h.75H18Zm-3 3v.75V17Zm3-7h-.75.75Zm-3-3v.75V7Zm7.75-2a.75.75 0 0 0-1.5 0h1.5Zm-1.5 14a.75.75 0 0 0 1.5 0h-1.5Zm-4-9v4h1.5v-4h-1.5ZM15 16.25H5v1.5h10v-1.5ZM2.75 14v-4h-1.5v4h1.5ZM5 7.75h10v-1.5H5v1.5ZM2.75 10A2.25 2.25 0 0 1 5 7.75v-1.5A3.75 3.75 0 0 0 1.25 10h1.5ZM5 16.25A2.25 2.25 0 0 1 2.75 14h-1.5A3.75 3.75 0 0 0 5 17.75v-1.5ZM17.25 14A2.25 2.25 0 0 1 15 16.25v1.5A3.75 3.75 0 0 0 18.75 14h-1.5Zm1.5-4A3.75 3.75 0 0 0 15 6.25v1.5A2.25 2.25 0 0 1 17.25 10h1.5Zm2.5-5v14h1.5V5h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLayoutAlignLeft);
export default ForwardRef;

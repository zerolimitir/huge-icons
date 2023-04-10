import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLandscapeLineCenter = (
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
            d='M3 10h-.75H3Zm3-3v.75V7Zm0 10v-.75.75Zm-3-3h.75H3Zm18 0h.75H21Zm-3 3v.75V17Zm3-7h-.75.75Zm-3-3v-.75V7Zm-5.25-4a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm1.5 10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 4a.75.75 0 0 0 1.5 0h-1.5Zm9-11v4h1.5v-4h-1.5ZM18 16.25H6v1.5h12v-1.5ZM3.75 14v-4h-1.5v4h1.5ZM6 7.75h12v-1.5H6v1.5ZM3.75 10A2.25 2.25 0 0 1 6 7.75v-1.5A3.75 3.75 0 0 0 2.25 10h1.5ZM6 16.25A2.25 2.25 0 0 1 3.75 14h-1.5A3.75 3.75 0 0 0 6 17.75v-1.5ZM20.25 14A2.25 2.25 0 0 1 18 16.25v1.5A3.75 3.75 0 0 0 21.75 14h-1.5Zm1.5-4A3.75 3.75 0 0 0 18 6.25v1.5A2.25 2.25 0 0 1 20.25 10h1.5Zm-10.5-7v4h1.5V3h-1.5Zm0 14v4h1.5v-4h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLandscapeLineCenter);
export default ForwardRef;

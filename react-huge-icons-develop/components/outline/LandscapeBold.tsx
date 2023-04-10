import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLandscapeBold = (
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
            d='M3 10h-.75H3Zm3-3v.75V7Zm0 10v-.75.75Zm-3-3h.75H3Zm18 0h.75H21Zm-3 3v.75V17Zm3-7h-.75.75Zm-3-3v-.75V7Zm-1 10h.75a.75.75 0 0 0-.75-.75V17ZM7 17v-.75a.75.75 0 0 0-.75.75H7Zm2 4v.75V21Zm-2-2h-.75H7Zm10 0h.75H17Zm-2 2v-.75.75ZM7 7h-.75c0 .414.336.75.75.75V7Zm10 0v.75a.75.75 0 0 0 .75-.75H17Zm-2-4v-.75V3Zm2 2h.75H17ZM7 5h-.75H7Zm2-2v.75V3Zm11.25 7v4h1.5v-4h-1.5ZM18 16.25H6v1.5h12v-1.5ZM3.75 14v-4h-1.5v4h1.5ZM6 7.75h12v-1.5H6v1.5ZM3.75 10A2.25 2.25 0 0 1 6 7.75v-1.5A3.75 3.75 0 0 0 2.25 10h1.5ZM6 16.25A2.25 2.25 0 0 1 3.75 14h-1.5A3.75 3.75 0 0 0 6 17.75v-1.5ZM20.25 14A2.25 2.25 0 0 1 18 16.25v1.5A3.75 3.75 0 0 0 21.75 14h-1.5Zm1.5-4A3.75 3.75 0 0 0 18 6.25v1.5A2.25 2.25 0 0 1 20.25 10h1.5Zm-5.5 7v2h1.5v-2h-1.5ZM15 20.25H9v1.5h6v-1.5ZM7.75 19v-2h-1.5v2h1.5ZM7 17.75h10v-1.5H7v1.5Zm2 2.5c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 9 21.75v-1.5ZM16.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 17.75 19h-1.5ZM7.75 7V5h-1.5v2h1.5ZM9 3.75h6v-1.5H9v1.5ZM16.25 5v2h1.5V5h-1.5ZM17 6.25H7v1.5h10v-1.5Zm-2-2.5c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 15 2.25v1.5ZM7.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 6.25 5h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLandscapeBold);
export default ForwardRef;

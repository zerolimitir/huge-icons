import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgFilterThreeLineBig = (
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
            d='M3.25 21a.75.75 0 0 0 1.5 0h-1.5Zm8 0a.75.75 0 0 0 1.5 0h-1.5Zm1.5-7a.75.75 0 0 0-1.5 0h1.5Zm0-11a.75.75 0 0 0-1.5 0h1.5Zm-8 0a.75.75 0 0 0-1.5 0h1.5Zm14.5 7a.75.75 0 0 0 1.5 0h-1.5Zm1.5-7a.75.75 0 0 0-1.5 0h1.5Zm-1.5 18a.75.75 0 0 0 1.5 0h-1.5Zm-14.5 0v-6h-1.5v6h1.5Zm8 0v-7h-1.5v7h1.5Zm0-16V3h-1.5v2h1.5Zm-8 4V3h-1.5v6h1.5Zm16 1V3h-1.5v7h1.5Zm0 11v-2h-1.5v2h1.5Zm-10-12V7h-1.5v2h1.5Zm2.5-2v2h1.5V7h-1.5Zm0 2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 14.75 9h-1.5ZM12 5.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 4.25v1.5ZM10.75 7c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 7h1.5Zm-1.5 2A2.75 2.75 0 0 0 12 11.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm-6.5 4v-2h-1.5v2h1.5Zm2.5-2v2h1.5v-2h-1.5Zm0 2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 6.75 13h-1.5ZM4 9.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 4 8.25v1.5ZM2.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 11h1.5Zm-1.5 2A2.75 2.75 0 0 0 4 15.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Zm17.5 4v-2h-1.5v2h1.5Zm2.5-2v2h1.5v-2h-1.5Zm0 2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 17h-1.5ZM20 13.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 12.25v1.5ZM18.75 15c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 17.25 15h1.5Zm-1.5 2A2.75 2.75 0 0 0 20 19.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLineBig);
export default ForwardRef;

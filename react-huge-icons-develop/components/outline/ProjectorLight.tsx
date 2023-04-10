import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProjectorLight = (
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
            d='M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-.75-10a.75.75 0 0 0-1.5 0h1.5Zm-1.5 2a.75.75 0 0 0 1.5 0h-1.5Zm-7 18a.75.75 0 0 0 1.5 0h-1.5Zm14 0a.75.75 0 0 0 1.5 0h-1.5Zm1.28-17.47a.75.75 0 0 0-1.06-1.06l1.06 1.06Zm-2.56.44a.75.75 0 0 0 1.06 1.06l-1.06-1.06ZM5.53 3.47a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm.44 2.56a.75.75 0 0 0 1.06-1.06L5.97 6.03ZM20.25 14v4h1.5v-4h-1.5ZM19 19.25H5v1.5h14v-1.5ZM3.75 18v-4h-1.5v4h1.5ZM19 11.25h-1.91v1.5H19v-1.5Zm-14 1.5h1.91v-1.5H5v1.5Zm0 6.5c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 20.75v-1.5ZM20.25 18c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 18h-1.5Zm1.5-4A2.75 2.75 0 0 0 19 11.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-18 0c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 2.25 14h1.5Zm12.5-2A4.25 4.25 0 0 1 12 16.25v1.5A5.75 5.75 0 0 0 17.75 12h-1.5ZM12 16.25A4.25 4.25 0 0 1 7.75 12h-1.5A5.75 5.75 0 0 0 12 17.75v-1.5ZM7.75 12A4.25 4.25 0 0 1 12 7.75v-1.5A5.75 5.75 0 0 0 6.25 12h1.5ZM12 7.75A4.25 4.25 0 0 1 16.25 12h1.5A5.75 5.75 0 0 0 12 6.25v1.5ZM11.25 2v2h1.5V2h-1.5Zm-7 18v2h1.5v-2h-1.5Zm14 0v2h1.5v-2h-1.5Zm.22-16.53-1.5 1.5 1.06 1.06 1.5-1.5-1.06-1.06Zm-14 1.06 1.5 1.5 1.06-1.06-1.5-1.5-1.06 1.06Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProjectorLight);
export default ForwardRef;

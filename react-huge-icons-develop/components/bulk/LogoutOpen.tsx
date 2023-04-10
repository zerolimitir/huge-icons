import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLogoutOpen = (
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
            fillRule='evenodd'
            d='M17.47 13.47a.75.75 0 1 0 1.06 1.06l1.293-1.293a1.75 1.75 0 0 0 0-2.474L18.53 9.47a.75.75 0 1 0-1.06 1.06l.72.72H13a.75.75 0 0 0 0 1.5h5.19l-.72.72ZM11 4.516h3a2.75 2.75 0 0 1 2.75 2.75.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25h-3v-1.5Zm5 12a.75.75 0 0 1 .75.75 2.75 2.75 0 0 1-2.75 2.75h-3v-1.5h3c.69 0 1.25-.56 1.25-1.25a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M3 5.997A2.13 2.13 0 0 1 4.018 4.2l3.428-1.835C8.966 1.41 11 2.438 11 4.162v15.676c0 1.724-2.035 2.752-3.554 1.796l-3.428-1.838A2.128 2.128 0 0 1 3 18V5.997Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLogoutOpen);
export default ForwardRef;

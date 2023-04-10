import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTemperatureCold = (
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
            d='M15 13h-.75a.75.75 0 0 0 .3.6L15 13Zm-6 0 .45.6a.75.75 0 0 0 .3-.6H9Zm7.25 4A4.25 4.25 0 0 1 12 21.25v1.5A5.75 5.75 0 0 0 17.75 17h-1.5ZM12 21.25A4.25 4.25 0 0 1 7.75 17h-1.5A5.75 5.75 0 0 0 12 22.75v-1.5Zm0-18.5A2.25 2.25 0 0 1 14.25 5h1.5A3.75 3.75 0 0 0 12 1.25v1.5Zm0-1.5A3.75 3.75 0 0 0 8.25 5h1.5A2.25 2.25 0 0 1 12 2.75v-1.5ZM14.25 5v8h1.5V5h-1.5Zm.3 8.6a4.243 4.243 0 0 1 1.7 3.4h1.5a5.742 5.742 0 0 0-2.3-4.6l-.9 1.2Zm-4.8-.6V5h-1.5v8h1.5Zm-2 4a4.24 4.24 0 0 1 1.7-3.4l-.9-1.2a5.742 5.742 0 0 0-2.3 4.6h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTemperatureCold);
export default ForwardRef;

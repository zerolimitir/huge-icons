import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTemperaturePlus = (
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
        <path fill='currentColor' d='M14 17a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z' />
        <path
            fill='currentColor'
            d='M15 13h-.75a.75.75 0 0 0 .3.6L15 13Zm-6 0 .45.6a.75.75 0 0 0 .3-.6H9Zm2.25 4a.75.75 0 0 0 1.5 0h-1.5Zm1.5-12a.75.75 0 0 0-1.5 0h1.5Zm6.5 1a.75.75 0 0 0 1.5 0h-1.5Zm1.5-4a.75.75 0 0 0-1.5 0h1.5ZM18 3.25a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM16.25 17A4.25 4.25 0 0 1 12 21.25v1.5A5.75 5.75 0 0 0 17.75 17h-1.5ZM12 21.25A4.25 4.25 0 0 1 7.75 17h-1.5A5.75 5.75 0 0 0 12 22.75v-1.5Zm0-18.5A2.25 2.25 0 0 1 14.25 5h1.5A3.75 3.75 0 0 0 12 1.25v1.5Zm0-1.5A3.75 3.75 0 0 0 8.25 5h1.5A2.25 2.25 0 0 1 12 2.75v-1.5ZM14.25 5v8h1.5V5h-1.5Zm.3 8.6a4.243 4.243 0 0 1 1.7 3.4h1.5a5.742 5.742 0 0 0-2.3-4.6l-.9 1.2Zm-4.8-.6V5h-1.5v8h1.5Zm-2 4a4.24 4.24 0 0 1 1.7-3.4l-.9-1.2a5.742 5.742 0 0 0-2.3 4.6h1.5Zm5 0V5h-1.5v12h1.5Zm8-11V2h-1.5v4h1.5ZM18 4.75h4v-1.5h-4v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTemperaturePlus);
export default ForwardRef;

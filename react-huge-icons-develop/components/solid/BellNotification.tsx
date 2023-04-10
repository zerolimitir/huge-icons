import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellNotification = (
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
            d='M20 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.676 4.823A5.005 5.005 0 0 1 12.1 4H12C8.77 4 6.054 6.49 5.68 9.794l-.345 3.044a3.816 3.816 0 0 1-.88 2.042C3.422 16.096 4.261 18 5.83 18h12.34c1.57 0 2.408-1.904 1.374-3.12a3.816 3.816 0 0 1-.879-2.042l-.341-3.015ZM14.972 20.07C14.515 21.2 13.357 22 12 22s-2.515-.8-2.972-1.928a.423.423 0 0 1 .395-.572h5.154a.423.423 0 0 1 .395.572Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellNotification);
export default ForwardRef;

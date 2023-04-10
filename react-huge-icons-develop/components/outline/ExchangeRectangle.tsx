import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgExchangeRectangle = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z'
        />
        <path
            fill='currentColor'
            d='M7.25 12a.75.75 0 0 0 1.5 0h-1.5ZM16 9v.75a.75.75 0 0 0 .53-1.28L16 9Zm-1.47-2.53a.75.75 0 1 0-1.06 1.06l1.06-1.06ZM8.75 12v-1h-1.5v1h1.5ZM10 9.75h6v-1.5h-6v1.5Zm6.53-1.28-2-2-1.06 1.06 2 2 1.06-1.06ZM8.75 11c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 11h1.5Zm8 1a.75.75 0 0 0-1.5 0h1.5ZM8 15v-.75a.75.75 0 0 0-.53 1.28L8 15Zm1.47 2.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM15.25 12v1h1.5v-1h-1.5ZM14 14.25H8v1.5h6v-1.5Zm-6.53 1.28 2 2 1.06-1.06-2-2-1.06 1.06ZM15.25 13c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 16.75 13h-1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgExchangeRectangle);
export default ForwardRef;

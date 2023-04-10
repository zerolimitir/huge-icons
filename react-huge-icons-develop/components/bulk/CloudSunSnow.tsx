import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCloudSunSnow = (
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
            d='M17 10c-.545 0-1.07.087-1.561.249a7.026 7.026 0 0 0-3.63-3.662 4 4 0 0 1 6.966 3.738A4.99 4.99 0 0 0 17 10Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm5.48 2.27a.75.75 0 0 1 0 1.06l-.707.708a.75.75 0 1 1-1.06-1.06l.706-.708a.75.75 0 0 1 1.061 0ZM22.75 9a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M2 13a7 7 0 0 0 7 7h8a5 5 0 1 0-1.561-9.751 7.026 7.026 0 0 0-3.63-3.662A7 7 0 0 0 2 13Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M12.75 22a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0-3a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.5 20A.75.75 0 1 1 8 20a.75.75 0 0 1 1.5 0Zm6.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-6.5-3A.75.75 0 1 1 8 17a.75.75 0 0 1 1.5 0Zm6.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCloudSunSnow);
export default ForwardRef;

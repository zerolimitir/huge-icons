import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgChatUser = (
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
            d='M13 3h-2a9 9 0 0 0-9 9v5a4 4 0 0 0 4 4h7a9 9 0 1 0 0-18Z'
            opacity={0.4}
        />
        <circle cx={12} cy={10} r={2} fill='currentColor' />
        <path
            fill='currentColor'
            d='M12 12a3.999 3.999 0 0 0-3.511 2.082C7.959 15.051 8.895 16 10 16h4c1.105 0 2.041-.949 1.511-1.918A3.999 3.999 0 0 0 12.001 12Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatUser);
export default ForwardRef;

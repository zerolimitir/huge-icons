import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgProfitCoin = (
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
            d='m10.53 4.866.72-.72V7.75a.75.75 0 0 0 1.5 0V4.146l.72.72a.75.75 0 1 0 1.06-1.06l-1.293-1.293a1.75 1.75 0 0 0-2.474 0L9.47 3.805a.75.75 0 0 0 1.06 1.061ZM6 10.75a2 2 0 1 0 0 4 2 2 0 1 0 0 4h4.5a5.5 5.5 0 0 1 6.416-5.424A2 2 0 0 0 15 10.75H6Zm14 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgProfitCoin);
export default ForwardRef;

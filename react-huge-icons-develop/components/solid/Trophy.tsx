import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrophy = (
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
            d='M17.954 4.199A2 2 0 0 0 16 2.625H8a2 2 0 0 0-1.954 1.574A2.75 2.75 0 0 0 2 6.625a4.751 4.751 0 0 0 4.04 4.697 6.003 6.003 0 0 0 5.211 5.257l-.001.046v3.25H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-3.25l-.001-.046a6.003 6.003 0 0 0 5.21-5.257A4.751 4.751 0 0 0 22 6.625a2.75 2.75 0 0 0-4.046-2.426ZM18 6.625v3.163a3.251 3.251 0 0 0 2.5-3.163 1.25 1.25 0 1 0-2.5 0ZM4.75 5.375c.69 0 1.25.56 1.25 1.25v3.163a3.251 3.251 0 0 1-2.5-3.163c0-.69.56-1.25 1.25-1.25Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrophy);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLocationShare = (
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
            d='M19 11c0 4.418-4.5 9-7 9s-7-4.582-7-9 3.134-7 7-7 7 2.582 7 7Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M3.388 5.332a.75.75 0 0 1 .327 1.009c-.612 1.198-.965 2.63-.965 4.284 0 1.033.204 2.088.567 3.128a.75.75 0 1 1-1.416.494c-.409-1.17-.651-2.393-.651-3.622 0-1.871.4-3.54 1.129-4.966a.75.75 0 0 1 1.009-.327Zm17.224 0a.75.75 0 0 1 1.01.327c.727 1.426 1.128 3.095 1.128 4.966 0 1.23-.242 2.452-.65 3.622a.75.75 0 1 1-1.417-.494c.363-1.04.567-2.095.567-3.128 0-1.654-.353-3.086-.965-4.284a.75.75 0 0 1 .327-1.01Z'
            clipRule='evenodd'
        />
        <circle cx={12} cy={11} r={3} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgLocationShare);
export default ForwardRef;

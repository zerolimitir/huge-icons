import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCargoShip = (
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
            d='M8 2h8a2 2 0 0 1 2 2v6.754l-4.648-1.978a3.45 3.45 0 0 0-2.704 0L6 10.754V4a2 2 0 0 1 2-2Zm5.75 3a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75ZM4.117 20.354c.127-.085.259-.16.394-.226a1.967 1.967 0 0 1-.056-.086l-2.153-3.528c-.65-1.063-.21-2.467.922-2.95l8.011-3.408a1.95 1.95 0 0 1 1.53 0l8.01 3.409c1.133.482 1.572 1.886.923 2.949l-2.209 3.619c.146.07.29.151.427.243l1.5 1a.75.75 0 0 1-.832 1.248l-1.5-1a1.954 1.954 0 0 0-2.168 0 3.468 3.468 0 0 1-3.84-.006 2 2 0 0 0-2.177-.029l-.185.118a3.332 3.332 0 0 1-3.7-.081 1.832 1.832 0 0 0-2.065-.024l-1.533 1.022a.75.75 0 0 1-.832-1.248l1.533-1.022Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCargoShip);
export default ForwardRef;

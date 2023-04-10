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
            d='M8 2h8a2 2 0 0 1 2 2v9H6V4a2 2 0 0 1 2-2Zm5 3.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='m11.235 9.156-8.01 3.409c-1.133.482-1.572 1.886-.923 2.949l2.956 5.13a2.581 2.581 0 0 1 2.187.368 2.582 2.582 0 0 0 2.866.063l.186-.118a2.75 2.75 0 0 1 2.994.037A2.72 2.72 0 0 0 16.5 21c.46-.307.992-.458 1.522-.454l3.676-5.032c.65-1.063.21-2.467-.922-2.95l-8.011-3.408a1.95 1.95 0 0 0-1.53 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M2.376 22.416a.75.75 0 0 0 1.04.208l1.533-1.022a1.832 1.832 0 0 1 2.066.024 3.332 3.332 0 0 0 3.7.081l.184-.118a2 2 0 0 1 2.176.03 3.468 3.468 0 0 0 3.841.005 1.954 1.954 0 0 1 2.168 0l1.5 1a.75.75 0 1 0 .832-1.248l-1.5-1a3.454 3.454 0 0 0-3.832 0 1.969 1.969 0 0 1-2.177-.006 3.5 3.5 0 0 0-3.813-.046l-.185.118a1.832 1.832 0 0 1-2.034-.045 3.332 3.332 0 0 0-3.758-.043l-1.533 1.022a.75.75 0 0 0-.208 1.04Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCargoShip);
export default ForwardRef;
